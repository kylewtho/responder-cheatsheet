import { LocationCard } from '@/components/LocationCard';
import { TopicBrowser } from '@/components/TopicBrowser';
import { getAllTopics } from '@/lib/content';

export default function Home() {
  const topics = getAllTopics();
  return (
    <main className="min-h-screen">
      <div
        className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: 'url(/brand/banner.png)', backgroundSize: 'auto 180px' }}
      >
        <div
          className="flex flex-1 flex-col px-4"
          style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 24px)' }}
        >
          <div className="flex-1 space-y-6 pb-6">
            <TopicBrowser topics={topics} />
          </div>
          <div className="flex min-h-[180px] items-center pb-6 pl-56">
            <LocationCard />
          </div>
        </div>
      </div>
    </main>
  );
}
