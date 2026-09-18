import React from 'react';
import { cn } from '@/lib/utils';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export function Panel({ className, strong, children, ...props }: PanelProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-lg', className)}
      style={{
        background: strong ? 'var(--surface-strong)' : 'var(--surface)',
        boxShadow: 'var(--shadow-card)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
