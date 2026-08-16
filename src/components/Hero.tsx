'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal, Shield, Sparkles, Cpu, HardDrive, ArrowRight } from 'lucide-react';

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
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Release / Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a29] border border-[#2b334d] text-zinc-300 text-xs font-mono mb-6 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400">Hermes-Inspired Ratatui TUI</span>
          <span className="text-zinc-600">•</span>
          <span className="text-blue-400 font-semibold">100% Local Ollama</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
          Your private AI workspace, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
            always on your machine.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Morrow is a calm, keyboard-first terminal workspace for chatting with local language models through <strong className="text-zinc-200 font-medium">Ollama</strong>. Conversations stay in a local SQLite database with zero telemetry, zero cloud APIs, and 65+ curated Kitty terminal themes.
        </p>

        {/* Value Prop Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724] border border-[#262c42]">
            <HardDrive className="w-3.5 h-3.5 text-blue-400" />
            <span>SQLite Storage (~/.local/share)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724] border border-[#262c42]">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Cloud Telemetry</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724] border border-[#262c42]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>65+ Kitty Color Themes</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724] border border-[#262c42]">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Native Rust + Ratatui</span>
          </div>
        </div>

        {/* Installation Box */}
        <div id="install" className="mt-10 w-full max-w-2xl bg-[#11131c] border border-[#252a3d] rounded-xl overflow-hidden shadow-2xl transition-all">
          
          {/* Installation Tabs */}
          <div className="flex items-center overflow-x-auto border-b border-[#222738] bg-[#0c0d14] px-2 pt-2 scrollbar-none">
            {INSTALL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === opt.id
                    ? 'bg-[#11131c] text-white border-t border-x border-[#2b334d] font-semibold -mb-px'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#161a28]/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Code snippet with copy button */}
          <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#11131c]">
            <div className="flex items-center gap-3 overflow-x-auto text-left font-mono text-xs sm:text-sm text-zinc-200 select-all scrollbar-thin">
              <span className="text-blue-400 font-bold select-none">$</span>
              <span className="whitespace-nowrap">{activeCmd}</span>
            </div>
            
            <button
              onClick={handleCopy}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-[#1e2336] hover:bg-[#282f48] text-zinc-200 border border-[#333c5a]'
              }`}
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Footer note inside box */}
          <div className="px-4 py-2.5 bg-[#0e1017] border-t border-[#1c2030] flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Platform: {INSTALL_OPTIONS.find((o) => o.id === activeTab)?.platform}</span>
            <span>Then simply run: <code className="text-blue-300 bg-[#171a26] px-1.5 py-0.5 rounded border border-[#2b334a]">morrow</code></span>
          </div>

        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#demo"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Try Interactive TUI Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href="#themes"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161a29] hover:bg-[#1f253a] border border-[#2c344e] text-zinc-200 text-sm font-medium transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Browse 65+ Themes</span>
          </a>
        </div>

      </div>
    </section>
  );
}
