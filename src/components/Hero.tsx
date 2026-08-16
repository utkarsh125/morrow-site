'use client';

import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Terminal, 
  ShieldCheck, 
  Sparkle, 
  Cpu, 
  HardDrive, 
  ArrowRight 
} from '@phosphor-icons/react';

const INSTALL_OPTIONS = [
  {
    id: 'brew',
    label: 'Homebrew',
    cmd: 'brew install utkarsh125/tap/morrow',
    platform: 'macOS & Linux'
  },
  {
    id: 'curl',
    label: 'curl script',
    cmd: 'curl -fsSL https://raw.githubusercontent.com/utkarsh125/morrow/main/install.sh | bash',
    platform: 'Linux & macOS'
  },
  {
    id: 'cargo',
    label: 'cargo crates.io',
    cmd: 'cargo install morrow',
    platform: 'Cross-platform'
  },
  {
    id: 'git',
    label: 'cargo git',
    cmd: 'cargo install --git https://github.com/utkarsh125/morrow',
    platform: 'Cross-platform'
  },
  {
    id: 'source',
    label: 'Build from Source',
    cmd: 'git clone https://github.com/utkarsh125/morrow && cd morrow && cargo install --path .',
    platform: 'Rust 1.80+'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('brew');
  const [copied, setCopied] = useState(false);

  const activeCmd = INSTALL_OPTIONS.find((opt) => opt.id === activeTab)?.cmd || INSTALL_OPTIONS[0].cmd;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#fabd2f]/10 via-[#fe8019]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#8ec07c]/5 blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#3c3836] text-[#ebdbb2] text-xs font-mono mb-6 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8bb26] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b8bb26]"></span>
          </span>
          <span className="text-[#a89984]">Keyboard-First Ratatui TUI</span>
          <span className="text-[#504945]">•</span>
          <span className="text-[#fabd2f] font-semibold">100% Local Ollama</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#fbf1c7] max-w-4xl leading-[1.12] font-sans">
          Your private AI workspace, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fabd2f] via-[#fe8019] to-[#8ec07c]">
            always on your machine.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#ebdbb2]/85 max-w-2xl font-normal leading-relaxed font-sans">
          Morrow is a calm, keyboard-first terminal workspace for chatting with local language models through <strong className="text-[#fbf1c7] font-medium">Ollama</strong>. Conversations stay in a local SQLite database with zero telemetry, zero cloud APIs, and 65+ curated Kitty terminal themes.
        </p>

        {/* Value Prop Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-[#ebdbb2]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282828] border border-[#3c3836]">
            <HardDrive weight="bold" className="w-3.5 h-3.5 text-[#83a598]" />
            <span>SQLite (~/.local/share)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282828] border border-[#3c3836]">
            <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
            <span>Zero Cloud Telemetry</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282828] border border-[#3c3836]">
            <Sparkle weight="bold" className="w-3.5 h-3.5 text-[#fabd2f]" />
            <span>65+ Kitty Themes</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282828] border border-[#3c3836]">
            <Cpu weight="bold" className="w-3.5 h-3.5 text-[#d3869b]" />
            <span>Native Rust TUI</span>
          </div>
        </div>

        {/* Installation Box */}
        <div id="install" className="mt-10 w-full max-w-2xl bg-[#282828] border border-[#3c3836] rounded-xl overflow-hidden shadow-2xl transition-all">
          
          {/* Installation Tabs */}
          <div className="flex items-center overflow-x-auto border-b border-[#3c3836] bg-[#1d2021] px-2 pt-2 scrollbar-none">
            {INSTALL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === opt.id
                    ? 'bg-[#282828] text-[#fbf1c7] border-t border-x border-[#3c3836] font-semibold -mb-px'
                    : 'text-[#a89984] hover:text-[#ebdbb2] hover:bg-[#32302f]/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Code snippet with copy button */}
          <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#282828]">
            <div className="flex items-center gap-3 overflow-x-auto text-left font-mono text-xs sm:text-sm text-[#ebdbb2] select-all scrollbar-thin">
              <span className="text-[#fabd2f] font-bold select-none">$</span>
              <span className="whitespace-nowrap">{activeCmd}</span>
            </div>
            
            <button
              onClick={handleCopy}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                copied
                  ? 'bg-[#b8bb26]/20 text-[#b8bb26] border border-[#b8bb26]/40'
                  : 'bg-[#32302f] hover:bg-[#3c3836] text-[#ebdbb2] border border-[#504945]'
              }`}
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy weight="bold" className="w-3.5 h-3.5 text-[#a89984]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Footer note inside box */}
          <div className="px-4 py-2.5 bg-[#1d2021] border-t border-[#3c3836] flex items-center justify-between text-[11px] font-mono text-[#a89984]">
            <span>Platform: {INSTALL_OPTIONS.find((o) => o.id === activeTab)?.platform}</span>
            <span>Then run: <code className="text-[#fabd2f] bg-[#282828] px-1.5 py-0.5 rounded border border-[#3c3836]">morrow</code></span>
          </div>

        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#demo"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#fabd2f] hover:bg-[#d79921] text-[#1d2021] text-sm font-semibold shadow-lg transition-all cursor-pointer font-sans"
          >
            <Terminal weight="bold" className="w-4 h-4" />
            <span>Try Interactive TUI Demo</span>
            <ArrowRight weight="bold" className="w-4 h-4" />
          </a>
          
          <a
            href="#themes"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#282828] hover:bg-[#32302f] border border-[#3c3836] text-[#ebdbb2] text-sm font-medium transition-all font-sans"
          >
            <Sparkle weight="bold" className="w-4 h-4 text-[#fe8019]" />
            <span>Browse 65+ Themes</span>
          </a>
        </div>

      </div>
    </section>
  );
}
