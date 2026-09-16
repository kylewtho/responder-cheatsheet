import React from 'react';
import { cn } from '@/lib/utils';
import { GlassCard } from './GlassCard';

export interface ListItem {
  badge: string;
  title: string;
  desc: string;
  tone?: 'danger';
}

interface ListProps {
  items: ListItem[];
  accent: string;
}

export function List({ items, accent }: ListProps) {
  return (
    <GlassCard>
      {items.map((item, idx) => (
        <ListRow
          key={item.badge + item.title}
          item={item}
          accent={accent}
          isLast={idx === items.length - 1}
        />
      ))}
    </GlassCard>
  );
}

function ListRow({ item, accent, isLast }: { item: ListItem; accent: string; isLast: boolean }) {
  const color = item.tone === 'danger' ? 'var(--accent-drsabcde)' : accent;
  return (
    <div
      className={cn('flex items-start gap-4 px-4 py-4', !isLast && 'border-b')}
      style={{ borderColor: 'var(--hairline)' }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-badge)] text-[15px] font-bold select-none"
        style={{ background: `color-mix(in srgb, ${color} 16%, transparent)`, color }}
      >
        {item.badge}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="text-[16px] font-semibold" style={{ color: 'var(--ink)' }}>
          {item.title}
        </div>
        <div className="mt-0.5 text-[13.5px] leading-snug" style={{ color: 'var(--ink-muted)' }}>
          {item.desc}
        </div>
      </div>
    </div>
  );
}
