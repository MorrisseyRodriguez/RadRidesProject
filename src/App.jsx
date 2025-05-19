import React from 'react';
import { Clock, Star, CheckCircle, Car, MapPin, MessageSquare, ArrowUp, DollarSign, Heart, Wallet } from 'lucide-react';
import Hero from './components/Hero';

const features = [
  {
    icon: Clock,
    text: '24/7 availability'
  },
  {
    icon: Star,
    text: 'Trusted By LA\'s Car Lovers Since 2014'
  },
  {
    icon: CheckCircle,
    text: 'Easy and Friendly Service'
  },
  {
    icon: Car,
    text: 'Delivery & Pickup Available'
  },
  {
    icon: MapPin,
    text: 'A Local Favorite'
  },
  {
    icon: MessageSquare,
    text: 'Text Us. We Actually Reply.'
  },
  {
    icon: ArrowUp,
    text: 'Easy Pickup. Easy Drop-off.'
  },
  {
    icon: DollarSign,
    text: 'Clear Pricing. Zero Headaches.'
  },
  {
    icon: Heart,
    text: 'The Cars Are Rad'
  },
  {
    icon: Wallet,
    text: 'We accept Cash, Credit & Debit cards, Venmo, Zelle, Cashapp & PayPal'
  }
];

const fleet = [
  {
    name: 'Ferrari 488',
    image: '/Images/Ferrari 488/ferrari-488.jpg',
    hasDiscount: false
  },
  {
    name: 'Rolls Royce Cullinan',
    image: '/Images/RR Cullinan/cullinan.jpg',
    hasDiscount: false
  },
  {
    name: 'Ferrari Portofino M',
    image: '/Images/Ferrari Portofino M/portofino.jpg',
    hasDiscount: false
  },
  {
    name: 'Corvette C8 Z06',
    image: '/Images/Corvette C8/corvette.jpg',
    hasDiscount: true
  },
  {
    name: 'Porsche 718 Boxster',
    image: '/Images/Porsche 718/boxster.jpg',
    hasDiscount: true
  },
  {
    name: 'Cadillac Escalade Sport Platinum',
    image: '/Images/Escalade/escalade.jpg',
    hasDiscount: true
  },
  {
    name: 'Fiat 500 Abarth',
    image: '/Images/Fiat/fiat.jpg',
    hasDiscount: true
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      
      {/* Why Choose Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Rad Rides BCR
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-zinc-900 rounded-lg p-6 flex items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,119,255,0.5)] relative"
              >
                <feature.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-white">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            The Fleet
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((car) => (
              <div key={car.name} className="bg-zinc-900 rounded-lg overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{car.name}</h3>
                  <a 
                    href="#" 
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    Request a Quote to Book This Vehicle
                  </a>
                  {car.hasDiscount && (
                    <p className="text-green-500 text-sm mt-2">Multi-day discounts apply</p>
                  )}
                  <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white mb-6">
              Don't see what you're looking for? We have access to many more exotic and luxury vehicles!
            </p>
            <button className="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
              Request a specific car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;