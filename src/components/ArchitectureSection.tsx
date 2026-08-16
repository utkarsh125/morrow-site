'use client';

import React from 'react';
import { ShieldCheck, HardDrive, Cpu, Lock, Server, FileText, Zap } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section id="features" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1e2336]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122822] border border-[#205244] text-emerald-400 text-xs font-mono mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Local Sovereignty & Privacy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Built for zero-compromise privacy
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
          Morrow is intentionally designed with zero network dependencies beyond your configured Ollama backend. No tracking, no user accounts, and no cloud middlemen.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Card 1: SQLite Storage */}
        <div className="rounded-2xl border border-[#22273a] bg-[#11141e] p-6 hover:border-[#353f60] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              Embedded SQLite Persistence
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Your conversations, prompt history, and session metadata stay in an optimized local SQLite database at <code className="text-blue-300 font-mono text-[11px] bg-[#161a28] px-1 py-0.5 rounded border border-[#273048]">~/.local/share/morrow/history.db</code>.
            </p>
          </div>

          <div className="pt-3 border-t border-[#1c2133] text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Schema: Sessions & Messages</span>
            <span className="text-emerald-400">Indexed & Fast</span>
          </div>
        </div>

        {/* Card 2: Ephemeral Incognito Mode */}
        <div className="rounded-2xl border border-[#22273a] bg-[#11141e] p-6 hover:border-[#353f60] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              Ephemeral Incognito Mode
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Switch seamlessly to temporary chat with <code className="text-purple-300 font-mono text-[11px] bg-[#161a28] px-1 py-0.5 rounded border border-[#273048]">/temp on</code>. Messages reside strictly in RAM and are purged the moment you switch sessions or exit.
            </p>
          </div>

          <div className="pt-3 border-t border-[#1c2133] text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Memory only</span>
            <span className="text-purple-400">Zero disk traces</span>
          </div>
        </div>

        {/* Card 3: Direct Local Ollama Streaming */}
        <div className="rounded-2xl border border-[#22273a] bg-[#11141e] p-6 hover:border-[#353f60] transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              Zero Cloud API Keys
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Morrow talks directly to your local Ollama daemon (<code className="text-teal-300 font-mono text-[11px] bg-[#161a28] px-1 py-0.5 rounded border border-[#273048]">localhost:11434</code>) or home server LAN address (<code className="text-teal-300 font-mono text-[11px] bg-[#161a28] px-1 py-0.5 rounded border border-[#273048]">/url</code>).
            </p>
          </div>

          <div className="pt-3 border-t border-[#1c2133] text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Egress: Localhost / LAN only</span>
            <span className="text-teal-400">Zero telemetry</span>
          </div>
        </div>

      </div>

      {/* Architecture Visual Diagram Strip */}
      <div className="rounded-2xl border border-[#24293c] bg-[#0f111a] p-6 sm:p-8">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
          <Server className="w-4 h-4 text-blue-400" />
          <span>Morrow Execution Architecture</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#141724] border border-[#252c42] flex flex-col justify-between">
            <div>
              <div className="text-blue-400 font-bold mb-1">01 • Terminal Layer</div>
              <div className="text-zinc-300 font-sans text-xs">
                Ratatui + Crossterm render pipeline with custom layout engines, thought folding, and 65+ Kitty RGB palettes.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-zinc-500 font-mono">ratatui 0.29 • crossterm 0.28</div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#141724] border border-[#252c42] flex flex-col justify-between">
            <div>
              <div className="text-teal-400 font-bold mb-1">02 • Async Engine</div>
              <div className="text-zinc-300 font-sans text-xs">
                Tokio async runtime streaming NDJSON tokens from Ollama with real-time thought block parsing and telemetry counters.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-zinc-500 font-mono">tokio 1.x • reqwest 0.12</div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#141724] border border-[#252c42] flex flex-col justify-between">
            <div>
              <div className="text-purple-400 font-bold mb-1">03 • Storage Layer</div>
              <div className="text-zinc-300 font-sans text-xs">
                Bundled Rusqlite engine with automatic migrations, session indexing, Markdown/JSON export, and OSC-52 clipboard.
              </div>
            </div>
            <div className="mt-3 text-[10px] text-zinc-500 font-mono">rusqlite 0.32 bundled</div>
          </div>

        </div>
      </div>

    </section>
  );
}
