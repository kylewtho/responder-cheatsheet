import React from 'react';
import { ChevronRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { TransitionLink } from './TransitionLink';
import type { Tool } from '@/lib/tools';

export function ToolList({ tools }: { tools: Tool[] }) {
  return (
    <GlassCard>
      {tools.map((tool, idx) => (
        <ToolRow key={tool.key} tool={tool} isLast={idx === tools.length - 1} />
      ))}
    </GlassCard>
  );
}

function ToolRow({ tool, isLast }: { tool: Tool; isLast: boolean }) {
  const Icon = tool.icon;
  return (
    <TransitionLink
      direction="forward"
      href={`./${tool.key}`}
      className="flex items-center gap-4 px-4 py-3.5 transition-transform active:scale-[0.98]"
      style={{
        borderBottom: isLast ? undefined : '1px solid var(--hairline)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-badge)]"
        style={{ background: `color-mix(in srgb, ${tool.accent} 16%, transparent)`, color: tool.accent }}
      >
        <Icon size={22} strokeWidth={2.25} />
      </span>
      <span className="min-w-0 flex-1 truncate text-[16px] font-medium" style={{ color: 'var(--ink)' }}>
        {tool.title}
      </span>
      <ChevronRight size={18} style={{ color: 'var(--ink-faint)' }} />
    </TransitionLink>
  );
}
