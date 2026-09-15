import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const imistAmbo = [
  { letter: 'I', title: 'Identification', desc: "Patient's age and sex. Your name/role and callsign." },
  { letter: 'M', title: 'Mechanism / Medical Complaint', desc: 'What happened, or the presenting complaint.' },
  { letter: 'I', title: 'Injuries / Information', desc: 'Injuries found, or clinical information related to the complaint.' },
  { letter: 'S', title: 'Signs', desc: 'Vital signs: RR, HR, BP, SpO2, GCS, Temp.' },
  { letter: 'T', title: 'Treatment / Trends', desc: 'Treatment given so far and the trend in the patient’s condition.' },
  { letter: 'A', title: 'Allergies', desc: 'Known drug, food, or environmental allergies.' },
  { letter: 'M', title: 'Medications', desc: 'Current medications, including recent doses given.' },
  { letter: 'B', title: 'Background', desc: 'Relevant past medical history.' },
  { letter: 'O', title: 'Other Information', desc: 'Social factors, valuables, family/next of kin contact.' },
];

export default function IMISTPage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="IMIST-AMBO" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={imistAmbo} />
      </div>
    </main>
  );
}
