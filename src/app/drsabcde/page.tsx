import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const drsabcde = [
  { badge: 'D', title: 'Danger', desc: 'Check for danger to yourself, bystanders, and the patient.' },
  { badge: 'R', title: 'Response', desc: 'Assess response: AVPU (Alert, Voice, Pain, Unresponsive).' },
  { badge: 'S', title: 'Send for Help / Severe Haem.', desc: 'Call for help. Control severe bleeding: Blood Sweep, TQ, Pack Wounds.' },
  { badge: 'A', title: 'Airway', desc: 'Open, clear, and maintain airway. Consider nasopharyngeal airway.' },
  { badge: 'B', title: 'Breathing', desc: 'Rub and Rake, Chest Seal, Rise and Fall, Respiratory Rate.' },
  { badge: 'C', title: 'Circulation', desc: 'Abdominal check, fractures, dress wounds, check heart rate.' },
  { badge: 'D', title: 'Disability', desc: 'Assess AVPU, pupils, ears.' },
  { badge: 'E', title: 'Environment', desc: 'Manage environment: Space Blanket, IMIST.' },
];

export default function DRSABCDEPage() {
  const tool = getTool('drsabcde')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md px-4 pb-10 pt-4">
        <List items={drsabcde} accent={tool.accent} />
      </div>
    </main>
  );
}
