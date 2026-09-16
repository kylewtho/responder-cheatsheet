import React from 'react';
import { cn } from '@/lib/utils';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export function Panel({ className, strong, children, ...props }: PanelProps) {
  return (
    <div
      className={cn('overflow-hidden border', className)}
      style={{
        background: strong ? 'var(--surface-strong)' : 'var(--surface)',
        borderColor: 'var(--gray-card-border)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
