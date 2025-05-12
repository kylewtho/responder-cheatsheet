"use client";

import { useState } from 'react';

const cards: { key: string; emoji: string; title: string }[] = [
  { key: 'drabcde', emoji: '🩺', title: 'DRABCDE' },
  { key: 'march', emoji: '🩸', title: 'MARCH' },
  { key: 'vitals', emoji: '💓', title: 'Vital Signs' },
  { key: 'imist', emoji: '📋', title: 'IMIST' },
  { key: 'gcs', emoji: '🧠', title: 'Glasgow Coma Scale' },
  { key: 'triage', emoji: '🚦', title: 'Triage Sieve' },
  { key: 'methane', emoji: '🔥', title: 'METHANE' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[#F2F2F7] min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 z-10 bg-[#F2F2F7]/80 backdrop-blur-md px-4 pt-12 pb-2">
          <h1 className="text-3xl font-bold mb-2 text-[#1C1C1E]">First Responder Tools</h1>
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-lg border-0 px-10 py-2 bg-[#E9E9EB] text-[#1C1C1E] placeholder-gray-400 focus:outline-none text-base"
            />
          </div>
        </div>
        <div className="space-y-6 px-4 pb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {filtered.map((card, idx) => (
              <button
                key={card.key}
                className={`w-full text-left focus:outline-none active:bg-[#E5E5EA] transition-colors py-0`}
                // onClick={() => ...}
              >
                <div className={`flex items-center px-4 h-14 ${idx !== filtered.length - 1 ? 'border-b border-[#E5E5EA]' : ''}`}>
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#F2F2F7] mr-4 text-xl">{card.emoji}</span>
                  <span className="flex-1 min-w-0 block truncate text-[17px] font-normal text-[#1C1C1E]">{card.title}</span>
                  <svg className="h-5 w-5 text-[#C7C7CC] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}