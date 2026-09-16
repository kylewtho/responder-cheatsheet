import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { Panel } from '@/components/Panel';
import { getTool } from '@/lib/tools';

const sieve = [
  { badge: '1', title: 'Walking?', desc: 'Can walk → Priority 3 (Delayed).' },
  { badge: '2', title: 'Breathing?', desc: 'Open airway. Still not breathing → Deceased.', tone: 'danger' as const },
  { badge: '3', title: 'Respiratory Rate', desc: 'RR <10 or >29/min → Priority 1 (Immediate).' },
  { badge: '4', title: 'Perfusion', desc: 'Cap refill >2s or no radial pulse → Priority 1 (Immediate).' },
  { badge: '5', title: 'Otherwise', desc: 'Cap refill ≤2s, pulse present → Priority 2 (Urgent).' },
];

const categories = [
  { color: 'var(--color-error)', label: 'P1 – Immediate' },
  { color: 'var(--color-warning)', label: 'P2 – Urgent' },
  { color: 'var(--color-success)', label: 'P3 – Delayed' },
  { color: 'var(--color-info)', label: 'Expectant' },
  { color: 'var(--ink)', label: 'Deceased' },
];

export default function TriagePage() {
  const tool = getTool('triage')!;
  return (
    <main className="min-h-screen">
      <DetailHeader
        title={tool.title}
        backHref="/"
        icon={<tool.icon size={14} strokeWidth={2} />}
        count={sieve.length}
      />
      <div className="mx-auto max-w-md space-y-8 px-4 pb-16 pt-6">
        <List items={sieve} />

        <Panel className="px-4 py-4">
          <div className="mb-3 text-caption font-bold uppercase" style={{ color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>
            Categories
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 shrink-0" style={{ background: c.color }} />
                <span className="text-body-sm" style={{ color: 'var(--ink)' }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </main>
  );
}
