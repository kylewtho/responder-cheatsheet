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
      className="flex flex-col gap-3 rounded-lg p-4 text-[var(--ink)] transition-transform hoverable:hover:-translate-y-0.5 active:scale-[0.98]"
      style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
        style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
      >
        <Icon size={18} strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <div className="text-body-sm font-bold">{topic.title}</div>
        <div className="mt-0.5 text-caption font-light" style={{ color: 'var(--ink-muted)' }}>
          {topic.summary}
        </div>
      </div>
    </TransitionLink>
  );
}
