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
  accent: string;
}

export const tools: Tool[] = [
  { key: 'drsabcde', title: 'DRSABCDE', icon: Stethoscope, accent: 'var(--accent-drsabcde)' },
  { key: 'march', title: 'MARCH', icon: Droplets, accent: 'var(--accent-march)' },
  { key: 'vitals', title: 'Vital Signs', icon: HeartPulse, accent: 'var(--accent-vitals)' },
  { key: 'imist', title: 'IMIST-AMBO', icon: ClipboardList, accent: 'var(--accent-imist)' },
  { key: 'gcs', title: 'Glasgow Coma Scale', icon: Brain, accent: 'var(--accent-gcs)' },
  { key: 'triage', title: 'Triage Sieve', icon: TrafficCone, accent: 'var(--accent-triage)' },
  { key: 'methane', title: 'METHANE', icon: Flame, accent: 'var(--accent-methane)' },
];

export function getTool(key: string): Tool | undefined {
  return tools.find((t) => t.key === key);
}
