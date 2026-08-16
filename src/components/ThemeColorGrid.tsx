'use client';

import React, { useState, useMemo } from 'react';
import { THEMES } from '@/data/themes';

export default function ThemeColorGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const categories = ['All', 'Dark', 'Light', 'Retro', 'Vibrant'];

  const filteredThemes = useMemo(() => {
    return THEMES.filter((t) => {
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="not-prose my-8 space-y-6 max-w-full overflow-hidden">
      
      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const count = cat === 'All' ? THEMES.length : THEMES.filter((t) => t.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-mono rounded border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-fd-primary text-fd-primary-foreground border-fd-primary font-bold shadow-sm'
                    : 'bg-fd-muted text-fd-muted-foreground border-fd-border hover:bg-fd-secondary hover:text-fd-foreground'
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1 opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter 65+ themes..."
            className="w-full px-3 py-1.5 bg-fd-muted border border-fd-border focus:border-fd-primary rounded text-xs font-mono text-fd-foreground placeholder:text-fd-muted-foreground outline-none transition-all"
          />
        </div>

      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredThemes.map((t) => (
          <div
            key={t.id}
            className="rounded-lg border border-fd-border bg-fd-card p-4 flex flex-col justify-between space-y-3 transition-all hover:border-fd-primary/50 shadow-sm"
          >
            
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm text-fd-foreground font-sans truncate">
                  {t.name}
                </div>
                <div className="text-xs font-mono text-fd-muted-foreground truncate">
                  {t.id}
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[10px] flex-shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-fd-background text-fd-muted-foreground border border-fd-border">
                  {t.is_dark ? 'Dark' : 'Light'}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-fd-background text-fd-primary border border-fd-border font-medium">
                  {t.category}
                </span>
              </div>
            </div>

            {/* Continuous Palette Ribbon */}
            <div className="rounded border border-black/20 dark:border-white/10 overflow-hidden flex h-6 shadow-inner">
              <div title={`Background: ${t.bg}`} style={{ backgroundColor: t.bg }} className="flex-1" />
              <div title={`Panel: ${t.panel}`} style={{ backgroundColor: t.panel }} className="flex-1" />
              <div title={`Surface: ${t.surface}`} style={{ backgroundColor: t.surface }} className="flex-1" />
              <div title={`Accent: ${t.accent}`} style={{ backgroundColor: t.accent }} className="flex-1" />
              <div title={`Assistant: ${t.assistant}`} style={{ backgroundColor: t.assistant }} className="flex-1" />
              <div title={`User: ${t.user}`} style={{ backgroundColor: t.user }} className="flex-1" />
              <div title={`Warning: ${t.warning}`} style={{ backgroundColor: t.warning }} className="flex-1" />
              <div title={`Error: ${t.error}`} style={{ backgroundColor: t.error }} className="flex-1" />
              <div title={`Code BG: ${t.code_bg}`} style={{ backgroundColor: t.code_bg }} className="flex-1" />
            </div>

            {/* Swatch Hex Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[11px] pt-1">
              
              <button
                onClick={() => handleCopy(t.bg, `${t.id}-bg`)}
                className="flex items-center justify-between p-1.5 rounded bg-fd-background border border-fd-border hover:border-fd-primary/50 cursor-pointer text-left min-w-0"
                title="Click to copy hex"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 flex-shrink-0" style={{ backgroundColor: t.bg }} />
                  <span className="text-fd-muted-foreground text-[10px]">bg</span>
                </div>
                <span className="text-fd-foreground text-[10px] truncate ml-1">{copiedKey === `${t.id}-bg` ? 'Copied' : t.bg}</span>
              </button>

              <button
                onClick={() => handleCopy(t.accent, `${t.id}-accent`)}
                className="flex items-center justify-between p-1.5 rounded bg-fd-background border border-fd-border hover:border-fd-primary/50 cursor-pointer text-left min-w-0"
                title="Click to copy hex"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 flex-shrink-0" style={{ backgroundColor: t.accent }} />
                  <span className="text-fd-muted-foreground text-[10px]">accent</span>
                </div>
                <span className="text-fd-foreground text-[10px] truncate ml-1">{copiedKey === `${t.id}-accent` ? 'Copied' : t.accent}</span>
              </button>

              <button
                onClick={() => handleCopy(t.assistant, `${t.id}-assistant`)}
                className="flex items-center justify-between p-1.5 rounded bg-fd-background border border-fd-border hover:border-fd-primary/50 cursor-pointer text-left min-w-0"
                title="Click to copy hex"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 flex-shrink-0" style={{ backgroundColor: t.assistant }} />
                  <span className="text-fd-muted-foreground text-[10px]">asst</span>
                </div>
                <span className="text-fd-foreground text-[10px] truncate ml-1">{copiedKey === `${t.id}-assistant` ? 'Copied' : t.assistant}</span>
              </button>

              <button
                onClick={() => handleCopy(t.user, `${t.id}-user`)}
                className="flex items-center justify-between p-1.5 rounded bg-fd-background border border-fd-border hover:border-fd-primary/50 cursor-pointer text-left min-w-0"
                title="Click to copy hex"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 flex-shrink-0" style={{ backgroundColor: t.user }} />
                  <span className="text-fd-muted-foreground text-[10px]">user</span>
                </div>
                <span className="text-fd-foreground text-[10px] truncate ml-1">{copiedKey === `${t.id}-user` ? 'Copied' : t.user}</span>
              </button>

            </div>

            {/* Quick Switch CLI Command */}
            <div className="pt-2 border-t border-fd-border flex items-center justify-between font-mono text-[10px] text-fd-muted-foreground">
              <span>CLI switch:</span>
              <button
                onClick={() => handleCopy(`/theme ${t.id}`, `${t.id}-cmd`)}
                className="text-fd-primary hover:underline cursor-pointer font-medium"
              >
                {copiedKey === `${t.id}-cmd` ? 'Copied to clipboard' : `/theme ${t.id}`}
              </button>
            </div>

          </div>
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-12 text-fd-muted-foreground font-mono text-xs">
          No themes found matching &quot;{searchQuery}&quot;.
        </div>
      )}

    </div>
  );
}
