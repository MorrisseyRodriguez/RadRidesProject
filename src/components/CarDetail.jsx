import React from 'react';
import { Clock, Gauge, Users } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

export default function CarDetail() {
  const car = useLoaderData();

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative h-[60vh]">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <h1 className="absolute bottom-8 left-8 text-5xl font-bold">{car.name}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-500" />
            <span>{car.acceleration} 0-60</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-6 h-6 text-blue-500" />
            <span>{car.horsepower}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            <span>{car.seats} seater</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300">{car.overview}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <div className="text-gray-400 mb-2">Acceleration</div>
                  <div className="text-2xl">{car.acceleration}</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <div className="text-gray-400 mb-2">Horsepower</div>
                  <div className="text-2xl">{car.horsepower}</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <div className="text-gray-400 mb-2">Top Speed</div>
                  <div className="text-2xl">{car.topSpeed}</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <div className="text-gray-400 mb-2">Transmission</div>
                  <div className="text-2xl">{car.transmission}</div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-zinc-900 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>100 miles per day included</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional miles: $5 per mile</span>
                </div>
                <div className="flex justify-between">
                  <span>Security deposit required</span>
                </div>
                <div className="flex justify-between">
                  <span>1 Rental Day = 24 hours</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full bg-black border border-gray-700 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full bg-black border border-gray-700 rounded-md p-2" />
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}