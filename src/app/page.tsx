import { AppShell } from '@/components/AppShell';
import { LocationCard } from '@/components/LocationCard';
import { ToolList } from '@/components/ToolList';
import { tools } from '@/lib/tools';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AppShell title="First Responder">
        <div className="mx-auto max-w-md space-y-5 px-4 pb-10 pt-4">
          <LocationCard />
          <ToolList tools={tools} />
        </div>
      </AppShell>
    </main>
  );
}
