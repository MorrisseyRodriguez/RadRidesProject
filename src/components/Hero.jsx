import React from 'react';
import { Phone } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', children, className, as = 'button', ...props }) => {
  const Component = as;
  return (
    <Component
      className={clsx(
        "px-6 py-3 rounded font-medium transition-all duration-300",
        variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
        variant === 'secondary' && "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/Images/Corvette C8/DSC01434.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-110"
          style={{ objectPosition: '50% 35%' }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-5rem)] flex items-center px-8">
        <div className="max-w-2xl">
          <span className="text-blue-500 font-medium tracking-widest uppercase mb-4 block">
            SERVING THE LOS ANGELES AREA
          </span>
          
          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-8">
            This Weekend,
            <br />
            You're the One They're Filming
          </h1>
          
          <p className="text-white/80 text-xl mb-12">
            Real pricing. Spotless cars. No hassle. Just clean rides and fast booking from a crew that actually cares.
          </p>

          <div className="flex items-center gap-6">
            <Button 
              as="button"
              onClick={() => scrollToSection('contact')}
            >
              Send Message →
            </Button>
            <Button 
              as="button"
              variant="secondary"
              onClick={() => scrollToSection('fleet')}
            >
              View Our Fleet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}