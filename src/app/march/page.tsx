import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const march = [
  { badge: 'M', title: 'Massive Haemorrhage', desc: 'Blood sweep, TQ', tone: 'danger' as const },
  { badge: 'A', title: 'Airway', desc: 'Check, clear, maintain' },
  { badge: 'R', title: 'Respiratory', desc: 'Rub and rake, equal rise, quality' },
  { badge: 'C', title: 'Circulation', desc: 'Pulse, haem. check, fractures.' },
  { badge: 'H', title: 'Head Injury / Hypothermia', desc: 'GCS/AVPU, PEARL, keep warm' },
  { badge: 'E', title: 'Everything Else', desc: 'IMIST, meds, documentation' },
];

export default function MARCHPage() {
  const tool = getTool('march')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md px-4 pb-10 pt-4">
        <List items={march} accent={tool.accent} />
      </div>
    </main>
  );
}
