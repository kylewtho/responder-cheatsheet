'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div
      className="flex h-10 items-center gap-2 border px-3 transition-[border-color] hoverable:hover:border-[var(--gray-muted-border)] has-[input:focus]:border-2 has-[input:focus]:border-[var(--accent)]"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--color-tertiary)',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <Search size={16} strokeWidth={2} style={{ color: 'var(--ink-faint)' }} />
      <input
        type="text"
        placeholder="Search topics"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-body-sm outline-none placeholder:opacity-60"
        style={{ color: 'var(--ink)' }}
      />
    </div>
  );
}
