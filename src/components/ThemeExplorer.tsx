'use client';

import React, { useState, useMemo } from 'react';
import { THEMES, Theme } from '@/data/themes';
import { 
  Palette, 
  MagnifyingGlass, 
  Check, 
  Copy, 
  Sparkle, 
  Sun, 
  Moon 
} from '@phosphor-icons/react';

interface ThemeExplorerProps {
  activeThemeId?: string;
  onSelectTheme: (theme: Theme) => void;
}

export default function ThemeExplorer({ activeThemeId = 'gruvbox-dark', onSelectTheme }: ThemeExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Dark', 'Light', 'Retro', 'Vibrant'];

  const filteredThemes = useMemo(() => {
    return THEMES.filter((t) => {
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCommand = (themeId: string) => {
    navigator.clipboard.writeText(`/theme ${themeId}`);
    setCopiedId(themeId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="themes" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#3c3836] text-[#fe8019] text-xs font-mono mb-3">
            <Palette weight="bold" className="w-3.5 h-3.5" />
            <span>Curated Kitty Terminal Library</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
            65+ Built-in Color Themes
          </h2>
          <p className="mt-2 text-[#a89984] text-sm sm:text-base max-w-xl font-sans">
            Morrow includes over 65 official Kitty terminal color themes. Switch anytime with <code className="text-[#fabd2f] font-mono text-xs bg-[#282828] px-1.5 py-0.5 rounded border border-[#3c3836]">Ctrl-T</code> or <code className="text-[#fabd2f] font-mono text-xs bg-[#282828] px-1.5 py-0.5 rounded border border-[#3c3836]">/theme &lt;name&gt;</code>.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-72 relative">
          <MagnifyingGlass weight="bold" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#928374]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 65+ themes..."
            className="w-full pl-9 pr-4 py-2 bg-[#282828] border border-[#3c3836] focus:border-[#fabd2f]/60 rounded-xl text-xs sm:text-sm text-[#ebdbb2] placeholder:text-[#928374] outline-none transition-all shadow-inner font-sans"
          />
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => {
          const count = cat === 'All' ? THEMES.length : THEMES.filter((t) => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer font-sans ${
                selectedCategory === cat
                  ? 'bg-[#fabd2f]/15 text-[#fabd2f] border border-[#fabd2f]/40 font-semibold shadow-sm'
                  : 'bg-[#282828] text-[#a89984] border border-[#3c3836] hover:bg-[#32302f] hover:text-[#ebdbb2]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1 rounded font-mono ${selectedCategory === cat ? 'bg-[#fabd2f]/20 text-[#fabd2f]' : 'bg-[#1d2021] text-[#928374]'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredThemes.map((t) => {
          const isSelected = activeThemeId === t.id;
          return (
            <div
              key={t.id}
              className={`group rounded-xl border p-4 transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? 'border-[#fabd2f]/60 ring-1 ring-[#fabd2f]/30 bg-[#32302f]'
                  : 'border-[#3c3836] bg-[#282828] hover:border-[#504945] hover:bg-[#32302f]'
              }`}
            >
              
              {/* Top Row: Name & Badges */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-sm text-[#fbf1c7] tracking-tight group-hover:text-[#fabd2f] transition-colors font-sans">
                      {t.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[#928374] flex items-center gap-1">
                      {t.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {t.is_dark ? (
                      <span title="Dark Theme" className="p-1 rounded bg-[#1d2021] text-[#d3869b]">
                        <Moon weight="bold" className="w-3 h-3" />
                      </span>
                    ) : (
                      <span title="Light Theme" className="p-1 rounded bg-[#1d2021] text-[#fabd2f]">
                        <Sun weight="bold" className="w-3 h-3" />
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1d2021] text-[#a89984] border border-[#3c3836]">
                      {t.category}
                    </span>
                  </div>
                </div>

                {/* Color Palette Swatches */}
                <div className="my-3 p-2.5 rounded-lg border" style={{ backgroundColor: t.bg, borderColor: t.border }}>
                  
                  {/* Mock preview bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2" style={{ color: t.text }}>
                    <span className="font-bold" style={{ color: t.accent }}>$ morrow</span>
                    <span style={{ color: t.assistant }}>● 42 t/s</span>
                  </div>

                  {/* Swatches strip */}
                  <div className="flex items-center gap-1">
                    <span title={`Background: ${t.bg}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.bg }}></span>
                    <span title={`Panel: ${t.panel}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.panel }}></span>
                    <span title={`Surface: ${t.surface}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.surface }}></span>
                    <span title={`Accent: ${t.accent}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.accent }}></span>
                    <span title={`Assistant: ${t.assistant}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.assistant }}></span>
                    <span title={`User: ${t.user}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.user }}></span>
                    <span title={`Error: ${t.error}`} className="h-4 flex-1 rounded-sm border border-black/20" style={{ backgroundColor: t.error }}></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 pt-2 border-t border-[#3c3836] flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    onSelectTheme(t);
                    const demoEl = document.getElementById('demo');
                    if (demoEl) {
                      demoEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer font-sans ${
                    isSelected
                      ? 'bg-[#fabd2f] text-[#1d2021] shadow-md font-bold'
                      : 'bg-[#3c3836] hover:bg-[#504945] text-[#ebdbb2] border border-[#504945]'
                  }`}
                >
                  <Sparkle weight="bold" className="w-3 h-3" />
                  <span>{isSelected ? 'Applied' : 'Apply to Demo'}</span>
                </button>

                <button
                  onClick={() => handleCopyCommand(t.id)}
                  className="p-1.5 rounded-md bg-[#282828] hover:bg-[#3c3836] border border-[#3c3836] text-[#a89984] hover:text-[#fbf1c7] transition-colors cursor-pointer"
                  title="Copy command (/theme <id>)"
                >
                  {copiedId === t.id ? (
                    <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
                  ) : (
                    <Copy weight="bold" className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-12 text-[#928374] font-mono text-sm">
          No themes matching &quot;{searchQuery}&quot; found in category &quot;{selectedCategory}&quot;.
        </div>
      )}

    </section>
  );
}
