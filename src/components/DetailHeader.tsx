'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { TransitionLink } from './TransitionLink';

interface DetailHeaderProps {
  title: string;
  backHref: string;
  icon: React.ReactNode;
  count?: number;
}

export default function DetailHeader({ title, backHref, icon, count }: DetailHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-20 flex h-16 items-center px-4 transition-[border-color]"
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        background: 'var(--surface-base)',
        borderBottom: scrolled ? '1px solid var(--gray-card-border)' : '1px solid transparent',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <TransitionLink
        direction="back"
        href={backHref}
        aria-label="Back"
        className="flex h-8 w-8 shrink-0 items-center justify-center transition-opacity active:opacity-60"
        style={{ color: 'var(--accent)', transitionDuration: '150ms', transitionTimingFunction: 'var(--ease-out)' }}
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </TransitionLink>

      <div className="flex min-w-0 flex-1 items-center justify-center gap-2 px-1">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center" style={{ color: 'var(--accent)' }}>
          {icon}
        </span>
        <h1 className="truncate text-h3 font-semibold" style={{ color: 'var(--ink)' }}>
          {title}
        </h1>
      </div>

      {count !== undefined ? (
        <span className="font-mono w-8 shrink-0 text-right text-caption" style={{ color: 'var(--ink-muted)' }}>
          {count}
        </span>
      ) : (
        <span className="w-8 shrink-0" />
      )}
    </div>
  );
}
