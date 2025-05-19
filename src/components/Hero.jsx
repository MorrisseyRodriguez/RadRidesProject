import React from 'react';
import { Phone } from 'lucide-react';
import clsx from 'clsx';

const NavLink = ({ href, children, className }) => (
  <a 
    href={href} 
    className={clsx(
      "text-white/80 hover:text-white transition-colors",
      className
    )}
  >
    {children}
  </a>
);

const Button = ({ variant = 'primary', children, className, ...props }) => (
  <button
    className={clsx(
      "px-6 py-3 rounded font-medium transition-all duration-300",
      variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
      variant === 'secondary' && "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Images/Corvette C8/DSC01434.jpg)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <a href="/" className="text-2xl font-bold">
          <span className="text-blue-500">Rad</span>
          <span className="text-white">Rides BCR</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/home">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/fleet">The Fleet</NavLink>
          <NavLink href="/team">The Team</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
          <NavLink href="/faqs">FAQs</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          
          <NavLink 
            href="tel:8182317347" 
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white"
          >
            <Phone className="w-4 h-4" />
            (818) 231-7347
          </NavLink>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-center px-4">
        <span className="text-blue-500 font-medium tracking-widest uppercase mb-4">
          SERVING THE LOS ANGELES AREA
        </span>
        
        <h1 className="text-white text-5xl lg:text-7xl font-bold max-w-5xl leading-tight mb-8">
          This Weekend,
          <br />
          You're the One They're Filming
        </h1>
        
        <p className="text-white/80 text-xl max-w-2xl mb-12">
          Real pricing. Spotless cars. No hassle. Just clean rides and fast booking from a crew that actually cares.
        </p>

        <div className="flex items-center gap-6">
          <Button>Send Message →</Button>
          <Button variant="secondary">View Our Fleet</Button>
        </div>
      </div>
    </div>
  );
}