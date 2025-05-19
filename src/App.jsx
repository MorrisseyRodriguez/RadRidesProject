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
                className="bg-zinc-900 rounded-lg p-6 flex items-center gap-4 transform transition-transform hover:scale-105"
              >
                <feature.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-white">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;