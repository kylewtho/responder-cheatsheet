import { AppShell } from '@/components/AppShell';
import { LocationCard } from '@/components/LocationCard';
import { TopicBrowser } from '@/components/TopicBrowser';
import { getAllTopics } from '@/lib/content';

export default function Home() {
  const topics = getAllTopics();
  return (
    <main className="min-h-screen">
      <AppShell title="ResQCard">
        <div className="mx-auto max-w-md space-y-6 px-4 pb-16 pt-6">
          <LocationCard />
          <TopicBrowser topics={topics} />
        </div>
      </AppShell>
    </main>
  );
}
