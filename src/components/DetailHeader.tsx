'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { TransitionLink } from './TransitionLink';

interface DetailHeaderProps {
  title: string;
  backHref: string;
  icon: React.ReactNode;
  accent: string;
  count?: number;
}

export default function DetailHeader({ title, backHref, icon, accent, count }: DetailHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="backdrop-blur-glass sticky top-0 z-20 flex h-16 items-center px-3 transition-[border-color]"
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        background: 'var(--nav-bg)',
        borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
        transitionDuration: '200ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <TransitionLink
        direction="back"
        href={backHref}
        aria-label="Back"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform active:scale-[0.9]"
        style={{ color: 'var(--accent-imist)', transitionDuration: '150ms', transitionTimingFunction: 'var(--ease-out)' }}
      >
        <ChevronLeft size={24} strokeWidth={2.25} />
      </TransitionLink>

      <div className="flex min-w-0 flex-1 items-center justify-center gap-2 px-1">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px]"
          style={{ background: `color-mix(in srgb, ${accent} 16%, transparent)`, color: accent }}
        >
          {icon}
        </span>
        <h1 className="truncate text-[17px] font-semibold" style={{ color: 'var(--ink)' }}>
          {title}
        </h1>
      </div>

      {count !== undefined ? (
        <span className="w-9 shrink-0 text-right text-[13px] font-medium tabular-nums" style={{ color: 'var(--ink-faint)' }}>
          {count}
        </span>
      ) : (
        <span className="w-9 shrink-0" />
      )}
    </div>
  );
}
