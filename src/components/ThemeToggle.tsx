'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-11 w-11 shrink-0" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-opacity active:opacity-60"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--gray-card-border)',
        color: 'var(--ink)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <Sun size={18} strokeWidth={2} className="absolute transition-opacity" style={{ transitionDuration: '150ms', opacity: isDark ? 0 : 1 }} />
      <Moon size={17} strokeWidth={2} className="absolute transition-opacity" style={{ transitionDuration: '150ms', opacity: isDark ? 1 : 0 }} />
    </button>
  );
}
