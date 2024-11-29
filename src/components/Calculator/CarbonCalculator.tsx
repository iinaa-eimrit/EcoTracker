import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { CarbonFootprintFormData } from '../../types';

const calculatorSchema = z.object({
  transportation: z.object({
    carMileage: z.number().min(0),
    publicTransport: z.number().min(0),
    flights: z.number().min(0),
  }),
  energy: z.object({
    electricityUsage: z.number().min(0),
    gasUsage: z.number().min(0),
  }),
  diet: z.object({
    meatConsumption: z.number().min(0),
    dairyConsumption: z.number().min(0),
    localProduce: z.number().min(0),
  }),
  waste: z.object({
    recycling: z.number().min(0),
    composting: z.number().min(0),
  }),
});

export function CarbonCalculator() {
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null);
  const { register, handleSubmit } = useForm<CarbonFootprintFormData>({
    resolver: zodResolver(calculatorSchema),
  });

  const onSubmit = (data: CarbonFootprintFormData) => {
    console.log('Form Data:', data);

    // Calculate carbon footprint for each section
    const transportationScore =
      data.transportation.carMileage * 0.25 +
      data.transportation.publicTransport * 0.15 +
      data.transportation.flights * 0.5;

    const energyScore =
      data.energy.electricityUsage * 0.3 + data.energy.gasUsage * 0.4;

    const dietScore =
      data.diet.meatConsumption * 0.4 +
      data.diet.dairyConsumption * 0.3 -
      data.diet.localProduce * 0.2;

    const wasteScore =
      -data.waste.recycling * 0.2 - data.waste.composting * 0.15;

    const totalScore =
      transportationScore + energyScore + dietScore + wasteScore;

    // Set the calculated carbon footprint
    setCarbonFootprint(totalScore);
    console.log('Calculated Carbon Footprint:', totalScore);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Transportation</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Car Mileage (miles/week)
              </label>
              <input
                type="number"
                {...register('transportation.carMileage', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Public Transport (miles/week)
              </label>
              <input
                type="number"
                {...register('transportation.publicTransport', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Flights (miles/month)
              </label>
              <input
                type="number"
                {...register('transportation.flights', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Energy</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Electricity Usage (kWh/month)
              </label>
              <input
                type="number"
                {...register('energy.electricityUsage', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gas Usage (therms/month)
              </label>
              <input
                type="number"
                {...register('energy.gasUsage', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Diet</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Meat Consumption (kg/week)
              </label>
              <input
                type="number"
                {...register('diet.meatConsumption', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dairy Consumption (kg/week)
              </label>
              <input
                type="number"
                {...register('diet.dairyConsumption', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Local Produce (kg/week)
              </label>
              <input
                type="number"
                {...register('diet.localProduce', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Waste</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Recycling (kg/week)
              </label>
              <input
                type="number"
                {...register('waste.recycling', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Composting (kg/week)
              </label>
              <input
                type="number"
                {...register('waste.composting', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Calculate Footprint
        </button>
      </form>

      {carbonFootprint !== null && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-bold text-gray-800">Your Estimated Carbon Footprint</h2>
          <p className="text-gray-700">
            {carbonFootprint.toFixed(2)} units (lower is better)
          </p>
        </div>
      )}
    </div>
  );
}