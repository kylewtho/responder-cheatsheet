import {
  Stethoscope,
  Droplets,
  HeartPulse,
  ClipboardList,
  Brain,
  TrafficCone,
  Flame,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const TOPIC_ICONS: Record<string, LucideIcon> = {
  drsabcde: Stethoscope,
  march: Droplets,
  vitals: HeartPulse,
  imist: ClipboardList,
  gcs: Brain,
  triage: TrafficCone,
  methane: Flame,
};

export function getTopicIcon(slug: string): LucideIcon {
  return TOPIC_ICONS[slug] ?? BookOpen;
}
