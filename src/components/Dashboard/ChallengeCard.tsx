import { Trophy } from 'lucide-react';
import type { Challenge } from '../../types';

const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Car-Free Week',
    description: 'Use public transport or bike for a week',
    points: 100,
    category: 'transportation',
    completed: false,
  },
  {
    id: '2',
    title: 'Energy Saver',
    description: 'Reduce energy consumption by 20%',
    points: 150,
    category: 'energy',
    completed: true,
  },
];

export function ChallengeCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Active Challenges</h2>
        <Trophy className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="space-y-4">
        {mockChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800">{challenge.title}</h3>
              <span className="text-sm font-medium text-green-600">{challenge.points} pts</span>
            </div>
            <p className="text-sm text-gray-600">{challenge.description}</p>
            <div className="mt-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  challenge.completed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {challenge.completed ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}