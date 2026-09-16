import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const methane = [
  { badge: 'M', title: 'Major Incident', desc: 'Declared, or major incident standby.' },
  { badge: 'E', title: 'Exact Location', desc: 'Precise location and best access point.' },
  { badge: 'T', title: 'Type of Incident', desc: 'Nature of the incident (e.g. MVA, structural collapse, fire).' },
  { badge: 'H', title: 'Hazards', desc: 'Present and potential hazards to responders.', tone: 'danger' as const },
  { badge: 'A', title: 'Access / Egress', desc: 'Best routes in and out for responding services.' },
  { badge: 'N', title: 'Number of Casualties', desc: 'Approximate number and severity of casualties.' },
  { badge: 'E', title: 'Emergency Services', desc: 'Services present and any additional services required.' },
];

export default function MethanePage() {
  const tool = getTool('methane')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md px-4 pb-10 pt-4">
        <List items={methane} accent={tool.accent} />
      </div>
    </main>
  );
}
