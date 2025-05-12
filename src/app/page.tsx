"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const cards: { key: string; emoji: string; title: string }[] = [
  { key: 'drsabcde', emoji: '🩺', title: 'DRSABCDE' },
  { key: 'march', emoji: '🩸', title: 'MARCH' },
  { key: 'vitals', emoji: '💓', title: 'Vital Signs' },
  { key: 'imist', emoji: '📋', title: 'IMIST' },
  { key: 'gcs', emoji: '🧠', title: 'Glasgow Coma Scale' },
  { key: 'triage', emoji: '🚦', title: 'Triage Sieve' },
  { key: 'methane', emoji: '🔥', title: 'METHANE' },
];

const WHAT3WORDS_API_KEY = 'P4XL0OUA';

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  // GPS location state
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locError, setLocError] = useState<string | null>(null);
  const [locLoading, setLocLoading] = useState(false);
  const [city, setCity] = useState<string | null>(null);
  const [town, setTown] = useState<string | null>(null);
  const [w3w, setW3w] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Auto-fetch location on mount
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocError('Geolocation is not supported by your browser');
      return;
    }
    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setLocation({ lat, lng });
        setLocError(null);
        setLocLoading(false);
        setCity(null);
        setTown(null);
        setW3w(null);
        setCopied(false);

        // Fetch city/town name (Nominatim)
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
          .then(res => res.json())
          .then(data => {
            setTown(data.address?.town || data.address?.village || null);
            setCity(data.address?.city || data.address?.state || null);
          });

        // Fetch what3words
        fetch(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${lng}&key=${WHAT3WORDS_API_KEY}`)
          .then(res => res.json())
          .then(data => {
            setW3w(data.words ? data.words : null);
          });
      },
      (err) => {
        setLocError('Unable to retrieve your location');
        setLocLoading(false);
      }
    );
  };

  // Copy what3words to clipboard
  const handleCopyW3W = () => {
    if (w3w) {
      navigator.clipboard.writeText(w3w).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      });
    }
  };

  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 z-10 bg-[#F2F2F7]/80 dark:bg-[#000]/80 backdrop-blur-md px-4 pt-12 pb-2">
          <h1 className="text-3xl font-bold mb-2 text-[#1C1C1E] dark:text-[#F2F2F7]">First Responder Tools</h1>
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-lg border-0 px-10 py-2 bg-[#E9E9EB] dark:bg-[#222226] text-[#1C1C1E] dark:text-[#F2F2F7] placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none text-base"
            />
          </div>
        </div>
        <div className="space-y-6 px-4 pb-8">
          {/* Profile-style location card */}
          <div className="w-full mb-4">
            <div className="flex items-center bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm px-4 py-3">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E9E9EB] dark:bg-[#232325] mr-4 text-3xl">📍</span>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-lg font-semibold text-[#1C1C1E] dark:text-[#F2F2F7]">
                  {locLoading ? 'Getting location…' : (town || city) ? (town || city) : 'Location Unavailable'}
                </div>
                {locLoading ? null : location ? (
                  <>
                    {w3w && (
                      <button
                        onClick={handleCopyW3W}
                        className="text-[#007AFF] dark:text-[#4F8CFF] underline text-sm font-mono mt-1 focus:outline-none"
                        style={{ background: 'none', border: 'none', padding: 0 }}
                        type="button"
                        tabIndex={0}
                      >
                        {copied ? 'Copied!' : `///${w3w}`}
                      </button>
                    )}
                    <div className="text-sm text-[#8E8E93] dark:text-[#A1A1AA] truncate">
                      Lat: {location.lat} <br />
                      Lng: {location.lng}
                      <a
                        href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-[#007AFF] dark:text-[#4F8CFF] underline"
                      >
                        Open in Maps
                      </a>
                    </div>

                  </>
                ) : locError ? (
                  <div className="text-sm text-red-500">{locError}</div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Card list */}
          <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-sm">
            {filtered.map((card, idx) => (
              <Link
                key={card.key}
                href={`/${card.key}`}
                className="block w-full text-left focus:outline-none active:bg-[#E5E5EA] dark:active:bg-[#232325] transition-colors py-0"
                tabIndex={0}
              >
                <div className={`flex items-center px-4 h-14 ${idx !== filtered.length - 1 ? 'border-b border-[#E5E5EA] dark:border-[#232325]' : ''}`}> 
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#F2F2F7] dark:bg-[#232325] mr-4 text-xl">{card.emoji}</span>
                  <span className="flex-1 min-w-0 block truncate text-[17px] font-normal text-[#1C1C1E] dark:text-[#F2F2F7]">{card.title}</span>
                  <svg className="h-5 w-5 text-[#C7C7CC] dark:text-[#44444A] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}