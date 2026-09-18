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
      className="flex items-center gap-2 rounded-md px-3 py-2.5"
      style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
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
