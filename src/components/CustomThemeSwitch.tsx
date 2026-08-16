'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function CustomThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-full rounded-md bg-[#282828] border border-[#3c3836] animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex items-center justify-between w-full p-1 rounded-md bg-[#1d2021] dark:bg-[#1d2021] light:bg-[#ebdbb2] border border-[#3c3836] dark:border-[#3c3836] light:border-[#d5c4a1] font-mono text-xs">
      <button
        onClick={() => setTheme('dark')}
        className={`flex-1 py-1 px-2 text-center rounded transition-all cursor-pointer ${
          isDark
            ? 'bg-[#3c3836] text-[#fabd2f] font-bold shadow-sm'
            : 'text-[#a89984] hover:text-[#ebdbb2]'
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`flex-1 py-1 px-2 text-center rounded transition-all cursor-pointer ${
          !isDark
            ? 'bg-[#d5c4a1] text-[#282828] font-bold shadow-sm'
            : 'text-[#a89984] hover:text-[#ebdbb2]'
        }`}
      >
        Light
      </button>
    </div>
  );
}
