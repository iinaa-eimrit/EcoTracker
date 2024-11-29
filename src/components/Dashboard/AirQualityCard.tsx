import React, { useEffect } from 'react';
import { Wind } from 'lucide-react';
import { useAirQualityStore } from '../../store/airQualityStore';

const getAirQualityColor = (aqi: number): string => {
  if (aqi <= 50) return 'bg-green-100 text-green-800';
  if (aqi <= 100) return 'bg-yellow-100 text-yellow-800';
  if (aqi <= 150) return 'bg-orange-100 text-orange-800';
  return 'bg-red-100 text-red-800';
};

export function AirQualityCard() {
  const { data, loading, error, fetchAirQuality } = useAirQualityStore();

  useEffect(() => {
    // Default to user's location or a specific city
    fetchAirQuality('london');
  }, [fetchAirQuality]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-red-500">Failed to load air quality data</div>
      </div>
    );
  }

  if (!data) return null;

  const colorClass = getAirQualityColor(data.aqi);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Air Quality Index</h2>
        <Wind className="w-6 h-6 text-blue-500" />
      </div>
      <div className={`inline-flex items-center px-3 py-1 rounded-full ${colorClass}`}>
        <span className="text-lg font-medium">{data.aqi} AQI</span>
      </div>
      <p className="mt-4 text-gray-600">{data.description}</p>
    </div>
  );
}