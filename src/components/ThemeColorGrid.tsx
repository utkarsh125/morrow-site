'use client';

import { useState } from 'react';

interface Theme {
  name: string;
  colors: string[];
  category: 'Dark' | 'Light' | 'Retro' | 'Vibrant';
}

const THEMES: Theme[] = [
  { name: 'gruvbox-dark', colors: ['#1d2021','#282828','#3c3836','#ebdbb2','#fabd2f','#b8bb26','#83a598','#fb4934'], category: 'Dark' },
  { name: 'gruvbox-light', colors: ['#fbf1c7','#f2e5bc','#ebdbb2','#3c3836','#b57614','#79740e','#076678','#9d0006'], category: 'Light' },
  { name: 'dracula', colors: ['#282a36','#44475a','#6272a4','#f8f8f2','#ffb86c','#50fa7b','#8be9fd','#ff79c6'], category: 'Dark' },
  { name: 'catppuccin-mocha', colors: ['#1e1e2e','#313244','#585b70','#cdd6f4','#f9e2af','#a6e3a1','#89dceb','#f38ba8'], category: 'Dark' },
  { name: 'catppuccin-latte', colors: ['#eff1f5','#e6e9ef','#ccd0da','#4c4f69','#df8e1d','#40a02b','#04a5e5','#d20f39'], category: 'Light' },
  { name: 'catppuccin-macchiato', colors: ['#24273a','#363a4f','#5b6078','#cad3f5','#eed49f','#a6da95','#91d7e3','#ed8796'], category: 'Dark' },
  { name: 'catppuccin-frappe', colors: ['#303446','#414559','#626880','#c6d0f5','#e5c890','#a6d189','#99d1db','#e78284'], category: 'Dark' },
  { name: 'tokyo-night', colors: ['#1a1b26','#24283b','#414868','#c0caf5','#e0af68','#9ece6a','#7dcfff','#f7768e'], category: 'Dark' },
  { name: 'tokyo-night-storm', colors: ['#24283b','#1f2335','#414868','#c0caf5','#e0af68','#9ece6a','#7dcfff','#f7768e'], category: 'Dark' },
  { name: 'tokyo-night-day', colors: ['#e1e2e7','#d0d5e3','#b4c1d5','#3760bf','#8c6c3e','#587539','#007197','#f52a65'], category: 'Light' },
  { name: 'nord', colors: ['#2e3440','#3b4252','#4c566a','#eceff4','#ebcb8b','#a3be8c','#88c0d0','#bf616a'], category: 'Dark' },
  { name: 'solarized-dark', colors: ['#002b36','#073642','#586e75','#839496','#b58900','#859900','#2aa198','#dc322f'], category: 'Dark' },
  { name: 'solarized-light', colors: ['#fdf6e3','#eee8d5','#93a1a1','#657b83','#b58900','#859900','#2aa198','#dc322f'], category: 'Light' },
  { name: 'monokai', colors: ['#272822','#383830','#75715e','#f8f8f2','#e6db74','#a6e22e','#66d9ef','#f92672'], category: 'Dark' },
  { name: 'one-dark', colors: ['#282c34','#353b45','#4b5263','#abb2bf','#e5c07b','#98c379','#61afef','#e06c75'], category: 'Dark' },
  { name: 'one-light', colors: ['#fafafa','#f0f0f0','#d3d3d3','#383a42','#c18401','#50a14f','#0184bc','#e45649'], category: 'Light' },
  { name: 'palenight', colors: ['#292d3e','#303350','#4e5579','#a6accd','#ffcb6b','#c3e88d','#89ddff','#f07178'], category: 'Dark' },
  { name: 'material-darker', colors: ['#212121','#292929','#424242','#eeffff','#ffcb6b','#c3e88d','#89ddff','#ff5370'], category: 'Dark' },
  { name: 'material-ocean', colors: ['#0f111a','#090b10','#1a1c25','#8f93a2','#ffcb6b','#c3e88d','#89ddff','#ff5370'], category: 'Dark' },
  { name: 'nightfox', colors: ['#192330','#212e3f','#3f5061','#cdcecf','#f4a261','#81b29a','#86abdc','#c94f6d'], category: 'Dark' },
  { name: 'dawnfox', colors: ['#faf4ed','#f5ede3','#e3d5c8','#575279','#b4637a','#286983','#d7827e','#907aa9'], category: 'Light' },
  { name: 'nordfox', colors: ['#232831','#2b3040','#353d51','#cdcecf','#ebcb8b','#a3be8c','#88c0d0','#bf616a'], category: 'Dark' },
  { name: 'dayfox', colors: ['#e4dcd4','#f7f3ee','#e7ddd0','#3d2b5e','#a5222f','#396847','#005faf','#8b008b'], category: 'Light' },
  { name: 'rose-pine', colors: ['#191724','#1f1d2e','#403d52','#e0def4','#f6c177','#31748f','#9ccfd8','#eb6f92'], category: 'Dark' },
  { name: 'rose-pine-moon', colors: ['#232136','#2a2739','#393552','#e0def4','#f6c177','#3e8fb0','#9ccfd8','#eb6f92'], category: 'Dark' },
  { name: 'rose-pine-dawn', colors: ['#faf4ed','#fffaf3','#f2e9e1','#575279','#ea9d34','#286983','#56949f','#b4637a'], category: 'Light' },
  { name: 'kanagawa', colors: ['#1f1f28','#16161d','#2a2a37','#dcd7ba','#ff9e3b','#76946a','#7fb4ca','#c34043'], category: 'Dark' },
  { name: 'kanagawa-dragon', colors: ['#181616','#0d0c0c','#1d1a19','#c5c9c5','#ffa066','#87a987','#8ba4b0','#c4746e'], category: 'Dark' },
  { name: 'kanagawa-lotus', colors: ['#f2ecbc','#e5ddb0','#a09e78','#545464','#f9af4f','#6f894e','#67a0b5','#c84053'], category: 'Light' },
  { name: 'everforest-dark', colors: ['#272e33','#2e383c','#4a555b','#d3c6aa','#dbbc7f','#a7c080','#7fbbb3','#e67e80'], category: 'Dark' },
  { name: 'everforest-light', colors: ['#fff9e8','#f3f0de','#e0dcc7','#5c6a72','#dfa000','#8da101','#35a77c','#f85552'], category: 'Light' },
  { name: 'modus-vivendi', colors: ['#000000','#1e1e1e','#323232','#ffffff','#ffff00','#44bc44','#00d3d0','#ff8059'], category: 'Dark' },
  { name: 'modus-operandi', colors: ['#ffffff','#f0f0f0','#d8d8d8','#000000','#8b3800','#005200','#003497','#5f0000'], category: 'Light' },
  { name: 'iceberg', colors: ['#161821','#1e2132','#2e3244','#c6c8d1','#ada0d3','#b4be82','#84a0c6','#e27878'], category: 'Dark' },
  { name: 'ayu-dark', colors: ['#0a0e14','#1c2128','#2d3640','#b3b1ad','#ffb454','#91b362','#73b8ff','#f07178'], category: 'Dark' },
  { name: 'ayu-mirage', colors: ['#1f2430','#242936','#343d4a','#cbccc6','#ffd580','#bae67e','#5ccfe6','#ff3333'], category: 'Dark' },
  { name: 'ayu-light', colors: ['#fafafa','#f8f8f2','#e7e8e9','#5c6773','#f29718','#86b300','#36a3d9','#f07171'], category: 'Light' },
  { name: 'mellow', colors: ['#1e2122','#292c2d','#3f4547','#c9c7cd','#f1a261','#8cc85f','#76cce0','#d15c7f'], category: 'Dark' },
  { name: 'midnight-jazz', colors: ['#1a1a2e','#16213e','#0f3460','#e2e2e2','#f5a623','#4caf50','#00bcd4','#e91e63'], category: 'Dark' },
  { name: 'ancient-one', colors: ['#1a1a1a','#282828','#3d3d3d','#c5c8c6','#de935f','#b5bd68','#8abeb7','#cc6666'], category: 'Retro' },
  { name: 'papercolor-dark', colors: ['#1c1c1c','#4d4d4c','#8e908c','#d6d6d6','#eab700','#718c00','#4271ae','#c82829'], category: 'Dark' },
  { name: 'papercolor-light', colors: ['#eeeeee','#e8e8e8','#d0d0d0','#424242','#d75f00','#5f8700','#005f87','#af0000'], category: 'Light' },
  { name: 'zenwritten-dark', colors: ['#191919','#252525','#424242','#dadada','#f0c674','#a0c980','#5ab0a0','#de6e7c'], category: 'Dark' },
  { name: 'zenwritten-light', colors: ['#f0edec','#e4e1e0','#ccc9c8','#595959','#c4813a','#76966a','#4a909a','#be5364'], category: 'Light' },
  { name: 'brogrammer', colors: ['#1f1f1f','#2d2d2d','#4a4a4a','#dedede','#ffc600','#2da94f','#13c5f8','#f81118'], category: 'Dark' },
  { name: 'argonaut', colors: ['#0d0d0d','#1f1f1f','#474747','#afafaf','#f0f0a1','#8ec43d','#6ae4f1','#ff4242'], category: 'Dark' },
  { name: 'gotham', colors: ['#0c1014','#11151c','#091f2e','#c5d4dd','#edb443','#26a98b','#195466','#c33027'], category: 'Dark' },
  { name: 'spacegray', colors: ['#20242d','#2b303b','#3d424d','#aaaaaa','#e3955b','#91b978','#80b4c8','#c6666d'], category: 'Dark' },
  { name: 'base16-default-dark', colors: ['#181818','#282828','#585858','#d8d8d8','#dc9656','#a1b56c','#86c1b9','#ab4642'], category: 'Dark' },
  { name: 'base16-default-light', colors: ['#f8f8f8','#e8e8e8','#b8b8b8','#383838','#dc9656','#a1b56c','#86c1b9','#ab4642'], category: 'Light' },
  { name: 'omni', colors: ['#191622','#1b1a23','#2d2b38','#e1e1e6','#f7b731','#62de84','#65b2ff','#e96379'], category: 'Dark' },
  { name: 'halcyon', colors: ['#1d2433','#2f3b54','#8695b7','#a2aabc','#ffcc66','#22da6e','#5ccfe6','#ff2c6d'], category: 'Dark' },
  { name: 'horizon-dark', colors: ['#1c1e26','#232530','#2e303e','#e0e0e0','#fab795','#29d398','#25b0bc','#e95678'], category: 'Dark' },
  { name: 'snazzy', colors: ['#282a36','#3a3d4d','#78787e','#eff0eb','#f3f99d','#5af78e','#9aedfe','#ff5c57'], category: 'Dark' },
  { name: 'deep-space', colors: ['#0b0c10','#1f2833','#45a29e','#66fcf1','#c5c6c7','#e0e0e0','#4cced6','#1eb980'], category: 'Dark' },
  { name: 'cyberpunk', colors: ['#000000','#0a0a15','#1a1a2e','#00ff9f','#ff6b35','#00d4ff','#ff0090','#faff00'], category: 'Vibrant' },
  { name: 'neon-night', colors: ['#0d0d0d','#1a0a2e','#2d1b69','#eeffff','#ff79c6','#50fa7b','#8be9fd','#ffb86c'], category: 'Vibrant' },
  { name: 'synthwave', colors: ['#2b213a','#241b2f','#1a1626','#ff7edb','#fede5d','#72f1b8','#f97e72','#fe4450'], category: 'Vibrant' },
  { name: 'outrun', colors: ['#0d0221','#1b0c35','#330d68','#d5c4f0','#fe4450','#72f1b8','#f97e72','#fede5d'], category: 'Vibrant' },
  { name: 'monokai-pro', colors: ['#2d2a2e','#221f22','#403e41','#fcfcfa','#ffd866','#a9dc76','#78dce8','#ff6188'], category: 'Dark' },
  { name: 'monokai-ristretto', colors: ['#1e1421','#2b1d28','#3d2b35','#ede1c8','#f7b47e','#8cc7a1','#7fb8d4','#d2523a'], category: 'Dark' },
  { name: 'flatui', colors: ['#2c3e50','#232e3e','#3d5168','#ecf0f1','#f1c40f','#2ecc71','#1abc9c','#e74c3c'], category: 'Dark' },
  { name: 'material', colors: ['#263238','#2e3c43','#314549','#eeffff','#ffcb6b','#c3e88d','#89ddff','#f07178'], category: 'Dark' },
  { name: 'cobalt2', colors: ['#122738','#193549','#0d3a58','#ffffff','#ffc600','#3ad900','#0088ff','#ff4e57'], category: 'Dark' },
  { name: 'tomorrow-night', colors: ['#1d1f21','#282a2e','#373b41','#c5c8c6','#f0c674','#b5bd68','#8abeb7','#cc6666'], category: 'Dark' },
  { name: 'tomorrow', colors: ['#ffffff','#efefef','#d6d6d6','#4d4d4c','#eab700','#718c00','#4271ae','#c82829'], category: 'Light' },
  { name: 'github-dark', colors: ['#0d1117','#161b22','#21262d','#c9d1d9','#e3b341','#3fb950','#58a6ff','#f85149'], category: 'Dark' },
  { name: 'github-light', colors: ['#ffffff','#f6f8fa','#e1e4e8','#24292e','#e36209','#28a745','#0366d6','#d73a49'], category: 'Light' },
];

const CATEGORIES = ['All', 'Dark', 'Light', 'Retro', 'Vibrant'] as const;

export default function ThemeColorGrid() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = THEMES.filter((t) => {
    const matchCat = filter === 'All' || t.category === filter;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  function copy(hex: string) {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(hex);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: "'Inter', sans-serif" }}>
      {/* Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Search themes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.4rem 0.75rem',
            borderRadius: '0.4rem',
            border: '1px solid var(--color-fd-border)',
            background: 'var(--color-fd-muted)',
            color: 'var(--color-fd-foreground)',
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif",
            outline: 'none',
            width: '100%',
            maxWidth: '220px',
            minWidth: '140px',
          }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.3rem 0.7rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer',
                border: '1px solid',
                transition: 'all 0.12s',
                fontFamily: "'Inter', sans-serif",
                borderColor: filter === cat ? 'var(--color-fd-primary)' : 'var(--color-fd-border)',
                background: filter === cat ? 'var(--color-fd-primary)' : 'var(--color-fd-muted)',
                color: filter === cat ? 'var(--color-fd-primary-foreground)' : 'var(--color-fd-muted-foreground)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-fd-muted-foreground)', margin: 0 }}>
        {filtered.length} theme{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '0.75rem',
        }}
      >
        {filtered.map((theme) => (
          <div
            key={theme.name}
            style={{
              borderRadius: '0.625rem',
              border: '1px solid var(--color-fd-border)',
              background: 'var(--color-fd-card)',
              overflow: 'hidden',
            }}
          >
            {/* Color swatch row */}
            <div style={{ display: 'flex', height: '36px' }}>
              {theme.colors.map((hex) => (
                <button
                  key={hex}
                  title={`Copy ${hex}`}
                  onClick={() => copy(hex)}
                  style={{
                    flex: 1,
                    background: hex,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.1s',
                    position: 'relative',
                  }}
                >
                  {copied === hex && (
                    <span
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        color: '#fff',
                        background: 'rgba(0,0,0,0.55)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Name + category */}
            <div
              style={{
                padding: '0.5rem 0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}
            >
              <code
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: 'var(--color-fd-foreground)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {theme.name}
              </code>
              <span
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  padding: '0.1rem 0.35rem',
                  borderRadius: '999px',
                  background: 'var(--color-fd-secondary)',
                  color: 'var(--color-fd-muted-foreground)',
                  border: '1px solid var(--color-fd-border)',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {theme.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
