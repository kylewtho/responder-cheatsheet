import {
  Stethoscope,
  Droplets,
  HeartPulse,
  ClipboardList,
  Brain,
  TrafficCone,
  Flame,
  type LucideIcon,
} from 'lucide-react';

export interface Tool {
  key: string;
  title: string;
  icon: LucideIcon;
}

export const tools: Tool[] = [
  { key: 'drsabcde', title: 'DRSABCDE', icon: Stethoscope },
  { key: 'march', title: 'MARCH', icon: Droplets },
  { key: 'vitals', title: 'Vital Signs', icon: HeartPulse },
  { key: 'imist', title: 'IMIST-AMBO', icon: ClipboardList },
  { key: 'gcs', title: 'Glasgow Coma Scale', icon: Brain },
  { key: 'triage', title: 'Triage Sieve', icon: TrafficCone },
  { key: 'methane', title: 'METHANE', icon: Flame },
];

export function getTool(key: string): Tool | undefined {
  return tools.find((t) => t.key === key);
}
