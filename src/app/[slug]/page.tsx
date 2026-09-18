import { notFound } from 'next/navigation';
import DetailHeader from '@/components/DetailHeader';
import { SkillCard } from '@/components/SkillCard';
import { getAllTopics, getTopic } from '@/lib/content';
import { getTopicIcon } from '@/lib/icons';

export function generateStaticParams() {
  return getAllTopics().map((topic) => ({ slug: topic.slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const Icon = getTopicIcon(topic.slug);

  return (
    <main className="min-h-screen">
      <DetailHeader title={topic.title} backHref="/" icon={<Icon size={14} strokeWidth={2} />} />
      <div className="mx-auto max-w-md px-4 pb-16 pt-6">
        <SkillCard body={topic.body} />
      </div>
    </main>
  );
}
