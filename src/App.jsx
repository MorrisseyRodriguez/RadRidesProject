import React from 'react';
import { Car, DollarSign, Calendar, Star } from 'lucide-react';
import Hero from './components/Hero';

const cars = [
  {
    name: 'Corvette C8',
    price: 599,
    image: '/src/images/Corvette C8/DSC01434.jpg'
  },
  {
    name: 'Ferrari Portofino M',
    price: 1299,
    image: '/src/images/Ferrari Portofino M/20230630_121726.jpg'
  },
  {
    name: 'Porsche 718',
    price: 499,
    image: '/src/images/Porsche 718/Screenshot 2025-05-18 024921.png'
  },
  {
    name: 'RR Cullinan',
    price: 1499,
    image: '/src/images/RR Cullinan/Screenshot 2025-05-18 022934.png'
  },
  {
    name: 'Ferrari 488',
    price: 1399,
    image: '/src/images/Ferrari 488 photos/IMG_20250517_102622 (1).jpg'
  }
];

const features = [
  {
    icon: DollarSign,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden fees'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy scheduling that works around your plans'
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'White-glove delivery and support'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fleet Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3 mb-4">
              <Car className="w-8 h-8" />
              Our Fleet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of premium vehicles, each maintained to the highest standards
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.name} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                    ${car.price}/day
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;