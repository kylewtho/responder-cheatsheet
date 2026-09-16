"use client";

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { LocationCard } from '@/components/LocationCard';
import { ToolList } from '@/components/ToolList';
import { tools } from '@/lib/tools';

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = tools.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      <AppShell title="First Responder" search={search} onSearchChange={setSearch}>
        <div className="mx-auto max-w-md space-y-5 px-4 pb-10 pt-4">
          <LocationCard />
          <ToolList tools={filtered} />
        </div>
      </AppShell>
    </main>
  );
}
