'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { SearchField } from './SearchField';

interface AppShellProps {
  title: string;
  search: string;
  onSearchChange: (value: string) => void;
  children: React.ReactNode;
}

export function AppShell({ title, search, onSearchChange, children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className="backdrop-blur-glass sticky top-0 z-20 px-4"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          background: 'var(--nav-bg)',
          borderBottom: collapsed ? '1px solid var(--hairline)' : '1px solid transparent',
          transition: 'border-color 200ms var(--ease-out)',
        }}
      >
        <div className="relative flex h-11 items-center justify-center">
          <h2
            className="pointer-events-none absolute text-[17px] font-semibold transition-[opacity,transform]"
            style={{
              color: 'var(--ink)',
              opacity: collapsed ? 1 : 0,
              transform: `scale(${collapsed ? 1 : 0.92})`,
              transitionDuration: '200ms',
              transitionTimingFunction: 'var(--ease-out)',
            }}
          >
            {title}
          </h2>
          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>

        <div
          className="grid transition-[grid-template-rows]"
          style={{
            gridTemplateRows: collapsed ? '0fr' : '1fr',
            transitionDuration: '220ms',
            transitionTimingFunction: 'var(--ease-in-out)',
          }}
        >
          <div className="overflow-hidden">
            <h1
              className="origin-left pb-1 font-bold transition-[opacity,transform]"
              style={{
                color: 'var(--ink)',
                fontSize: '32px',
                letterSpacing: '-0.02em',
                opacity: collapsed ? 0 : 1,
                transform: `scale(${collapsed ? 0.9 : 1})`,
                transitionDuration: '180ms',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              {title}
            </h1>
          </div>
        </div>

        <div className="pb-3">
          <SearchField value={search} onChange={onSearchChange} />
        </div>
      </div>
      {children}
    </>
  );
}
