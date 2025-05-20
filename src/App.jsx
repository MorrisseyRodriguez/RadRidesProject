import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Star, CheckCircle, Car, MapPin, MessageSquare, ArrowUp, DollarSign, Heart, Wallet, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const features = [
  {
    icon: Clock,
    text: '24/7 availability'
  },
  {
    icon: Star,
    text: "Trusted By LA's Car Lovers Since 2014"
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
    id: 'ferrari-488',
    name: 'Ferrari 488',
    image: '/Images/Ferrari 488/Screenshot 2025-05-17 142855.png',
    hasDiscount: false
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls Royce Cullinan',
    image: '/Images/RR Cullinan/Screenshot 2025-05-17 142721.png',
    hasDiscount: false
  },
  {
    id: 'ferrari-portofino-m',
    name: 'Ferrari Portofino M',
    image: '/Images/Ferrari Portofino M/20230630_121810.jpg',
    hasDiscount: false
  },
  {
    id: 'corvette-c8-z06',
    name: 'Corvette C8 Z06',
    image: '/Images/Corvette C8/Screenshot 2025-05-18 024359.png',
    hasDiscount: true
  },
  {
    id: 'porsche-718-boxster',
    name: 'Porsche 718 Boxster',
    image: '/Images/Porsche 718/Screenshot 2025-05-18 024921.png',
    hasDiscount: true
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade Sport Platinum',
    image: '/Images/Cadillac Escalade/20241114_163926.jpg',
    hasDiscount: true
  },
  {
    id: 'fiat-500-abarth',
    name: 'Fiat 500 Abarth',
    image: '/Images/Fiat 500/Screenshot 2025-05-18 025853.png',
    hasDiscount: true
  }
];

const bookingSteps = [
  {
    number: 1,
    title: "Make Sure You're Good To Go",
    items: [
      "Must be 21+ (exceptions apply—just ask)",
      "Insurance required (we've got options if you don't)",
      "Deposit between $500-$1,500 (refunded after return)"
    ]
  },
  {
    number: 2,
    title: "Pick Your Dream Ride",
    items: [
      "View real cars with real prices",
      "See what's available and what fits your vibe"
    ]
  },
  {
    number: 3,
    title: "Submit Form or Call to Book",
    items: [
      "Submit the form or text us with your car + dates",
      "Pay 50% to lock it in, simple and secure"
    ]
  },
  {
    number: 4,
    title: "Show Up & Show Out",
    items: [
      "Either show up or get it delivered to you",
      "Grab the keys, drop the deposit, and go turn heads",
      "When you're back, pay the rest and get your deposit back"
    ]
  }
];

const team = [
  {
    name: "Chad",
    role: "Owner/Operator",
    image: "/Images/Team/Screenshot 2025-05-17 143859.png",
    description: "I stumbled into this business when I listed a salvage title Prius on Relay Rides. In spite of myself and with the help of Dara we've managed to build and keep it growing. I'm an enthusiast so you can always keep me talking when it comes to cars!",
    contact: true
  },
  {
    name: "Dara",
    role: "Logistics",
    image: "/Images/Team/Screenshot 2025-05-17 143848.png",
    description: "The silent partner and car rental delivery chase car girl!",
    contact: false
  },
  {
    name: "Charley & Kenny",
    role: "Mascots",
    image: "/Images/Team/Screenshot 2025-05-17 143836.png",
    description: "Mascots",
    contact: false
  }
];

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
      <div id="fleet" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            The Fleet
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((car) => (
              <div key={car.id} className="bg-zinc-900 rounded-lg overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover object-center scale-110"
                    style={{ objectPosition: '50% 50%' }}
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
                  <Link 
                    to={`/cars/${car.id}`}
                    className="block w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
                  >
                    View Details
                  </Link>
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

      {/* How to Book Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How to Book in 4 Easy Steps
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>

          <div className="relative">
            {/* Numbers connection line */}
            <div className="absolute top-6 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-1 bg-blue-500 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {bookingSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Number circle */}
                  <div className="relative mx-auto w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mb-8">
                    {step.number}
                  </div>

                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/80 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            The Team
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-500 mb-3">{member.role}</p>
                    <p className="text-white/80 text-sm">{member.description}</p>
                    
                    {member.contact && (
                      <div className="flex gap-4 mt-4">
                        <a href="mailto:contact@example.com" className="text-white/80 hover:text-white">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href="tel:+1234567890" className="text-white/80 hover:text-white">
                          <Phone className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;