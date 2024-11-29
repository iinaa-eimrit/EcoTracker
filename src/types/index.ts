export interface CarbonFootprint {
  transportation: number;
  energy: number;
  diet: number;
  waste: number;
  total: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  category: 'transportation' | 'energy' | 'diet' | 'waste';
  completed: boolean;
}

export interface AirQualityData {
  aqi: number;
  level: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  points: number;
  challenges: string[];
}

export interface CarbonFootprintFormData {
  transportation: {
    carMileage: number;
    publicTransport: number;
    flights: number;
  };
  energy: {
    electricityUsage: number;
    gasUsage: number;
  };
  diet: {
    meatConsumption: number;
    dairyConsumption: number;
    localProduce: number;
  };
  waste: {
    recycling: number;
    composting: number;
  };
}