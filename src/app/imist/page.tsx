import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const imistAmbo = [
  { badge: 'I', title: 'Identification', desc: 'Age, sex. Your name and callsign.' },
  { badge: 'M', title: 'Mechanism / Medical Complaint', desc: 'Mechanism, or presenting complaint.' },
  { badge: 'I', title: 'Injuries / Information', desc: 'Injuries found, or related clinical info.' },
  { badge: 'S', title: 'Signs', desc: 'RR, HR, BP, SpO2, GCS, Temp.' },
  { badge: 'T', title: 'Treatment / Trends', desc: 'Treatment given, and the trend.' },
  { badge: 'A', title: 'Allergies', desc: 'Drug, food, environmental.' },
  { badge: 'M', title: 'Medications', desc: 'Current meds, recent doses.' },
  { badge: 'B', title: 'Background', desc: 'Past medical history.' },
  { badge: 'O', title: 'Other Information', desc: 'Social factors, valuables, family contact.' },
];

export default function IMISTPage() {
  const tool = getTool('imist')!;
  return (
    <main className="min-h-screen">
      <DetailHeader
        title={tool.title}
        backHref="/"
        icon={<tool.icon size={14} strokeWidth={2} />}
        count={imistAmbo.length}
      />
      <div className="mx-auto max-w-md px-4 pb-16 pt-6">
        <List items={imistAmbo} />
      </div>
    </main>
  );
}
