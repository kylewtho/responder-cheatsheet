import { Card } from '@/components/Card';

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">First Responder Tools</h1>
      <div className="space-y-2">
        <Card><h2 className="text-lg font-semibold">🩸 MARCH</h2></Card>
        <Card><h2 className="text-lg font-semibold">📋 IMIST</h2></Card>
      </div>
    </main>
  );
}