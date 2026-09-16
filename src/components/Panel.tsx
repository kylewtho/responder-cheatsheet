import React from 'react';
import { cn } from '@/lib/utils';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export function Panel({ className, strong, children, ...props }: PanelProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-[var(--radius-card)] border', className)}
      style={{
        background: strong ? 'var(--surface-strong)' : 'var(--surface)',
        borderColor: 'var(--hairline)',
        boxShadow: 'var(--panel-shadow)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
