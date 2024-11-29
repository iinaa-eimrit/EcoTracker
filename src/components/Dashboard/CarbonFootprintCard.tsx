import { Leaf } from 'lucide-react';
import type { CarbonFootprint } from '../../types';

const mockFootprint: CarbonFootprint = {
  transportation: 2.5,
  energy: 1.8,
  diet: 1.2,
  waste: 0.8,
  total: 6.3,
};

export function CarbonFootprintCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Carbon Footprint</h2>
        <Leaf className="w-6 h-6 text-green-500" />
      </div>
      <div className="space-y-4">
        {Object.entries(mockFootprint).map(([key, value]) => (
          key !== 'total' && (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-600 capitalize">{key}</span>
              <span className="font-medium">{value} tons CO₂e</span>
            </div>
          )
        ))}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between font-semibold">
            <span className="text-gray-800">Total Impact</span>
            <span className="text-lg text-green-600">{mockFootprint.total} tons CO₂e</span>
          </div>
        </div>
      </div>
    </div>
  );
}