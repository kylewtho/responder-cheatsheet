import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const eyeOpening = [
  { letter: '4', title: 'Spontaneous', desc: 'Opens eyes on their own.' },
  { letter: '3', title: 'To Voice', desc: 'Opens eyes when spoken to.' },
  { letter: '2', title: 'To Pain', desc: 'Opens eyes only in response to a painful stimulus.' },
  { letter: '1', title: 'None', desc: 'No eye opening.' },
];

const verbalResponse = [
  { letter: '5', title: 'Oriented', desc: 'Knows who, where, and when.' },
  { letter: '4', title: 'Confused', desc: 'Converses, but is disoriented.' },
  { letter: '3', title: 'Inappropriate Words', desc: 'Random or exclamatory words, no conversation.' },
  { letter: '2', title: 'Incomprehensible Sounds', desc: 'Moaning, no recognizable words.' },
  { letter: '1', title: 'None', desc: 'No verbal response.' },
];

const motorResponse = [
  { letter: '6', title: 'Obeys Commands', desc: 'Follows simple instructions.' },
  { letter: '5', title: 'Localizes Pain', desc: 'Purposeful movement toward painful stimulus.' },
  { letter: '4', title: 'Withdraws from Pain', desc: 'Pulls away from painful stimulus.' },
  { letter: '3', title: 'Abnormal Flexion', desc: 'Decorticate posturing.' },
  { letter: '2', title: 'Abnormal Extension', desc: 'Decerebrate posturing.' },
  { letter: '1', title: 'None', desc: 'No motor response.' },
];

export default function GCSPage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="Glasgow Coma Scale" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8 space-y-6">
        <p className="text-sm text-[#8E8E93] dark:text-[#A1A1AA] px-1">
          Score each category and sum for a total out of 15 (minimum 3).
        </p>

        <div>
          <div className="text-sm font-semibold text-[#1C1C1E] dark:text-[#F2F2F7] mb-2 px-1">Eye Opening (E) – max 4</div>
          <MnemonicList items={eyeOpening} />
        </div>

        <div>
          <div className="text-sm font-semibold text-[#1C1C1E] dark:text-[#F2F2F7] mb-2 px-1">Verbal Response (V) – max 5</div>
          <MnemonicList items={verbalResponse} />
        </div>

        <div>
          <div className="text-sm font-semibold text-[#1C1C1E] dark:text-[#F2F2F7] mb-2 px-1">Motor Response (M) – max 6</div>
          <MnemonicList items={motorResponse} />
        </div>
      </div>
    </main>
  );
}
