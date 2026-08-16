'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  GithubLogo, 
  Sparkle, 
  Command, 
  Palette, 
  ShieldCheck, 
  DownloadSimple, 
  Check, 
  Copy 
} from '@phosphor-icons/react';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('brew install utkarsh125/tap/morrow');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#1d2021]/90 border-b border-[#3c3836] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#282828] border border-[#504945] flex items-center justify-center text-[#fabd2f] group-hover:border-[#fabd2f]/60 group-hover:text-[#fe8019] transition-all shadow-inner">
              <Terminal weight="bold" className="w-5 h-5 transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#fbf1c7] flex items-center gap-1.5 font-sans">
                Morrow
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#3c3836] text-[#fabd2f] border border-[#504945] font-medium">
                  v0.1.0
                </span>
              </span>
              <span className="text-[11px] text-[#a89984] font-mono hidden sm:inline-block">
                Keyboard-First TUI • 100% Local
              </span>
            </div>
          </a>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#a89984] font-medium">
          <a href="#features" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1.5">
            <ShieldCheck weight="bold" className="w-4 h-4 text-[#b8bb26]" />
            <span>Privacy</span>
          </a>
          <a href="#demo" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1.5">
            <Sparkle weight="bold" className="w-4 h-4 text-[#fabd2f]" />
            <span>Live Demo</span>
          </a>
          <a href="#themes" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1.5">
            <Palette weight="bold" className="w-4 h-4 text-[#fe8019]" />
            <span>65+ Themes</span>
          </a>
          <a href="#commands" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1.5">
            <Command weight="bold" className="w-4 h-4 text-[#83a598]" />
            <span>Commands</span>
          </a>
          <a href="#install" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1.5">
            <DownloadSimple weight="bold" className="w-4 h-4 text-[#8ec07c]" />
            <span>Install</span>
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Quick brew copy pill */}
          <button
            onClick={handleCopyInstall}
            title="Click to copy Homebrew install command"
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#282828] border border-[#3c3836] hover:border-[#504945] text-[#ebdbb2] hover:text-[#fbf1c7] transition-colors shadow-sm cursor-pointer"
          >
            <span className="text-[#928374]">$</span>
            <span>brew install morrow</span>
            {copied ? (
              <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
            ) : (
              <Copy weight="bold" className="w-3.5 h-3.5 text-[#a89984]" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/utkarsh125/morrow"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#282828] hover:bg-[#32302f] border border-[#504945] text-[#fbf1c7] text-sm font-medium transition-all shadow-sm"
          >
            <GithubLogo weight="fill" className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

      </div>
    </header>
  );
}
