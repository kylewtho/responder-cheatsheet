import { AppShell } from '@/components/AppShell';
import { LocationCard } from '@/components/LocationCard';
import { TopicBrowser } from '@/components/TopicBrowser';
import { getAllTopics } from '@/lib/content';

export default function Home() {
  const topics = getAllTopics();
  return (
    <main className="min-h-screen">
      <div
        className="mx-auto min-h-screen w-full max-w-md bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: 'url(/brand/banner.png)', backgroundSize: 'auto 180px' }}
      >
        <AppShell>
          <div className="space-y-6 px-4 pb-48 pt-6">
            <LocationCard />
            <TopicBrowser topics={topics} />
          </div>
        </AppShell>
      </div>
    </main>
  );
}
