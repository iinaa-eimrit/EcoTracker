import { Header } from '../components/Layout/Header';
import { AirQualityCard } from '../components/Dashboard/AirQualityCard';
import { CarbonFootprintCard } from '../components/Dashboard/CarbonFootprintCard';
import { ChallengeCard } from '../components/Dashboard/ChallengeCard';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Environmental Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarbonFootprintCard />
          <AirQualityCard />
          <ChallengeCard />
        </div>
      </main>
    </div>
  );
}