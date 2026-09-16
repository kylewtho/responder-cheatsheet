'use client';

import React from 'react';
import { flushSync } from 'react-dom';
import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  direction: 'forward' | 'back';
  children: React.ReactNode;
}

export function TransitionLink({ direction, href, onClick, children, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const supportsViewTransitions = typeof document !== 'undefined' && 'startViewTransition' in document;
    const reducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransitions || reducedMotion) return; // let Next's default Link navigation happen

    e.preventDefault();
    document.documentElement.setAttribute('data-transition-direction', direction);
    document.startViewTransition(() => {
      flushSync(() => {
        router.push(href.toString());
      });
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
