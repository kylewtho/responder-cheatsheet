import React from 'react';
import IosHeader from '@/components/IosHeader';
import MnemonicList from '@/components/MnemonicList';

const drsabcde = [
  { letter: 'D', title: 'Danger', desc: 'Check for danger to yourself, bystanders, and the patient.' },
  { letter: 'R', title: 'Response', desc: 'Assess response: AVPU (Alert, Voice, Pain, Unresponsive).' },
  { letter: 'S', title: 'Send for Help / Severe Haem.', desc: 'Call for help. Control severe bleeding: Blood Sweep, TQ, Pack Wounds.' },
  { letter: 'A', title: 'Airway', desc: 'Open, clear, and maintain airway. Consider nasopharyngeal airway.' },
  { letter: 'B', title: 'Breathing', desc: 'Rub and Rake, Chest Seal, Rise and Fall, Respiratory Rate.' },
  { letter: 'C', title: 'Circulation', desc: 'Abdominal check, fractures, dress wounds, check heart rate.' },
  { letter: 'D', title: 'Disability', desc: 'Assess AVPU, pupils, ears.' },
  { letter: 'E', title: 'Environment', desc: 'Manage environment: Space Blanket, IMIST.' },
];

export default function DRSABCDEPage() {
  return (
    <main className="bg-[#F2F2F7] dark:bg-[#000] min-h-screen">
      <IosHeader title="DRSABCDE" backHref="/" />
      <div className="max-w-md mx-auto px-4 pt-2 pb-8">
        <MnemonicList items={drsabcde} />
      </div>
    </main>
  );
}
