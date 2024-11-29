import { create } from 'zustand';
import { getAirQuality } from '../lib/api';
import type { AirQualityData } from '../types';

interface AirQualityState {
  data: AirQualityData | null;
  loading: boolean;
  error: string | null;
  fetchAirQuality: (city: string) => Promise<void>;
}

export const useAirQualityStore = create<AirQualityState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchAirQuality: async (city: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getAirQuality(city);
      set({ data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));