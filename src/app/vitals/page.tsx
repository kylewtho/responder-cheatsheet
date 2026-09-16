import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const vitals = [
  { badge: 'HR', title: 'Heart Rate', desc: '60–100 bpm at rest' },
  { badge: 'RR', title: 'Respiratory Rate', desc: '12–20 breaths/min' },
  { badge: 'BP', title: 'Blood Pressure', desc: '90/60–120/80 mmHg' },
  { badge: 'SpO₂', title: 'Oxygen Saturation', desc: '95–100% on room air' },
  { badge: 'Temp', title: 'Temperature', desc: '36.1–37.2°C' },
  { badge: 'BGL', title: 'Blood Glucose', desc: '4.0–7.8 mmol/L fasting' },
  { badge: 'GCS', title: 'Glasgow Coma Scale', desc: '15 at baseline (range 3–15)' },
  { badge: 'Pain', title: 'Pain Score', desc: '0–10, self-reported by patient' },
];

export default function VitalsPage() {
  const tool = getTool('vitals')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md px-4 pb-10 pt-4">
        <List items={vitals} accent={tool.accent} />
        <p className="mt-3 px-1 text-xs" style={{ color: 'var(--ink-faint)' }}>
          Normal ranges for a resting adult. Always interpret against the patient&apos;s baseline.
        </p>
      </div>
    </main>
  );
}
