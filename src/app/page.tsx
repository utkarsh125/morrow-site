'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

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
    <div className="min-h-screen flex flex-col justify-between bg-fd-background text-fd-foreground font-sans selection:bg-[#504945] selection:text-[#fbf1c7] transition-colors duration-150">
      
      {/* Top Minimalist Header */}
      <header className="border-b border-fd-border bg-fd-background/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Logo className="w-5 h-5 text-fd-primary flex-shrink-0" />
            <span className="font-bold text-lg text-fd-foreground tracking-tight">Morrow</span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-fd-muted text-fd-primary border border-fd-border">
              v0.1.0
            </span>
          </div>

          <nav className="flex items-center gap-6 text-xs font-mono text-fd-muted-foreground">
            <Link href="/docs" className="hover:text-fd-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/themes" className="hover:text-fd-foreground transition-colors">
              Themes
            </Link>
            <Link href="/docs/commands" className="hover:text-fd-foreground transition-colors">
              Commands
            </Link>
            <a
              href="https://github.com/utkarsh125/morrow"
              target="_blank"
              rel="noreferrer"
              className="text-fd-foreground hover:text-fd-primary transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex-1 flex flex-col justify-center">
        
        {/* Emblem & Tagline Badge */}
        <div className="mb-6 flex items-center gap-3">
          <Logo className="w-10 h-10 text-fd-primary flex-shrink-0" />
          <div className="font-mono text-xs text-fd-muted-foreground tracking-wide">
            <span className="text-fd-primary font-bold">01</span> // LOCAL AI WORKSPACE // RUST + RATATUI
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-fd-foreground tracking-tight leading-[1.15] mb-6">
          Your private AI workspace, <br className="hidden sm:inline" />
          <span className="text-fd-primary">always on your machine.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-fd-foreground/85 leading-relaxed max-w-2xl mb-10 font-normal">
          Morrow is a calm, keyboard-first terminal workspace for chatting with local language models through <strong>Ollama</strong>. Conversations stay in a local SQLite database with zero telemetry, zero cloud APIs, and 65+ curated Kitty terminal color themes.
        </p>

        {/* Installation Box */}
        <div className="w-full max-w-2xl bg-fd-card border border-fd-border rounded-lg overflow-hidden mb-10 shadow-lg">
          
          {/* Tabs */}
          <div className="flex items-center overflow-x-auto border-b border-fd-border bg-fd-background px-2 pt-1.5">
            {INSTALL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-t transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === opt.id
                    ? 'bg-fd-card text-fd-foreground font-semibold border-t border-x border-fd-border -mb-px'
                    : 'text-fd-muted-foreground hover:text-fd-foreground'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Snippet Row */}
          <div className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-fd-foreground overflow-x-auto select-all">
              <span className="text-fd-primary select-none">$</span>
              <span className="whitespace-nowrap">{activeCmd}</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex-shrink-0 px-3 py-1 text-xs font-mono rounded bg-fd-secondary hover:bg-fd-accent text-fd-foreground border border-fd-border transition-colors cursor-pointer"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

        </div>

        {/* CTA Navigation Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <Link
            href="/docs"
            className="px-4 py-2 rounded bg-fd-primary text-fd-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Read Documentation →
          </Link>
          <Link
            href="/docs/themes"
            className="px-4 py-2 rounded bg-fd-card text-fd-foreground hover:bg-fd-secondary border border-fd-border transition-colors"
          >
            Explore 65+ Themes →
          </Link>
          <Link
            href="/docs/commands"
            className="px-4 py-2 rounded bg-fd-card text-fd-foreground hover:bg-fd-secondary border border-fd-border transition-colors"
          >
            Slash Commands →
          </Link>
        </div>

        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-fd-border">
          
          <div>
            <div className="font-mono text-xs text-[#83a598] mb-1">01 / PERSISTENCE</div>
            <h3 className="font-bold text-sm text-fd-foreground mb-1">Local SQLite Database</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              Stored at <code className="font-mono text-[11px] text-fd-foreground">~/.local/share/morrow/history.db</code>. Includes ephemeral incognito mode via <code className="font-mono text-[11px] text-fd-primary">/temp</code>.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-fd-primary mb-1">02 / AESTHETICS</div>
            <h3 className="font-bold text-sm text-fd-foreground mb-1">65+ Kitty Themes</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              Curated terminal palettes with live previews and seamless hotkey switching (<code className="font-mono text-[11px] text-fd-primary">Ctrl-T</code>).
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-[#b8bb26] mb-1">03 / PRIVACY</div>
            <h3 className="font-bold text-sm text-fd-foreground mb-1">Zero Telemetry</h3>
            <p className="text-xs text-fd-muted-foreground leading-relaxed">
              No cloud tracking, no accounts, and no analytics. Only communicates with your local Ollama port.
            </p>
          </div>

        </div>

      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-fd-border bg-fd-background py-8 text-xs font-mono text-fd-muted-foreground">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="w-4 h-4 text-fd-primary" />
            <span>Morrow • Built by </span>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="text-fd-foreground hover:underline"
            >
              Utkarsh Pandey
            </a>
            <span> • MIT License</span>
          </div>

          <div className="flex items-center gap-4 text-fd-muted-foreground">
            <a href="https://github.com/utkarsh125/morrow" target="_blank" rel="noreferrer" className="hover:text-fd-foreground">
              CLI Repo
            </a>
            <a href="https://github.com/utkarsh125/morrow-site" target="_blank" rel="noreferrer" className="hover:text-fd-foreground">
              Site Repo
            </a>
            <a href="https://crates.io/crates/morrow" target="_blank" rel="noreferrer" className="hover:text-fd-foreground">
              crates.io
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
