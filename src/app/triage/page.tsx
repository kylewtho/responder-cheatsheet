import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const sieve = [
  { letter: '1', title: 'Walking?', desc: 'If the patient can walk, they are Priority 3 (Delayed).' },
  { letter: '2', title: 'Breathing?', desc: 'Open the airway. If still not breathing, the patient is Deceased.' },
  { letter: '3', title: 'Respiratory Rate', desc: 'Breathing present. If RR is under 10 or over 29/min, Priority 1 (Immediate).' },
  { letter: '4', title: 'Perfusion', desc: 'RR 10–29/min. If capillary refill is over 2 seconds, or the radial pulse is absent, Priority 1 (Immediate).' },
  { letter: '5', title: 'Otherwise', desc: 'Capillary refill ≤2 seconds and radial pulse present: Priority 2 (Urgent).' },
];

const categories = [
  { color: 'bg-red-600', label: 'P1 – Immediate' },
  { color: 'bg-yellow-400', label: 'P2 – Urgent' },
  { color: 'bg-green-600', label: 'P3 – Delayed' },
  { color: 'bg-blue-600', label: 'Expectant' },
  { color: 'bg-black dark:bg-white', label: 'Deceased' },
];

export default function TriagePage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="Triage Sieve" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={sieve} />

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm overflow-hidden mt-6 px-4 py-3">
          <div className="text-sm font-semibold text-[#1C1C1E] dark:text-[#F2F2F7] mb-2">Categories</div>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${c.color}`} />
                <span className="text-sm text-[#1C1C1E] dark:text-[#F2F2F7]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
