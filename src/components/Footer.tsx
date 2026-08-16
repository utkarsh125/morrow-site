'use client';

import React from 'react';
import { 
  Terminal, 
  GithubLogo, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="border-t border-[#3c3836] bg-[#1d2021] text-[#a89984] text-xs py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#282828] border border-[#3c3836] flex items-center justify-center text-[#fabd2f]">
                <Terminal weight="bold" className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#fbf1c7] text-base font-sans">Morrow</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#282828] text-[#fabd2f] border border-[#3c3836]">
                v0.1.0
              </span>
            </div>
            
            <p className="text-[#a89984] text-xs max-w-sm leading-relaxed font-sans">
              A calm, keyboard-first terminal workspace for chatting with local language models through Ollama. Zero telemetry, local SQLite storage, and 65+ Kitty terminal color themes.
            </p>

            <div className="flex items-center gap-2 text-[#928374] text-[11px] font-mono">
              <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
              <span>Zero cloud tracking • 100% Localhost</span>
            </div>
          </div>

          {/* Col 2: Project Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#fbf1c7] uppercase tracking-wider text-[11px] font-sans">Resources</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="https://github.com/utkarsh125/morrow" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1">
                  <span>Morrow CLI Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#928374]" />
                </a>
              </li>
              <li>
                <a href="https://github.com/utkarsh125/morrow-site" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1">
                  <span>Website Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#928374]" />
                </a>
              </li>
              <li>
                <a href="https://crates.io/crates/morrow" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1">
                  <span>crates.io / morrow</span>
                  <ArrowUpRight className="w-3 h-3 text-[#928374]" />
                </a>
              </li>
              <li>
                <a href="https://github.com/utkarsh125/homebrew-tap" target="_blank" rel="noreferrer" className="hover:text-[#fbf1c7] transition-colors flex items-center gap-1">
                  <span>Homebrew Tap</span>
                  <ArrowUpRight className="w-3 h-3 text-[#928374]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#fbf1c7] uppercase tracking-wider text-[11px] font-sans">Navigation</h4>
            <ul className="space-y-1.5">
              <li><a href="#features" className="hover:text-[#fbf1c7] transition-colors">Privacy & Architecture</a></li>
              <li><a href="#demo" className="hover:text-[#fbf1c7] transition-colors">Interactive TUI Demo</a></li>
              <li><a href="#themes" className="hover:text-[#fbf1c7] transition-colors">65+ Kitty Themes</a></li>
              <li><a href="#commands" className="hover:text-[#fbf1c7] transition-colors">Slash Commands Palette</a></li>
              <li><a href="#shortcuts" className="hover:text-[#fbf1c7] transition-colors">Keyboard Hotkeys</a></li>
              <li><a href="#install" className="hover:text-[#fbf1c7] transition-colors">Installation Guide</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#3c3836] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#928374] font-mono">
          <div>
            <span>Crafted by </span>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#ebdbb2] hover:text-[#fbf1c7] transition-colors font-medium underline underline-offset-2 font-sans"
            >
              Utkarsh Pandey
            </a>
            <span> • MIT License</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/utkarsh125/morrow"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ebdbb2] transition-colors flex items-center gap-1"
            >
              <GithubLogo weight="fill" className="w-3.5 h-3.5" />
              <span className="font-sans">GitHub</span>
            </a>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ebdbb2] transition-colors flex items-center gap-1"
            >
              <Globe weight="bold" className="w-3.5 h-3.5" />
              <span className="font-sans">utkarshpandey.in</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
