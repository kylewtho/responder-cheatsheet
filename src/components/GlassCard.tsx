import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
  as?: 'div' | 'section';
}

export function GlassCard({ className, strong, as = 'div', children, ...props }: GlassCardProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        'backdrop-blur-glass overflow-hidden rounded-[var(--radius-card)] border',
        'shadow-[var(--glass-shadow)]',
        className
      )}
      style={{
        background: strong ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
        borderColor: 'var(--glass-border)',
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
