'use client';

import React, { useEffect, useState } from 'react';

export default function StickyProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#fabd2f] dark:bg-[#fabd2f] light:bg-[#b57614] transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(250,189,47,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
