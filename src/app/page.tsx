import { AppShell } from '@/components/AppShell';
import { LocationCard } from '@/components/LocationCard';
import { ToolList } from '@/components/ToolList';
import { tools } from '@/lib/tools';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AppShell title="First Responder">
        <div className="mx-auto max-w-md space-y-8 px-4 pb-16 pt-8">
          <LocationCard />
          <ToolList tools={tools} />
        </div>
      </AppShell>
    </main>
  );
}
