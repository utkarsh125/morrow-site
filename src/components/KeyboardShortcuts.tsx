'use client';

import React, { useState } from 'react';
import { SHORTCUTS, ShortcutInfo } from '@/data/shortcuts';
import { Keyboard, Sparkles } from 'lucide-react';

export default function KeyboardShortcuts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Chat', 'Navigation', 'Appearance', 'System'];

  const filteredShortcuts = SHORTCUTS.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <section id="shortcuts" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1e2336]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c2e] border border-[#2d3654] text-purple-400 text-xs font-mono mb-3">
          <Keyboard className="w-3.5 h-3.5" />
          <span>Keyboard-First Workflow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Keep Your Hands on the Home Row
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base">
          Morrow is engineered for pure keyboard ergonomics. Every modal, sidebar toggle, model switch, and theme picker is a single chord away.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold shadow-sm'
                : 'bg-[#141724] text-zinc-400 border border-[#23283c] hover:bg-[#1a1e30] hover:text-zinc-200'
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
            className="rounded-xl border border-[#22273a] bg-[#11141e] hover:border-[#353f60] p-4 flex flex-col justify-between transition-all"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-1 flex-wrap">
                {s.keys.map((k, kIdx) => (
                  <span key={kIdx} className="flex items-center">
                    <span className="kbd-badge">{k}</span>
                    {kIdx < s.keys.length - 1 && s.keys[kIdx + 1] !== '/' && (
                      <span className="text-zinc-600 text-xs mx-0.5 font-mono">+</span>
                    )}
                  </span>
                ))}
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181c2e] text-zinc-400 border border-[#262f4c]">
                {s.category}
              </span>
            </div>

            <div className="mt-2">
              <h3 className="text-sm font-bold text-white tracking-tight">{s.action}</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
