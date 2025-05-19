import React from 'react';
import { Car } from 'lucide-react';
import Hero from './components/Hero';

const cars = [
  {
    name: 'Corvette C8',
    image: '/src/images/Corvette C8/DSC01434.jpg'
  },
  {
    name: 'Ferrari Portofino M',
    image: '/src/images/Ferrari Portofino M/20230630_121726.jpg'
  },
  {
    name: 'Porsche 718',
    image: '/src/images/Porsche 718/Screenshot 2025-05-18 024921.png'
  },
  {
    name: 'RR Cullinan',
    image: '/src/images/RR Cullinan/Screenshot 2025-05-18 022934.png'
  },
  {
    name: 'Ferrari 488',
    image: '/src/images/Ferrari 488 photos/IMG_20250517_102622 (1).jpg'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      
      <div className="p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
            <Car className="w-8 h-8" />
            Our Fleet
          </h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;