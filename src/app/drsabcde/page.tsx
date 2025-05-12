import React from 'react';
import IosHeader from '@/components/IosHeader';

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
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm overflow-hidden">
          {drsabcde.map((item, idx) => (
            <div
              key={item.letter + item.title}
              className={`flex items-start px-4 py-4 ${idx !== drsabcde.length - 1 ? 'border-b border-[#E5E5EA] dark:border-[#232325]' : ''}`}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#E9E9EB] dark:bg-[#232325] mr-4 text-lg font-bold text-red-700 dark:text-red-400 select-none">
                {item.letter}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[17px] font-semibold text-[#1C1C1E] dark:text-[#F2F2F7]">{item.title}</div>
                <div className="text-sm text-[#8E8E93] dark:text-[#A1A1AA] mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}