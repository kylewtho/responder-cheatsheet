'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <div
      className="backdrop-blur-glass flex items-center gap-2 rounded-[var(--radius-pill)] border px-4 py-2.5 shadow-[var(--glass-shadow)]"
      style={{ background: 'var(--glass-bg-strong)', borderColor: 'var(--glass-border)' }}
    >
      <Search size={17} style={{ color: 'var(--ink-faint)' }} />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-[16px] outline-none placeholder:opacity-60"
        style={{ color: 'var(--ink)' }}
      />
    </div>
  );
}
