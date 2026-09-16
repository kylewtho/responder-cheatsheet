import DetailHeader from '@/components/DetailHeader';
import { List } from '@/components/List';
import { getTool } from '@/lib/tools';

const imistAmbo = [
  { badge: 'I', title: 'Identification', desc: "Patient's age and sex. Your name/role and callsign." },
  { badge: 'M', title: 'Mechanism / Medical Complaint', desc: 'What happened, or the presenting complaint.' },
  { badge: 'I', title: 'Injuries / Information', desc: 'Injuries found, or clinical information related to the complaint.' },
  { badge: 'S', title: 'Signs', desc: 'Vital signs: RR, HR, BP, SpO2, GCS, Temp.' },
  { badge: 'T', title: 'Treatment / Trends', desc: 'Treatment given so far and the trend in the patient’s condition.' },
  { badge: 'A', title: 'Allergies', desc: 'Known drug, food, or environmental allergies.' },
  { badge: 'M', title: 'Medications', desc: 'Current medications, including recent doses given.' },
  { badge: 'B', title: 'Background', desc: 'Relevant past medical history.' },
  { badge: 'O', title: 'Other Information', desc: 'Social factors, valuables, family/next of kin contact.' },
];

export default function IMISTPage() {
  const tool = getTool('imist')!;
  return (
    <main className="min-h-screen">
      <DetailHeader title={tool.title} backHref="/" icon={<tool.icon size={15} strokeWidth={2.5} />} accent={tool.accent} />
      <div className="mx-auto max-w-md px-4 pb-10 pt-4">
        <List items={imistAmbo} accent={tool.accent} />
      </div>
    </main>
  );
}
