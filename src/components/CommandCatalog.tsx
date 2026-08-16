'use client';

import React, { useState, useMemo } from 'react';
import { COMMANDS, CommandInfo } from '@/data/commands';
import { Command, Search, Copy, Check, Terminal, Sparkles } from 'lucide-react';

export default function CommandCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const categories = ['All', 'General', 'Chat', 'Model', 'Appearance', 'Tools'];

  const filteredCommands = useMemo(() => {
    return COMMANDS.filter((cmd) => {
      const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        cmd.name.toLowerCase().includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        (cmd.aliases && cmd.aliases.some((a) => a.toLowerCase().includes(q))) ||
        (cmd.example && cmd.example.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <section id="commands" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1e2336]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162136] border border-[#2b3e66] text-blue-400 text-xs font-mono mb-3">
            <Command className="w-3.5 h-3.5" />
            <span>Interactive Slash Command Palette</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Command Reference
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Type <code className="text-blue-300 font-mono text-xs bg-[#161a28] px-1.5 py-0.5 rounded border border-[#2c344e]">/</code> anywhere in Morrow to trigger the floating autocomplete popup.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search slash commands..."
            className="w-full pl-9 pr-4 py-2 bg-[#121520] border border-[#282f48] focus:border-blue-500/50 rounded-xl text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => {
          const count = cat === 'All' ? COMMANDS.length : COMMANDS.filter((c) => c.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold shadow-sm'
                  : 'bg-[#141724] text-zinc-400 border border-[#23283c] hover:bg-[#1a1e30] hover:text-zinc-200'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1 rounded ${selectedCategory === cat ? 'bg-blue-500/20 text-blue-200' : 'bg-[#1b2030] text-zinc-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCommands.map((cmd) => (
          <div
            key={cmd.name}
            className="rounded-xl border border-[#22273a] bg-[#11141e] hover:border-[#353f60] p-4 flex flex-col justify-between transition-all group"
          >
            <div>
              
              {/* Top Row: Command Name & Category */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {cmd.name}
                  </span>
                  {cmd.args && (
                    <span className="font-mono text-xs text-zinc-400 opacity-80">
                      {cmd.args}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c2236] text-zinc-400 border border-[#2a3450]">
                  {cmd.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                {cmd.description}
              </p>

              {/* Aliases */}
              {cmd.aliases && cmd.aliases.length > 0 && (
                <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-zinc-500 font-mono">Aliases:</span>
                  {cmd.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#161a28] text-zinc-400 border border-[#262e44]"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Example & Copy */}
            {cmd.example && (
              <div className="mt-4 pt-3 border-t border-[#1e2336] flex items-center justify-between gap-2 bg-[#0e1017] -mx-4 -mb-4 p-3 rounded-b-xl">
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-zinc-400">
                  <span className="text-blue-400 select-none">$</span>
                  <code className="text-zinc-300">{cmd.example}</code>
                </div>

                <button
                  onClick={() => handleCopy(cmd.example!, cmd.name)}
                  className="p-1 rounded bg-[#181c2c] hover:bg-[#22283e] border border-[#2c3652] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy example"
                >
                  {copiedName === cmd.name ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-12 text-zinc-500 font-mono text-sm">
          No commands matching &quot;{searchQuery}&quot; found in category &quot;{selectedCategory}&quot;.
        </div>
      )}

    </section>
  );
}
