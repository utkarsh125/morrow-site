'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="h-9 rounded-lg bg-fd-muted border border-fd-border animate-pulse w-full" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        padding: '2px',
        borderRadius: '8px',
        background: 'var(--color-fd-secondary)',
        border: '1px solid var(--color-fd-border)',
        gap: '2px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <button
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '5px 12px',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 500,
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.15s ease',
          background: isDark ? 'var(--color-fd-background)' : 'transparent',
          color: isDark ? 'var(--color-fd-primary)' : 'var(--color-fd-muted-foreground)',
          boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Moon size={13} weight={isDark ? 'fill' : 'regular'} />
        Dark
      </button>
      <button
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '5px 12px',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 500,
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.15s ease',
          background: !isDark ? 'var(--color-fd-background)' : 'transparent',
          color: !isDark ? 'var(--color-fd-primary)' : 'var(--color-fd-muted-foreground)',
          boxShadow: !isDark ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <Sun size={13} weight={!isDark ? 'fill' : 'regular'} />
        Light
      </button>
    </div>
  );
}
