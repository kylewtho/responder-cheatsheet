import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const methane = [
  { badge: 'M', title: 'Major Incident', desc: 'Declared, or standby.' },
  { badge: 'E', title: 'Exact Location', desc: 'Location and best access point.' },
  { badge: 'T', title: 'Type of Incident', desc: 'Nature of incident, e.g. MVA, collapse, fire.' },
  { badge: 'H', title: 'Hazards', desc: 'Present and potential hazards.', tone: 'danger' as const },
  { badge: 'A', title: 'Access / Egress', desc: 'Best routes in and out.' },
  { badge: 'N', title: 'Number of Casualties', desc: 'Approx. number and severity.' },
  { badge: 'E', title: 'Emergency Services', desc: 'Present, and any additional required.' },
];

export default function MethanePage() {
  const tool = getTool('methane')!;
  return (
    <main className="min-h-screen">
      <DetailHeader
        title={tool.title}
        backHref="/"
        icon={<tool.icon size={14} strokeWidth={2} />}
        count={methane.length}
      />
      <div className="mx-auto max-w-md px-4 pb-16 pt-6">
        <List items={methane} />
      </div>
    </main>
  );
}
