"use client";

import { Card } from '@/components/Card';
import { useState } from 'react';

const cards = [
  { key: 'march', emoji: '🩸', title: 'MARCH' },
  { key: 'imist', emoji: '📋', title: 'IMIST' },
  { key: 'drabcde', emoji: '🩺', title: 'DRABCDE' },
  { key: 'vitals', emoji: '💓', title: 'Vital Signs' },
  { key: 'gcs', emoji: '🧠', title: 'Glasgow Coma Scale' },
  { key: 'triage', emoji: '🚦', title: 'Triage Sieve' },
  { key: 'methane', emoji: '🔥', title: 'METHANE' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-100 min-h-screen pb-8">
      <div className="max-w-md mx-auto pt-8">
        <h1 className="text-3xl font-bold mb-4 px-4">First Responder Tools</h1>
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow"
          />
        </div>
        <div className="space-y-2 px-2">
          {filtered.map(card => (
            <button
              key={card.key}
              className="w-full text-left focus:outline-none"
              // onClick={() => ...} // 詳情頁未實作
            >
              <Card>
                <span className="text-2xl mr-3 align-middle">{card.emoji}</span>
                <span className="text-lg font-medium align-middle">{card.title}</span>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}