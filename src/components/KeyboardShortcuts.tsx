'use client';

import React, { useState } from 'react';
import { SHORTCUTS, ShortcutInfo } from '@/data/shortcuts';
import { Keyboard } from '@phosphor-icons/react';

export default function KeyboardShortcuts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Chat', 'Navigation', 'Appearance', 'System'];

  const filteredShortcuts = SHORTCUTS.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <section id="shortcuts" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#3c3836] text-[#d3869b] text-xs font-mono mb-3">
          <Keyboard weight="bold" className="w-3.5 h-3.5" />
          <span>Keyboard-First Navigation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
          Keep Your Hands on the Home Row
        </h2>
        <p className="mt-2 text-[#a89984] text-sm sm:text-base font-sans">
          Morrow is engineered for pure keyboard ergonomics. Every modal, sidebar toggle, model switch, and theme picker is a single chord away.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer font-sans ${
              selectedCategory === cat
                ? 'bg-[#d3869b]/15 text-[#d3869b] border border-[#d3869b]/40 font-semibold shadow-sm'
                : 'bg-[#282828] text-[#a89984] border border-[#3c3836] hover:bg-[#32302f] hover:text-[#ebdbb2]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shortcuts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredShortcuts.map((s, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#3c3836] bg-[#282828] hover:border-[#504945] hover:bg-[#32302f] p-4 flex flex-col justify-between transition-all"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-1 flex-wrap">
                {s.keys.map((k, kIdx) => (
                  <span key={kIdx} className="flex items-center">
                    <span className="kbd-badge">{k}</span>
                    {kIdx < s.keys.length - 1 && s.keys[kIdx + 1] !== '/' && (
                      <span className="text-[#928374] text-xs mx-0.5 font-mono">+</span>
                    )}
                  </span>
                ))}
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1d2021] text-[#a89984] border border-[#3c3836]">
                {s.category}
              </span>
            </div>

            <div className="mt-2">
              <h3 className="text-sm font-bold text-[#fbf1c7] tracking-tight font-sans">{s.action}</h3>
              <p className="text-xs text-[#a89984] mt-1 leading-relaxed font-sans">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
