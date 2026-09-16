import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Panel } from './Panel';
import { TransitionLink } from './TransitionLink';
import type { Tool } from '@/lib/tools';

export function ToolList({ tools }: { tools: Tool[] }) {
  return (
    <Panel>
      {tools.map((tool, idx) => (
        <ToolRow key={tool.key} tool={tool} isLast={idx === tools.length - 1} />
      ))}
    </Panel>
  );
}

function ToolRow({ tool, isLast }: { tool: Tool; isLast: boolean }) {
  const Icon = tool.icon;
  return (
    <TransitionLink
      direction="forward"
      href={`./${tool.key}`}
      className="flex items-center gap-4 px-4 py-4 transition-transform active:scale-[0.98]"
      style={{
        borderBottom: isLast ? undefined : '1px solid var(--hairline)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-badge)]"
        style={{ background: `color-mix(in srgb, ${tool.accent} 12%, transparent)`, color: tool.accent }}
      >
        <Icon size={20} strokeWidth={2.25} />
      </span>
      <span className="min-w-0 flex-1 truncate text-[17px] font-semibold" style={{ color: 'var(--ink)' }}>
        {tool.title}
      </span>
      <ChevronRight size={18} style={{ color: 'var(--ink-faint)' }} />
    </TransitionLink>
  );
}
