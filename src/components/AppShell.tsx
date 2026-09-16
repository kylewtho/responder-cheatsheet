'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface AppShellProps {
  title: string;
  children: React.ReactNode;
}

export function AppShell({ title, children }: AppShellProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className="sticky top-0 z-20 flex items-start justify-between px-4 pb-8 transition-[border-color]"
        style={{
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 24px)',
          background: 'var(--surface-base)',
          borderBottom: scrolled ? '1px solid var(--gray-card-border)' : '1px solid transparent',
          transitionDuration: '150ms',
          transitionTimingFunction: 'var(--ease-out)',
        }}
      >
        <h1 className="text-h1 font-bold" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>
          {title}
        </h1>
        <ThemeToggle />
      </div>
      {children}
    </>
  );
}
