'use client';

import { useMemo, useState } from 'react';
import { SearchBox } from './SearchBox';
import { TopicCard } from './TopicCard';
import type { Topic } from '@/lib/content';

export function TopicBrowser({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter(
      (t) => t.title.toLowerCase().includes(q) || t.aliases.some((a) => a.toLowerCase().includes(q))
    );
  }, [topics, query]);

  return (
    <div className="space-y-4">
      <SearchBox value={query} onChange={setQuery} />
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-body-sm" style={{ color: 'var(--ink-muted)' }}>
          No topics match &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}
