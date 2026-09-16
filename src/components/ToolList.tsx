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
      className="flex h-12 items-center gap-3 px-4 text-[var(--ink)] transition-colors hoverable:hover:bg-[var(--gray-divider)] active:bg-[var(--color-primary)] active:text-[var(--color-secondary)]"
      style={{
        borderBottom: isLast ? undefined : '1px solid var(--hairline)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <Icon size={18} strokeWidth={2} className="shrink-0" />
      <span className="min-w-0 flex-1 truncate text-body-sm">{tool.title}</span>
      <ChevronRight size={16} strokeWidth={2} className="shrink-0 opacity-50" />
    </TransitionLink>
  );
}
