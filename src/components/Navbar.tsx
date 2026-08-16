'use client';

import React, { useState } from 'react';
import { Terminal, Sparkles, Command, Palette, ShieldCheck, Download, Check, Copy } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('brew install utkarsh125/tap/morrow');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0c0d12]/85 border-b border-[#232738]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1e2336] to-[#121520] border border-[#333a52] flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all shadow-inner">
              <Terminal className="w-5 h-5 transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                Morrow
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/20 font-medium">
                  v0.1.0
                </span>
              </span>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline-block">
                Hermes TUI • 100% Local
              </span>
            </div>
          </a>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
          <a href="#features" className="hover:text-white transition-colors flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Features
          </a>
          <a href="#demo" className="hover:text-white transition-colors flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Live Demo
          </a>
          <a href="#themes" className="hover:text-white transition-colors flex items-center gap-1">
            <Palette className="w-4 h-4 text-amber-400" />
            65+ Themes
          </a>
          <a href="#commands" className="hover:text-white transition-colors flex items-center gap-1">
            <Command className="w-4 h-4 text-blue-400" />
            Commands
          </a>
          <a href="#install" className="hover:text-white transition-colors flex items-center gap-1">
            <Download className="w-4 h-4 text-teal-400" />
            Install
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Quick brew copy pill */}
          <button
            onClick={handleCopyInstall}
            title="Click to copy Homebrew install command"
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#161926] border border-[#2b3248] text-zinc-300 hover:border-zinc-500 transition-colors shadow-sm"
          >
            <span className="text-zinc-500">$</span>
            <span>brew install morrow</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/utkarsh125/morrow"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-b from-[#222738] to-[#171a26] hover:from-[#2d344a] hover:to-[#1e2233] border border-[#38415c] text-white text-sm font-medium transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

      </div>
    </header>
  );
}
