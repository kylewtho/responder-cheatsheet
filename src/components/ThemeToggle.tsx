'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-9 w-9 shrink-0" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="backdrop-blur-glass relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-[var(--glass-shadow)] transition-transform active:scale-[0.92]"
      style={{
        background: 'var(--glass-bg-strong)',
        borderColor: 'var(--glass-border)',
        color: 'var(--ink)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <Sun
        size={17}
        className="absolute transition-all"
        style={{
          transitionDuration: '200ms',
          transitionTimingFunction: 'var(--ease-out)',
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0.5) rotate(-90deg)' : 'scale(1) rotate(0deg)',
        }}
      />
      <Moon
        size={16}
        className="absolute transition-all"
        style={{
          transitionDuration: '200ms',
          transitionTimingFunction: 'var(--ease-out)',
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(90deg)',
        }}
      />
    </button>
  );
}
