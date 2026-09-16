import DetailHeader from '@/components/DetailHeader';
import { Panel } from '@/components/Panel';
import { getTool } from '@/lib/tools';

const vitals = [
  { label: 'Heart Rate', value: '60–100 bpm' },
  { label: 'Respiratory Rate', value: '12–20 /min' },
  { label: 'Blood Pressure', value: '90/60–120/80' },
  { label: 'Oxygen Saturation', value: '95–100%' },
  { label: 'Temperature', value: '36.1–37.2°C' },
  { label: 'Blood Glucose', value: '4.0–7.8 mmol/L' },
  { label: 'Glasgow Coma Scale', value: '15 (3–15)' },
  { label: 'Pain Score', value: '0–10' },
];

export default function VitalsPage() {
  const tool = getTool('vitals')!;
  return (
    <main className="min-h-screen">
      <DetailHeader
        title={tool.title}
        backHref="/"
        icon={<tool.icon size={14} strokeWidth={2} />}
        count={vitals.length}
      />
      <div className="mx-auto max-w-md px-4 pb-16 pt-6">
        <Panel>
          {vitals.map((v, idx) => (
            <div
              key={v.label}
              className="px-4 py-4"
              style={{ borderBottom: idx === vitals.length - 1 ? undefined : '1px solid var(--hairline)' }}
            >
              <div className="text-caption font-bold uppercase" style={{ color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>
                {v.label}
              </div>
              <div className="font-mono mt-0.5 text-[22px]" style={{ color: 'var(--ink)' }}>
                {v.value}
              </div>
            </div>
          ))}
        </Panel>
        <p className="mt-4 px-1 text-caption" style={{ color: 'var(--ink-faint)' }}>
          Resting adult. Interpret against the patient&apos;s baseline.
        </p>
      </div>
    </main>
  );
}
