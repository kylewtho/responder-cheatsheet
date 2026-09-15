import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const vitals = [
  { letter: 'HR', title: 'Heart Rate', desc: '60–100 bpm at rest' },
  { letter: 'RR', title: 'Respiratory Rate', desc: '12–20 breaths/min' },
  { letter: 'BP', title: 'Blood Pressure', desc: '90/60–120/80 mmHg' },
  { letter: 'SpO₂', title: 'Oxygen Saturation', desc: '95–100% on room air' },
  { letter: 'Temp', title: 'Temperature', desc: '36.1–37.2°C' },
  { letter: 'BGL', title: 'Blood Glucose', desc: '4.0–7.8 mmol/L fasting' },
  { letter: 'GCS', title: 'Glasgow Coma Scale', desc: '15 at baseline (range 3–15)' },
  { letter: 'Pain', title: 'Pain Score', desc: '0–10, self-reported by patient' },
];

export default function VitalsPage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="Vital Signs" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={vitals} />
        <p className="text-xs text-[#8E8E93] dark:text-[#A1A1AA] mt-3 px-1">
          Normal ranges for a resting adult. Always interpret against the patient&apos;s baseline.
        </p>
      </div>
    </main>
  );
}
