import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const drsabcde = [
  { badge: 'D', title: 'Danger', desc: 'Yourself, bystanders, patient.' },
  { badge: 'R', title: 'Response', desc: 'AVPU — Alert, Voice, Pain, Unresponsive.' },
  { badge: 'S', title: 'Send for Help / Severe Haem.', desc: 'Blood sweep, TQ, pack wounds.' },
  { badge: 'A', title: 'Airway', desc: 'Open, clear, maintain. Consider NPA.' },
  { badge: 'B', title: 'Breathing', desc: 'Rub and rake, chest seal, rate.' },
  { badge: 'C', title: 'Circulation', desc: 'Abdomen, fractures, wounds, pulse.' },
  { badge: 'D', title: 'Disability', desc: 'AVPU, pupils, ears.' },
  { badge: 'E', title: 'Environment', desc: 'Space blanket, IMIST handover.' },
];

export default function DRSABCDEPage() {
  const tool = getTool('drsabcde')!;
  return (
    <main className="min-h-screen">
      <DetailHeader
        title={tool.title}
        backHref="/"
        icon={<tool.icon size={14} strokeWidth={2} />}
        count={drsabcde.length}
      />
      <div className="mx-auto max-w-md px-4 pb-16 pt-6">
        <List items={drsabcde} />
      </div>
    </main>
  );
}
