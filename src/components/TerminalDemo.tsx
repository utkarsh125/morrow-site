'use client';

import React, { useState, useEffect, useRef } from 'react';
import { THEMES, Theme } from '@/data/themes';
import { COMMANDS, CommandInfo } from '@/data/commands';
import { 
  Terminal, ChevronRight, ChevronDown, Sparkles, Send, 
  PanelLeft, Copy, Check, Info, Shield, RefreshCw, X, Play
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  timestamp: string;
  thought?: string;
  thoughtTime?: string;
  content: string;
  codeBlock?: {
    lang: string;
    code: string;
  };
  tokens?: number;
  speed?: string;
}

interface Session {
  id: string;
  title: string;
  model: string;
  time: string;
  messageCount: number;
}

interface TerminalDemoProps {
  currentTheme?: Theme;
  onThemeSelect?: (theme: Theme) => void;
}

export default function TerminalDemo({ currentTheme, onThemeSelect }: TerminalDemoProps) {
  // Theme state
  const [theme, setTheme] = useState<Theme>(currentTheme || THEMES[0]);
  
  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme]);

  // Sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Model state
  const [activeModel, setActiveModel] = useState('qwen2.5:7b');
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [sessionTitle, setSessionTitle] = useState('Rust Async Concurrency');

  // Input & Autocomplete
  const [inputVal, setInputVal] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [autocompleteIndex, setAutocompleteIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedResponseId, setCopiedResponseId] = useState<string | null>(null);

  // Thought block collapse states
  const [expandedThoughts, setExpandedThoughts] = useState<Record<string, boolean>>({
    'msg-2': true,
  });

  // Sessions list
  const [sessions, setSessions] = useState<Session[]>([
    { id: '1', title: 'Rust Async Concurrency', model: 'qwen2.5:7b', time: 'Just now', messageCount: 4 },
    { id: '2', title: 'SQLite WAL Performance', model: 'deepseek-r1:8b', time: '2 hours ago', messageCount: 12 },
    { id: '3', title: 'Homebrew Tap Release Config', model: 'llama3.2:3b', time: 'Yesterday', messageCount: 8 },
    { id: '4', title: 'Zero-Copy Stream Buffers', model: 'qwen2.5:7b', time: '2 days ago', messageCount: 18 },
  ]);
  const [activeSessionId, setActiveSessionId] = useState('1');

  // Chat messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'user',
      timestamp: '02:30:12',
      content: 'Can you show me an efficient worker pool pattern in Rust using Tokio channels and cancellation tokens?',
    },
    {
      id: 'msg-2',
      sender: 'assistant',
      timestamp: '02:30:14',
      thought: `Analyzing Tokio mpsc vs broadcast vs async-channel requirements.
1. Need bounded tokio::sync::mpsc for backpressure.
2. Incorporate tokio_util::sync::CancellationToken for graceful teardown without orphan tasks.
3. Use JoinSet to track active worker task handles efficiently.`,
      thoughtTime: '1.4s',
      content: `Here is an idiomatic and robust worker pool pattern in Rust using **Tokio** channels and **CancellationToken** for graceful shutdown:`,
      codeBlock: {
        lang: 'rust',
        code: `use tokio::sync::mpsc;
use tokio_util::sync::CancellationToken;
use tokio::task::JoinSet;

struct Job {
    id: u64,
    payload: String,
}

pub async fn run_pool(num_workers: usize, mut rx: mpsc::Receiver<Job>, token: CancellationToken) {
    let mut set = JoinSet::new();

    for worker_id in 0..num_workers {
        let token = token.clone();
        set.spawn(async move {
            loop {
                tokio::select! {
                    _ = token.cancelled() => {
                        println!("Worker {} received shutdown signal.", worker_id);
                        break;
                    }
                    Some(job) = rx.recv() => {
                        println!("Worker {} processing job #{}", worker_id, job.id);
                    }
                    else => break,
                }
            }
        });
    }

    while let Some(res) = set.join_next().await {
        let _ = res;
    }
}`
      },
      tokens: 618,
      speed: '43.2 t/s'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter commands for autocomplete
  const filteredCommands: CommandInfo[] = inputVal.startsWith('/')
    ? COMMANDS.filter((cmd) => cmd.name.toLowerCase().startsWith(inputVal.toLowerCase()))
    : [];

  useEffect(() => {
    if (inputVal.startsWith('/') && filteredCommands.length > 0) {
      setShowAutocomplete(true);
      setAutocompleteIndex(0);
    } else {
      setShowAutocomplete(false);
    }
  }, [inputVal]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleThought = (id: string) => {
    setExpandedThoughts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const handleCopyResponse = (msgId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedResponseId(msgId);
    setTimeout(() => setCopiedResponseId(null), 2000);
  };

  const executeCommand = (cmdText: string) => {
    const parts = cmdText.trim().split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
      content: cmdText,
    };

    let replyMsg: Message | null = null;

    if (command === '/help' || command === '/?') {
      replyMsg = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        timestamp: new Date().toLocaleTimeString(),
        content: `**Morrow Commands Palette:**\n• \`/model <name>\` - Switch active Ollama model\n• \`/theme <name>\` - Change Kitty terminal theme\n• \`/temp [on|off]\` - Toggle ephemeral mode\n• \`/sidebar\` - Toggle session sidebar\n• \`/clear\` - Clear current chat\n• \`/stats\` - Show session telemetry\n• \`/export md\` - Export conversation to markdown\n• \`/copy\` - Copy last response to clipboard`,
      };
    } else if (command === '/theme' || command === '/t') {
      if (!arg) {
        replyMsg = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          timestamp: new Date().toLocaleTimeString(),
          content: `Current theme: **${theme.name}** (${theme.category}). Type \`/theme <name>\` (e.g. \`/theme tokyo-night\`, \`/theme synthwave-84\`, \`/theme dracula\`) or use Ctrl-T to browse all 65+ themes.`,
        };
      } else {
        const found = THEMES.find(
          (t) => t.id.toLowerCase().includes(arg.toLowerCase()) || t.name.toLowerCase().includes(arg.toLowerCase())
        );
        if (found) {
          setTheme(found);
          if (onThemeSelect) onThemeSelect(found);
          replyMsg = {
            id: `sys-${Date.now()}`,
            sender: 'system',
            timestamp: new Date().toLocaleTimeString(),
            content: `Switched theme to **${found.name}** (${found.category}). Real-time palette applied.`,
          };
        } else {
          replyMsg = {
            id: `sys-${Date.now()}`,
            sender: 'system',
            timestamp: new Date().toLocaleTimeString(),
            content: `Theme "${arg}" not found. Try \`/theme catppuccin-mocha\`, \`/theme tokyo-night\`, \`/theme dracula\`, or \`/theme rose-pine\`.`,
          };
        }
      }
    } else if (command === '/model' || command === '/m') {
      if (arg) {
        setActiveModel(arg);
        replyMsg = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          timestamp: new Date().toLocaleTimeString(),
          content: `Active model switched to **${arg}**. Endpoint: \`http://localhost:11434\``,
        };
      } else {
        replyMsg = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          timestamp: new Date().toLocaleTimeString(),
          content: `Current model: **${activeModel}**. Available: \`qwen2.5:7b\`, \`deepseek-r1:8b\`, \`llama3.2:3b\`, \`mistral-nemo\`. Use \`/model <name>\` to switch.`,
        };
      }
    } else if (command === '/temp') {
      const nextState = arg === 'off' ? false : arg === 'on' ? true : !isEphemeral;
      setIsEphemeral(nextState);
      replyMsg = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        timestamp: new Date().toLocaleTimeString(),
        content: `Ephemeral mode is now **${nextState ? 'ENABLED (Incognito, not saved to SQLite)' : 'DISABLED (Saved to history.db)'}**.`,
      };
    } else if (command === '/clear' || command === '/cls') {
      setMessages([]);
      setInputVal('');
      return;
    } else if (command === '/sidebar' || command === '/sb') {
      setSidebarOpen((prev) => !prev);
      replyMsg = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        timestamp: new Date().toLocaleTimeString(),
        content: `Sidebar toggled ${!sidebarOpen ? 'ON' : 'OFF'}.`,
      };
    } else if (command === '/rename') {
      if (arg) {
        setSessionTitle(arg);
        replyMsg = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          timestamp: new Date().toLocaleTimeString(),
          content: `Renamed session to **${arg}**.`,
        };
      }
    } else if (command === '/stats') {
      replyMsg = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        timestamp: new Date().toLocaleTimeString(),
        content: `**Morrow Session Telemetry:**\n• Model: \`${activeModel}\`\n• Ollama URL: \`http://localhost:11434\`\n• SQLite DB: \`~/.local/share/morrow/history.db\` (Healthy, 4.2 MB)\n• Tokens Generated: \`2,840\`\n• Avg Speed: \`41.8 tokens/sec\`\n• Ephemeral Mode: \`${isEphemeral ? 'Active' : 'Inactive'}\``,
      };
    } else if (command === '/copy') {
      const last = [...messages].reverse().find((m) => m.sender === 'assistant');
      if (last) {
        navigator.clipboard.writeText(last.content);
        replyMsg = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          timestamp: new Date().toLocaleTimeString(),
          content: `Copied last assistant response to clipboard (OSC 52).`,
        };
      }
    } else {
      replyMsg = {
        id: `sys-${Date.now()}`,
        sender: 'system',
        timestamp: new Date().toLocaleTimeString(),
        content: `Unknown command "${command}". Type \`/help\` for available commands.`,
      };
    }

    setMessages((prev) => [...prev, userMsg, ...(replyMsg ? [replyMsg] : [])]);
    setInputVal('');
    setTimeout(scrollToBottom, 50);
  };

  const handleSendMessage = () => {
    if (!inputVal.trim() || isGenerating) return;

    if (inputVal.startsWith('/')) {
      executeCommand(inputVal);
      return;
    }

    const prompt = inputVal;
    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
      content: prompt,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsGenerating(true);
    setTimeout(scrollToBottom, 50);

    // Simulate streaming response
    setTimeout(() => {
      const assistantMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString(),
        thought: `Evaluating prompt against local Ollama model ${activeModel}.\nConstructing structured answer with high signal-to-noise ratio.`,
        thoughtTime: '0.8s',
        content: `This is a live in-browser Hermes TUI demonstration of **Morrow**. On your machine, Morrow streams directly from your local Ollama instance with SQLite persistence, zero latency overhead, and 65+ Kitty terminal themes.\n\nTry typing \`/help\`, \`/theme synthwave-84\`, \`/model deepseek-r1\`, or \`/stats\` in the input bar below!`,
        tokens: 382,
        speed: '44.8 t/s',
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsGenerating(false);
      setTimeout(scrollToBottom, 50);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showAutocomplete && filteredCommands.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setAutocompleteIndex((prev) => (prev + 1) % filteredCommands.length);
        return;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setAutocompleteIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        return;
      } else if (e.key === 'Tab' || (e.key === 'Enter' && !e.ctrlKey)) {
        e.preventDefault();
        const selected = filteredCommands[autocompleteIndex];
        if (selected) {
          setInputVal(selected.name + (selected.args ? ' ' : ''));
          setShowAutocomplete(false);
        }
        return;
      } else if (e.key === 'Escape') {
        setShowAutocomplete(false);
        return;
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c2e] border border-[#2d3654] text-blue-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Browser Playground</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience the Hermes TUI in your browser
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
          Test slash commands (<code className="text-blue-300 font-mono">/theme</code>, <code className="text-blue-300 font-mono">/model</code>, <code className="text-blue-300 font-mono">/stats</code>), toggle thought process trees, and feel the responsive keyboard workflow.
        </p>
      </div>

      {/* Terminal Window Container */}
      <div 
        className="rounded-2xl border shadow-2xl overflow-hidden font-mono text-sm transition-all duration-300 relative terminal-window"
        style={{
          backgroundColor: theme.bg,
          borderColor: theme.border,
          color: theme.text,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px ${theme.border}40`,
        }}
      >
        
        {/* Top Window Bar (Hermes TUI Header) */}
        <div 
          className="px-4 py-3 border-b flex flex-wrap items-center justify-between gap-2 select-none"
          style={{
            backgroundColor: theme.panel,
            borderColor: theme.border,
          }}
        >
          
          {/* Left: Window Controls & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
            </div>

            <div className="h-4 w-px bg-zinc-700/60 mx-1"></div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 rounded hover:opacity-80 transition-opacity flex items-center gap-1 text-xs"
              style={{ color: theme.muted }}
              title="Toggle sidebar (Ctrl-B)"
            >
              <PanelLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Sidebar</span>
            </button>

            <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5" style={{ color: theme.accent }}>
              <span>Morrow</span>
              <span className="text-[11px] font-normal opacity-70">::</span>
              <span className="font-medium truncate max-w-[160px] sm:max-w-xs" style={{ color: theme.text }}>
                {sessionTitle}
              </span>
            </span>
          </div>

          {/* Right: Live Telemetry & Model Info */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px]" style={{ color: theme.muted }}>
            
            {/* Model Pill */}
            <div 
              className="px-2 py-0.5 rounded border flex items-center gap-1 font-semibold"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                color: theme.assistant,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.assistant }}></span>
              <span>{activeModel}</span>
            </div>

            {/* Telemetry Chips */}
            <span className="hidden md:inline font-mono">42.6 t/s</span>
            
            {/* DB Status */}
            <span className="hidden sm:inline flex items-center gap-1" style={{ color: isEphemeral ? theme.warning : theme.success }}>
              <Shield className="w-3 h-3" />
              <span>{isEphemeral ? 'TEMP (Incognito)' : 'SQLite: OK'}</span>
            </span>

            {/* Current Theme Pill */}
            <span 
              className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider border"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                color: theme.accent,
              }}
            >
              {theme.name}
            </span>

          </div>

        </div>

        {/* Main Body: Sidebar + Chat Stream */}
        <div className="flex min-h-[480px] max-h-[620px] overflow-hidden">
          
          {/* Sidebar */}
          {sidebarOpen && (
            <div 
              className="w-56 sm:w-64 border-r flex-shrink-0 flex flex-col justify-between p-3 select-none transition-all"
              style={{
                backgroundColor: theme.panel,
                borderColor: theme.border,
              }}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b text-[11px] font-semibold uppercase tracking-wider" style={{ borderColor: theme.border, color: theme.muted }}>
                  <span>Sessions</span>
                  <button 
                    onClick={() => {
                      setMessages([]);
                      setSessionTitle('New Conversation');
                    }}
                    className="hover:opacity-80 text-[10px] px-1.5 py-0.5 rounded font-mono border"
                    style={{ backgroundColor: theme.surface, borderColor: theme.border, color: theme.accent }}
                  >
                    + /new
                  </button>
                </div>

                <div className="space-y-1 overflow-y-auto max-h-[380px] scrollbar-thin">
                  {sessions.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setActiveSessionId(s.id);
                        setSessionTitle(s.title);
                      }}
                      className={`p-2 rounded cursor-pointer transition-all text-xs ${
                        activeSessionId === s.id ? 'font-semibold' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        backgroundColor: activeSessionId === s.id ? theme.surface : 'transparent',
                        color: activeSessionId === s.id ? theme.text : theme.muted,
                        borderLeft: activeSessionId === s.id ? `3px solid ${theme.accent}` : '3px solid transparent',
                      }}
                    >
                      <div className="truncate">{s.title}</div>
                      <div className="flex items-center justify-between text-[10px] mt-0.5 opacity-60">
                        <span>{s.model}</span>
                        <span>{s.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar bottom shortcuts helper */}
              <div 
                className="pt-2 border-t text-[10px] space-y-1 opacity-70"
                style={{ borderColor: theme.border, color: theme.muted }}
              >
                <div className="flex justify-between"><span>Ctrl-T</span><span>Themes (65+)</span></div>
                <div className="flex justify-between"><span>Ctrl-P</span><span>Model Switcher</span></div>
                <div className="flex justify-between"><span>Ctrl-B</span><span>Toggle Sidebar</span></div>
              </div>
            </div>
          )}

          {/* Chat Stream View */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            
            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 scrollbar-thin">
              
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  
                  {/* Message Header */}
                  <div className="flex items-center justify-between text-[11px] select-none" style={{ color: theme.muted }}>
                    <div className="flex items-center gap-2 font-semibold">
                      {msg.sender === 'user' ? (
                        <span style={{ color: theme.user }}>❯ User</span>
                      ) : msg.sender === 'assistant' ? (
                        <span style={{ color: theme.assistant }}>◆ Assistant ({activeModel})</span>
                      ) : (
                        <span style={{ color: theme.warning }}>⚙ System</span>
                      )}
                      <span className="font-normal opacity-50">{msg.timestamp}</span>
                    </div>

                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleCopyResponse(msg.id, msg.content)}
                        className="flex items-center gap-1 hover:opacity-100 opacity-60 transition-opacity text-[10px] cursor-pointer"
                        title="Copy to clipboard (OSC 52)"
                      >
                        {copiedResponseId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>/copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Thought Process (Collapsible <think> accordion) */}
                  {msg.thought && (
                    <div 
                      className="rounded border text-xs overflow-hidden transition-all"
                      style={{
                        backgroundColor: theme.panel,
                        borderColor: theme.border,
                      }}
                    >
                      <button
                        onClick={() => toggleThought(msg.id)}
                        className="w-full px-3 py-1.5 flex items-center justify-between text-[11px] font-mono cursor-pointer hover:opacity-90"
                        style={{
                          backgroundColor: theme.surface,
                          color: theme.quote_fg || theme.accent,
                        }}
                      >
                        <div className="flex items-center gap-1.5">
                          {expandedThoughts[msg.id] ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                          <span className="font-semibold">Thought process</span>
                          {msg.thoughtTime && <span className="opacity-70">({msg.thoughtTime})</span>}
                        </div>
                        <span className="text-[10px] opacity-60 uppercase">
                          {expandedThoughts[msg.id] ? 'Collapse' : 'Expand'}
                        </span>
                      </button>

                      {expandedThoughts[msg.id] && (
                        <div 
                          className="p-3 text-[11px] whitespace-pre-line leading-relaxed font-mono opacity-85 border-t"
                          style={{
                            borderColor: theme.border,
                            color: theme.muted,
                          }}
                        >
                          {msg.thought}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Message Content */}
                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </div>

                  {/* Code Block if any */}
                  {msg.codeBlock && (
                    <div 
                      className="rounded border overflow-hidden my-2 text-xs font-mono"
                      style={{
                        backgroundColor: theme.code_bg,
                        borderColor: theme.border,
                      }}
                    >
                      <div 
                        className="px-3 py-1 border-b flex items-center justify-between text-[10px]"
                        style={{
                          backgroundColor: theme.panel,
                          borderColor: theme.border,
                          color: theme.muted,
                        }}
                      >
                        <span className="uppercase font-bold tracking-wider">{msg.codeBlock.lang}</span>
                        <button
                          onClick={() => handleCopyCode(msg.codeBlock!.code)}
                          className="flex items-center gap-1 hover:opacity-100 opacity-60 cursor-pointer"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy code</span>
                        </button>
                      </div>
                      <pre className="p-3 overflow-x-auto text-[11px] sm:text-xs leading-relaxed" style={{ color: theme.code_fg }}>
                        <code>{msg.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Generation Telemetry Tag */}
                  {msg.tokens && (
                    <div className="text-[10px] font-mono opacity-50 flex items-center gap-3">
                      <span>{msg.tokens} tokens</span>
                      <span>•</span>
                      <span>{msg.speed}</span>
                      <span>•</span>
                      <span>0.2s TTFT</span>
                    </div>
                  )}

                </div>
              ))}

              {isGenerating && (
                <div className="flex items-center gap-2 text-xs font-mono animate-pulse" style={{ color: theme.accent }}>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Streaming response from local Ollama...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Prompt Box & Autocomplete Pop-up */}
            <div 
              className="p-3 sm:p-4 border-t relative"
              style={{
                backgroundColor: theme.panel,
                borderColor: theme.border,
              }}
            >
              
              {/* Slash Command Autocomplete Pop-up */}
              {showAutocomplete && filteredCommands.length > 0 && (
                <div 
                  className="absolute bottom-full left-4 right-4 sm:left-6 sm:right-6 mb-2 rounded-lg border shadow-2xl overflow-hidden max-h-56 z-30"
                  style={{
                    backgroundColor: theme.panel,
                    borderColor: theme.border,
                  }}
                >
                  <div 
                    className="px-3 py-1.5 border-b text-[10px] font-bold uppercase tracking-wider flex justify-between"
                    style={{ backgroundColor: theme.surface, borderColor: theme.border, color: theme.muted }}
                  >
                    <span>Slash Commands</span>
                    <span>Use ↑↓ and Tab/Enter to select</span>
                  </div>

                  <div className="divide-y overflow-y-auto max-h-48 scrollbar-thin" style={{ borderColor: theme.border }}>
                    {filteredCommands.map((cmd, idx) => (
                      <div
                        key={cmd.name}
                        onClick={() => {
                          setInputVal(cmd.name + (cmd.args ? ' ' : ''));
                          setShowAutocomplete(false);
                          inputRef.current?.focus();
                        }}
                        className={`px-3 py-2 flex items-center justify-between gap-2 cursor-pointer transition-colors text-xs ${
                          autocompleteIndex === idx ? 'font-bold' : 'hover:opacity-80'
                        }`}
                        style={{
                          backgroundColor: autocompleteIndex === idx ? theme.surface : 'transparent',
                          color: autocompleteIndex === idx ? theme.accent : theme.text,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono" style={{ color: theme.accent }}>{cmd.name}</span>
                          {cmd.args && <span className="text-[11px] opacity-60 font-mono">{cmd.args}</span>}
                        </div>
                        <span className="text-[11px] truncate max-w-xs opacity-75 font-sans" style={{ color: theme.muted }}>
                          {cmd.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Input bar */}
              <div 
                className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all"
                style={{
                  backgroundColor: theme.bg,
                  borderColor: theme.border,
                }}
              >
                <span className="font-bold select-none text-sm" style={{ color: theme.accent }}>❯</span>
                
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message or '/' for slash commands (/theme, /model, /stats)..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm placeholder:text-zinc-600"
                  style={{ color: theme.text }}
                />

                <button
                  onClick={handleSendMessage}
                  disabled={!inputVal.trim() || isGenerating}
                  className="p-1.5 rounded transition-all cursor-pointer disabled:opacity-30"
                  style={{
                    backgroundColor: theme.surface,
                    color: theme.accent,
                  }}
                  title="Send (Enter or Ctrl-S)"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Hotkey Help */}
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[10px]" style={{ color: theme.muted }}>
                <div className="flex items-center gap-3">
                  <span><strong className="font-mono">Enter</strong> Send</span>
                  <span><strong className="font-mono">Tab</strong> Autocomplete</span>
                  <span><strong className="font-mono">/theme &lt;name&gt;</strong> Switch theme</span>
                </div>
                <div>
                  <span>Current Theme: <strong>{theme.name}</strong></span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
