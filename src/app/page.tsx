'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const INSTALL_OPTIONS = [
  {
    id: 'brew',
    label: 'Homebrew',
    cmd: 'brew install utkarsh125/tap/morrow',
  },
  {
    id: 'curl',
    label: 'curl script',
    cmd: 'curl -fsSL https://raw.githubusercontent.com/utkarsh125/morrow/main/install.sh | bash',
  },
  {
    id: 'cargo',
    label: 'cargo crates.io',
    cmd: 'cargo install morrow',
  },
  {
    id: 'git',
    label: 'cargo git',
    cmd: 'cargo install --git https://github.com/utkarsh125/morrow',
  },
  {
    id: 'source',
    label: 'Source',
    cmd: 'git clone https://github.com/utkarsh125/morrow.git && cd morrow && cargo install --path .',
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('brew');
  const [copied, setCopied] = useState(false);

  const activeCmd = INSTALL_OPTIONS.find((opt) => opt.id === activeTab)?.cmd || INSTALL_OPTIONS[0].cmd;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1d2021] text-[#ebdbb2] font-sans selection:bg-[#504945] selection:text-[#fbf1c7]">
      
      {/* Top Minimalist Header */}
      <header className="border-b border-[#3c3836] bg-[#1d2021]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-[#fbf1c7] tracking-tight">Morrow</span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#282828] text-[#fabd2f] border border-[#3c3836]">
              v0.1.0
            </span>
          </div>

          <nav className="flex items-center gap-6 text-xs font-mono text-[#a89984]">
            <Link href="/docs" className="hover:text-[#fbf1c7] transition-colors">
              Docs
            </Link>
            <Link href="/docs/themes" className="hover:text-[#fbf1c7] transition-colors">
              Themes
            </Link>
            <Link href="/docs/commands" className="hover:text-[#fbf1c7] transition-colors">
              Commands
            </Link>
            <a
              href="https://github.com/utkarsh125/morrow"
              target="_blank"
              rel="noreferrer"
              className="text-[#ebdbb2] hover:text-[#fbf1c7] transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex-1 flex flex-col justify-center">
        
        {/* Tagline Badge */}
        <div className="mb-6 font-mono text-xs text-[#a89984] tracking-wide">
          <span className="text-[#fabd2f]">01</span> // LOCAL AI WORKSPACE // RUST + RATATUI
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#fbf1c7] tracking-tight leading-[1.15] mb-6">
          Your private AI workspace, <br className="hidden sm:inline" />
          <span className="text-[#fabd2f]">always on your machine.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#ebdbb2]/85 leading-relaxed max-w-2xl mb-10 font-normal">
          Morrow is a calm, keyboard-first terminal workspace for chatting with local language models through <strong>Ollama</strong>. Conversations stay in a local SQLite database with zero telemetry, zero cloud APIs, and 65+ curated Kitty terminal color themes.
        </p>

        {/* Installation Box */}
        <div className="w-full max-w-2xl bg-[#282828] border border-[#3c3836] rounded-lg overflow-hidden mb-10 shadow-lg">
          
          {/* Tabs */}
          <div className="flex items-center overflow-x-auto border-b border-[#3c3836] bg-[#1d2021] px-2 pt-1.5">
            {INSTALL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-t transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === opt.id
                    ? 'bg-[#282828] text-[#fbf1c7] font-semibold border-t border-x border-[#3c3836] -mb-px'
                    : 'text-[#a89984] hover:text-[#ebdbb2]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Snippet Row */}
          <div className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#ebdbb2] overflow-x-auto select-all">
              <span className="text-[#fabd2f] select-none">$</span>
              <span className="whitespace-nowrap">{activeCmd}</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex-shrink-0 px-3 py-1 text-xs font-mono rounded bg-[#32302f] hover:bg-[#3c3836] text-[#ebdbb2] border border-[#504945] transition-colors cursor-pointer"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

        </div>

        {/* CTA Navigation Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <Link
            href="/docs"
            className="px-4 py-2 rounded bg-[#fabd2f] text-[#1d2021] font-bold hover:bg-[#d79921] transition-colors"
          >
            Read Documentation →
          </Link>
          <Link
            href="/docs/themes"
            className="px-4 py-2 rounded bg-[#282828] text-[#ebdbb2] hover:bg-[#32302f] border border-[#3c3836] transition-colors"
          >
            Explore 65+ Themes →
          </Link>
          <Link
            href="/docs/commands"
            className="px-4 py-2 rounded bg-[#282828] text-[#ebdbb2] hover:bg-[#32302f] border border-[#3c3836] transition-colors"
          >
            Slash Commands →
          </Link>
        </div>

        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#3c3836]">
          
          <div>
            <div className="font-mono text-xs text-[#83a598] mb-1">01 / PERSISTENCE</div>
            <h3 className="font-bold text-sm text-[#fbf1c7] mb-1">Local SQLite Database</h3>
            <p className="text-xs text-[#a89984] leading-relaxed">
              Stored at <code className="font-mono text-[11px] text-[#ebdbb2]">~/.local/share/morrow/history.db</code>. Includes ephemeral incognito mode via <code className="font-mono text-[11px] text-[#fabd2f]">/temp</code>.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-[#fabd2f] mb-1">02 / AESTHETICS</div>
            <h3 className="font-bold text-sm text-[#fbf1c7] mb-1">65+ Kitty Themes</h3>
            <p className="text-xs text-[#a89984] leading-relaxed">
              Curated terminal palettes with live previews and seamless hotkey switching (<code className="font-mono text-[11px] text-[#fabd2f]">Ctrl-T</code>).
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-[#b8bb26] mb-1">03 / PRIVACY</div>
            <h3 className="font-bold text-sm text-[#fbf1c7] mb-1">Zero Telemetry</h3>
            <p className="text-xs text-[#a89984] leading-relaxed">
              No cloud tracking, no accounts, and no analytics. Only communicates with your local Ollama port.
            </p>
          </div>

        </div>

      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-[#3c3836] bg-[#1d2021] py-8 text-xs font-mono text-[#928374]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>Morrow • Built by </span>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#ebdbb2] hover:underline"
            >
              Utkarsh Pandey
            </a>
            <span> • MIT License</span>
          </div>

          <div className="flex items-center gap-4 text-[#a89984]">
            <a href="https://github.com/utkarsh125/morrow" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7]">
              CLI Repo
            </a>
            <a href="https://github.com/utkarsh125/morrow-site" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7]">
              Site Repo
            </a>
            <a href="https://crates.io/crates/morrow" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7]">
              crates.io
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
