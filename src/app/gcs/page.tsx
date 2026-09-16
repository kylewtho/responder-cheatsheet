import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const eyeOpening = [
  { badge: '4', title: 'Spontaneous', desc: 'Opens eyes on their own.' },
  { badge: '3', title: 'To Voice', desc: 'Opens eyes when spoken to.' },
  { badge: '2', title: 'To Pain', desc: 'Opens eyes only in response to a painful stimulus.' },
  { badge: '1', title: 'None', desc: 'No eye opening.' },
];

const verbalResponse = [
  { badge: '5', title: 'Oriented', desc: 'Knows who, where, and when.' },
  { badge: '4', title: 'Confused', desc: 'Converses, but is disoriented.' },
  { badge: '3', title: 'Inappropriate Words', desc: 'Random or exclamatory words, no conversation.' },
  { badge: '2', title: 'Incomprehensible Sounds', desc: 'Moaning, no recognizable words.' },
  { badge: '1', title: 'None', desc: 'No verbal response.' },
];

const motorResponse = [
  { badge: '6', title: 'Obeys Commands', desc: 'Follows simple instructions.' },
  { badge: '5', title: 'Localizes Pain', desc: 'Purposeful movement toward painful stimulus.' },
  { badge: '4', title: 'Withdraws from Pain', desc: 'Pulls away from painful stimulus.' },
  { badge: '3', title: 'Abnormal Flexion', desc: 'Decorticate posturing.' },
  { badge: '2', title: 'Abnormal Extension', desc: 'Decerebrate posturing.' },
  { badge: '1', title: 'None', desc: 'No motor response.' },
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
          Score each category and sum for a total out of 15 (minimum 3).
        </p>

        <div>
          <SectionLabel>{'Eye Opening (E) · max 4'}</SectionLabel>
          <List items={eyeOpening} accent={tool.accent} />
        </div>

        <div>
          <SectionLabel>{'Verbal Response (V) · max 5'}</SectionLabel>
          <List items={verbalResponse} accent={tool.accent} />
        </div>

        <div>
          <SectionLabel>{'Motor Response (M) · max 6'}</SectionLabel>
          <List items={motorResponse} accent={tool.accent} />
        </div>
      </div>
    </main>
  );
}
