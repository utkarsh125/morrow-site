'use client';

import React, { useState, useMemo } from 'react';
import { COMMANDS, CommandInfo } from '@/data/commands';
import { 
  Command, 
  MagnifyingGlass, 
  Copy, 
  Check, 
  Terminal 
} from '@phosphor-icons/react';

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
    <section id="commands" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#3c3836] text-[#83a598] text-xs font-mono mb-3">
            <Command weight="bold" className="w-3.5 h-3.5" />
            <span>Interactive Slash Command Palette</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
            Comprehensive Command Reference
          </h2>
          <p className="mt-2 text-[#a89984] text-sm sm:text-base max-w-xl font-sans">
            Type <code className="text-[#fabd2f] font-mono text-xs bg-[#282828] px-1.5 py-0.5 rounded border border-[#3c3836]">/</code> anywhere in Morrow to trigger the floating autocomplete popup.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <MagnifyingGlass weight="bold" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#928374]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search slash commands..."
            className="w-full pl-9 pr-4 py-2 bg-[#282828] border border-[#3c3836] focus:border-[#83a598]/60 rounded-xl text-xs sm:text-sm text-[#ebdbb2] placeholder:text-[#928374] outline-none transition-all shadow-inner font-sans"
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer font-sans ${
                selectedCategory === cat
                  ? 'bg-[#83a598]/15 text-[#83a598] border border-[#83a598]/40 font-semibold shadow-sm'
                  : 'bg-[#282828] text-[#a89984] border border-[#3c3836] hover:bg-[#32302f] hover:text-[#ebdbb2]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1 rounded font-mono ${selectedCategory === cat ? 'bg-[#83a598]/20 text-[#83a598]' : 'bg-[#1d2021] text-[#928374]'}`}>
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
            className="rounded-xl border border-[#3c3836] bg-[#282828] hover:border-[#504945] hover:bg-[#32302f] p-4 flex flex-col justify-between transition-all group"
          >
            <div>
              
              {/* Top Row: Command Name & Category */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-[#fabd2f] bg-[#fabd2f]/10 px-2 py-0.5 rounded border border-[#fabd2f]/20">
                    {cmd.name}
                  </span>
                  {cmd.args && (
                    <span className="font-mono text-xs text-[#a89984]">
                      {cmd.args}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1d2021] text-[#a89984] border border-[#3c3836]">
                  {cmd.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#ebdbb2] mt-2 leading-relaxed font-sans">
                {cmd.description}
              </p>

              {/* Aliases */}
              {cmd.aliases && cmd.aliases.length > 0 && (
                <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-[#928374] font-mono">Aliases:</span>
                  {cmd.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1d2021] text-[#a89984] border border-[#3c3836]"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Example & Copy */}
            {cmd.example && (
              <div className="mt-4 pt-3 border-t border-[#3c3836] flex items-center justify-between gap-2 bg-[#1d2021] -mx-4 -mb-4 p-3 rounded-b-xl">
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-[#a89984]">
                  <span className="text-[#fabd2f] select-none">$</span>
                  <code className="text-[#ebdbb2]">{cmd.example}</code>
                </div>

                <button
                  onClick={() => handleCopy(cmd.example!, cmd.name)}
                  className="p-1 rounded bg-[#282828] hover:bg-[#32302f] border border-[#3c3836] text-[#a89984] hover:text-[#fbf1c7] transition-colors cursor-pointer"
                  title="Copy example"
                >
                  {copiedName === cmd.name ? (
                    <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
                  ) : (
                    <Copy weight="bold" className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-12 text-[#928374] font-mono text-sm">
          No commands matching &quot;{searchQuery}&quot; found in category &quot;{selectedCategory}&quot;.
        </div>
      )}

    </section>
  );
}
