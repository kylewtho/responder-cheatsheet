import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { GlassCard } from '@/components/GlassCard';
import { getTool } from '@/lib/tools';

const sieve = [
  { badge: '1', title: 'Walking?', desc: 'If the patient can walk, they are Priority 3 (Delayed).' },
  { badge: '2', title: 'Breathing?', desc: 'Open the airway. If still not breathing, the patient is Deceased.', tone: 'danger' as const },
  { badge: '3', title: 'Respiratory Rate', desc: 'Breathing present. If RR is under 10 or over 29/min, Priority 1 (Immediate).' },
  { badge: '4', title: 'Perfusion', desc: 'RR 10–29/min. If capillary refill is over 2 seconds, or the radial pulse is absent, Priority 1 (Immediate).' },
  { badge: '5', title: 'Otherwise', desc: 'Capillary refill ≤2 seconds and radial pulse present: Priority 2 (Urgent).' },
];

const categories = [
  { color: '#ff3b30', label: 'P1 – Immediate' },
  { color: '#ffcc00', label: 'P2 – Urgent' },
  { color: '#34c759', label: 'P3 – Delayed' },
  { color: '#007aff', label: 'Expectant' },
  { color: 'var(--ink)', label: 'Deceased' },
];

export default function TriagePage() {
  const tool = getTool('triage')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md space-y-5 px-4 pb-10 pt-4">
        <List items={sieve} accent={tool.accent} />

        <GlassCard className="px-4 py-3.5" strong>
          <div className="mb-2 text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--ink-muted)' }}>
            Categories
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c.color }} />
                <span className="text-[14px]" style={{ color: 'var(--ink)' }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
