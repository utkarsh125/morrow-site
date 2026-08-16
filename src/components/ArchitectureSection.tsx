'use client';

import React from 'react';
import { 
  ShieldCheck, 
  HardDrive, 
  Lock, 
  Lightning, 
  HardDrives 
} from '@phosphor-icons/react';

export default function ArchitectureSection() {
  return (
    <section id="features" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#3c3836] text-[#b8bb26] text-xs font-mono mb-3">
          <ShieldCheck weight="bold" className="w-3.5 h-3.5" />
          <span>Local Sovereignty & Privacy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
          Built for zero-compromise privacy
        </h2>
        <p className="mt-3 text-[#a89984] text-sm sm:text-base font-sans">
          Morrow is intentionally designed with zero network dependencies beyond your configured Ollama backend. No tracking, no user accounts, and no cloud middlemen.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Card 1: SQLite Storage */}
        <div className="rounded-2xl border border-[#3c3836] bg-[#282828] p-6 hover:border-[#504945] hover:bg-[#32302f] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#83a598]/10 border border-[#83a598]/20 text-[#83a598] flex items-center justify-center mb-4">
              <HardDrive weight="bold" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#fbf1c7] tracking-tight mb-2 font-sans">
              Embedded SQLite Persistence
            </h3>
            <p className="text-xs sm:text-sm text-[#a89984] leading-relaxed mb-4 font-sans">
              Your conversations, prompt history, and session metadata stay in an optimized local SQLite database at <code className="text-[#fabd2f] font-mono text-[11px] bg-[#1d2021] px-1 py-0.5 rounded border border-[#3c3836]">~/.local/share/morrow/history.db</code>.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3c3836] text-xs font-mono text-[#a89984] flex items-center justify-between">
            <span>Schema: Sessions & Messages</span>
            <span className="text-[#b8bb26]">Indexed & Fast</span>
          </div>
        </div>

        {/* Card 2: Ephemeral Incognito Mode */}
        <div className="rounded-2xl border border-[#3c3836] bg-[#282828] p-6 hover:border-[#504945] hover:bg-[#32302f] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#d3869b]/10 border border-[#d3869b]/20 text-[#d3869b] flex items-center justify-center mb-4">
              <Lock weight="bold" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#fbf1c7] tracking-tight mb-2 font-sans">
              Ephemeral Incognito Mode
            </h3>
            <p className="text-xs sm:text-sm text-[#a89984] leading-relaxed mb-4 font-sans">
              Switch seamlessly to temporary chat with <code className="text-[#d3869b] font-mono text-[11px] bg-[#1d2021] px-1 py-0.5 rounded border border-[#3c3836]">/temp on</code>. Messages reside strictly in RAM and are purged the moment you switch sessions or exit.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3c3836] text-xs font-mono text-[#a89984] flex items-center justify-between">
            <span>Memory only</span>
            <span className="text-[#d3869b]">Zero disk traces</span>
          </div>
        </div>

        {/* Card 3: Direct Local Ollama Streaming */}
        <div className="rounded-2xl border border-[#3c3836] bg-[#282828] p-6 hover:border-[#504945] hover:bg-[#32302f] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#8ec07c]/10 border border-[#8ec07c]/20 text-[#8ec07c] flex items-center justify-center mb-4">
              <Lightning weight="bold" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#fbf1c7] tracking-tight mb-2 font-sans">
              Zero Cloud API Keys
            </h3>
            <p className="text-xs sm:text-sm text-[#a89984] leading-relaxed mb-4 font-sans">
              Morrow talks directly to your local Ollama daemon (<code className="text-[#8ec07c] font-mono text-[11px] bg-[#1d2021] px-1 py-0.5 rounded border border-[#3c3836]">localhost:11434</code>) or home server LAN address (<code className="text-[#8ec07c] font-mono text-[11px] bg-[#1d2021] px-1 py-0.5 rounded border border-[#3c3836]">/url</code>).
            </p>
          </div>

          <div className="pt-3 border-t border-[#3c3836] text-xs font-mono text-[#a89984] flex items-center justify-between">
            <span>Egress: Localhost / LAN only</span>
            <span className="text-[#8ec07c]">Zero telemetry</span>
          </div>
        </div>

      </div>

      {/* Architecture Visual Diagram */}
      <div className="rounded-2xl border border-[#3c3836] bg-[#282828] p-6 sm:p-8">
        <h3 className="text-sm font-bold text-[#fbf1c7] uppercase tracking-wider mb-6 flex items-center gap-2 font-sans">
          <HardDrives weight="bold" className="w-4 h-4 text-[#fabd2f]" />
          <span>Morrow Execution Architecture</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#1d2021] border border-[#3c3836] flex flex-col justify-between">
            <div>
              <div className="text-[#fabd2f] font-bold mb-1">01 • Terminal Layer</div>
              <div className="text-[#ebdbb2] font-sans text-xs">
                Ratatui + Crossterm render pipeline with custom layout engines, thought folding, and 65+ Kitty RGB palettes.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-[#928374] font-mono">ratatui 0.29 • crossterm 0.28</div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#1d2021] border border-[#3c3836] flex flex-col justify-between">
            <div>
              <div className="text-[#8ec07c] font-bold mb-1">02 • Async Engine</div>
              <div className="text-[#ebdbb2] font-sans text-xs">
                Tokio async runtime streaming NDJSON tokens from Ollama with real-time thought block parsing and telemetry counters.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-[#928374] font-mono">tokio 1.x • reqwest 0.12</div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#1d2021] border border-[#3c3836] flex flex-col justify-between">
            <div>
              <div className="text-[#d3869b] font-bold mb-1">03 • Storage Layer</div>
              <div className="text-[#ebdbb2] font-sans text-xs">
                Bundled Rusqlite engine with automatic migrations, session indexing, Markdown/JSON export, and OSC-52 clipboard.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-[#928374] font-mono">rusqlite 0.32 bundled</div>
          </div>

        </div>
      </div>

    </section>
  );
}
