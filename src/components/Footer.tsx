'use client';

import React from 'react';
import { Terminal, Heart, Globe, ExternalLink, Shield } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2336] bg-[#090a0f] text-zinc-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#1c2236] border border-[#2b3552] flex items-center justify-center text-blue-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">Morrow</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/20">
                v0.1.0
              </span>
            </div>
            
            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
              A calm, keyboard-first, Hermes-inspired terminal workspace for chatting with local language models through Ollama. Zero telemetry, local SQLite storage, and 65+ Kitty terminal color themes.
            </p>

            <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-mono">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero cloud tracking • 100% Localhost</span>
            </div>
          </div>

          {/* Col 2: Project Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="https://github.com/utkarsh125/morrow" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Morrow CLI Repository</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://github.com/utkarsh125/morrow-site" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Website Repository</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://crates.io/crates/morrow" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>crates.io / morrow</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://github.com/utkarsh125/homebrew-tap" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Homebrew Tap</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Navigation</h4>
            <ul className="space-y-1.5">
              <li><a href="#features" className="hover:text-white transition-colors">Privacy & Architecture</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive TUI Demo</a></li>
              <li><a href="#themes" className="hover:text-white transition-colors">65+ Kitty Themes</a></li>
              <li><a href="#commands" className="hover:text-white transition-colors">Slash Commands Palette</a></li>
              <li><a href="#shortcuts" className="hover:text-white transition-colors">Keyboard Hotkeys</a></li>
              <li><a href="#install" className="hover:text-white transition-colors">Installation Guide</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#181c2b] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            <span>Crafted by </span>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white transition-colors font-medium underline underline-offset-2"
            >
              Utkarsh Pandey
            </a>
            <span> • Released under the MIT License</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/utkarsh125/morrow"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://utkarshpandey.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>utkarshpandey.in</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
