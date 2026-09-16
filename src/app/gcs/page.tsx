import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const eyeOpening = [
  { badge: '4', title: 'Spontaneous' },
  { badge: '3', title: 'To Voice' },
  { badge: '2', title: 'To Pain' },
  { badge: '1', title: 'None' },
];

const verbalResponse = [
  { badge: '5', title: 'Oriented' },
  { badge: '4', title: 'Confused' },
  { badge: '3', title: 'Inappropriate Words', desc: 'No conversation.' },
  { badge: '2', title: 'Incomprehensible Sounds', desc: 'Moaning, no words.' },
  { badge: '1', title: 'None' },
];

const motorResponse = [
  { badge: '6', title: 'Obeys Commands' },
  { badge: '5', title: 'Localizes Pain' },
  { badge: '4', title: 'Withdraws from Pain' },
  { badge: '3', title: 'Abnormal Flexion', desc: 'Decorticate posturing.' },
  { badge: '2', title: 'Abnormal Extension', desc: 'Decerebrate posturing.' },
  { badge: '1', title: 'None' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--ink-muted)' }}>
      {children}
    </div>
  );
}

export default function GCSPage() {
  const tool = getTool('gcs')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md space-y-6 px-4 pb-10 pt-4">
        <p className="px-1 text-[13.5px]" style={{ color: 'var(--ink-muted)' }}>
          Sum for a total out of 15 (minimum 3).
        </p>

        <div>
          <SectionLabel>{'Eye Opening · max 4'}</SectionLabel>
          <List items={eyeOpening} accent={tool.accent} />
        </div>

        <div>
          <SectionLabel>{'Verbal Response · max 5'}</SectionLabel>
          <List items={verbalResponse} accent={tool.accent} />
        </div>

        <div>
          <SectionLabel>{'Motor Response · max 6'}</SectionLabel>
          <List items={motorResponse} accent={tool.accent} />
        </div>
      </div>
    </main>
  );
}
