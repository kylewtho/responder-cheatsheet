'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
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
        className="sticky top-0 z-20 flex h-14 items-center justify-end px-4 transition-[border-color]"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          background: 'var(--surface-base)',
          borderBottom: scrolled ? '1px solid var(--gray-card-border)' : '1px solid transparent',
          transitionDuration: '150ms',
          transitionTimingFunction: 'var(--ease-out)',
        }}
      >
        <ThemeToggle />
      </div>
      {children}
    </>
  );
}
