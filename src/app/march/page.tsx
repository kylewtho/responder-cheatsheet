import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const march = [
  { letter: 'M', title: 'Massive Haemorrhage', desc: 'Blood sweep, TQ' },
  { letter: 'A', title: 'Airway', desc: 'Check, clear, maintain' },
  { letter: 'R', title: 'Respiratory', desc: 'Rub and rake, equal rise, quality' },
  { letter: 'C', title: 'Circulation', desc: 'Pulse, haem. check, fractures.' },
  { letter: 'H', title: 'Head Injury / Hypothermia', desc: 'GCS/AVPU, PEARL, keep warm' },
  { letter: 'E', title: 'Everything Else', desc: 'IMIST, meds, documentation' },
];

export default function MARCHPage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="MARCH" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={march} />
      </div>
    </main>
  );
}
