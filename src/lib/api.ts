import axios from 'axios';
import type { AirQualityData } from '../types';

const API_KEY = import.meta.env.VITE_AIR_QUALITY_API_KEY;
const BASE_URL = 'https://api.waqi.info/feed';

export async function getAirQuality(city: string): Promise<AirQualityData> {
  try {
    const response = await axios.get(`${BASE_URL}/${city}/?token=${API_KEY}`);
    const { data } = response.data;
    
    return {
      aqi: data.aqi,
      level: getAirQualityLevel(data.aqi),
      description: getAirQualityDescription(data.aqi),
    };
  } catch (error) {
    console.error('Error fetching air quality data:', error);
    throw error;
  }
}

function getAirQualityLevel(aqi: number): string {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
}

function getAirQualityDescription(aqi: number): string {
  if (aqi <= 50) return 'Air quality is satisfactory, and air pollution poses little or no risk.';
  if (aqi <= 100) return 'Air quality is acceptable. However, there may be a risk for some people.';
  if (aqi <= 150) return 'Members of sensitive groups may experience health effects.';
  return 'Everyone may begin to experience health effects.';
}