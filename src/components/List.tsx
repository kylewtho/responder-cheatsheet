import React from 'react';
import { Panel } from './Panel';

export interface ListItem {
  badge: string;
  title: string;
  desc?: string;
  tone?: 'danger';
}

interface ListProps {
  items: ListItem[];
}

export function List({ items }: ListProps) {
  return (
    <Panel>
      {items.map((item, idx) => (
        <ListRow key={item.badge + item.title} item={item} isLast={idx === items.length - 1} />
      ))}
    </Panel>
  );
}

function ListRow({ item, isLast }: { item: ListItem; isLast: boolean }) {
  const color = item.tone === 'danger' ? 'var(--color-error)' : 'var(--ink)';
  return (
    <div
      className="flex min-h-12 items-baseline gap-4 px-4 py-3"
      style={{ borderBottom: isLast ? undefined : '1px solid var(--hairline)' }}
    >
      <span className="w-8 shrink-0 text-right text-[24px] font-bold leading-none tabular-nums select-none" style={{ color }}>
        {item.badge}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-body-sm font-bold leading-snug" style={{ color: 'var(--ink)' }}>
          {item.title}
        </div>
        {item.desc && (
          <div className="mt-0.5 text-body-sm font-light leading-snug" style={{ color: 'var(--ink-muted)' }}>
            {item.desc}
          </div>
        )}
      </div>
    </div>
  );
}
