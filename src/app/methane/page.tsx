import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const methane = [
  { letter: 'M', title: 'Major Incident', desc: 'Declared, or major incident standby.' },
  { letter: 'E', title: 'Exact Location', desc: 'Precise location and best access point.' },
  { letter: 'T', title: 'Type of Incident', desc: 'Nature of the incident (e.g. MVA, structural collapse, fire).' },
  { letter: 'H', title: 'Hazards', desc: 'Present and potential hazards to responders.' },
  { letter: 'A', title: 'Access / Egress', desc: 'Best routes in and out for responding services.' },
  { letter: 'N', title: 'Number of Casualties', desc: 'Approximate number and severity of casualties.' },
  { letter: 'E', title: 'Emergency Services', desc: 'Services present and any additional services required.' },
];

export default function MethanePage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="METHANE" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={methane} />
      </div>
    </main>
  );
}
