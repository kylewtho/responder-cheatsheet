import React from 'react';
import { TransitionLink } from './TransitionLink';
import { getTopicIcon } from '@/lib/icons';
import type { Topic } from '@/lib/content';

export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = getTopicIcon(topic.slug);
  return (
    <TransitionLink
      direction="forward"
      href={`/${topic.slug}`}
      className="flex items-center gap-4 border p-4 text-[var(--ink)] transition-[border-color] hoverable:hover:border-[var(--color-primary)] active:opacity-70"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--gray-card-border)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center" style={{ color: 'var(--ink)' }}>
        <Icon size={18} strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-body-sm font-bold">{topic.title}</div>
        <div className="mt-0.5 text-caption font-light" style={{ color: 'var(--ink-muted)' }}>
          {topic.summary}
        </div>
      </div>
    </TransitionLink>
  );
}
