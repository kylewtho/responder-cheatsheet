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
  accent: string;
}

export function List({ items, accent }: ListProps) {
  return (
    <Panel>
      {items.map((item, idx) => (
        <ListRow
          key={item.badge + item.title}
          item={item}
          accent={accent}
          isLast={idx === items.length - 1}
        />
      ))}
    </Panel>
  );
}

function ListRow({ item, accent, isLast }: { item: ListItem; accent: string; isLast: boolean }) {
  const color = item.tone === 'danger' ? 'var(--accent-drsabcde)' : accent;
  return (
    <div
      className="flex items-baseline gap-4 px-4 py-5"
      style={{ borderBottom: isLast ? undefined : '1px solid var(--hairline)' }}
    >
      <span
        className="w-10 shrink-0 text-right text-[26px] font-bold leading-none tabular-nums select-none"
        style={{ color }}
      >
        {item.badge}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[16px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
          {item.title}
        </div>
        {item.desc && (
          <div className="mt-0.5 text-[13.5px] leading-snug" style={{ color: 'var(--ink-muted)' }}>
            {item.desc}
          </div>
        )}
      </div>
    </div>
  );
}
