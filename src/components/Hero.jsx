import React from 'react';
import { Phone } from 'lucide-react';
import clsx from 'clsx';

const NavLink = ({ href, children, className }) => (
  <a 
    href={href} 
    className={clsx(
      "text-white hover:text-blue-400 transition-colors",
      className
    )}
  >
    {children}
  </a>
);

const Button = ({ variant = 'primary', children, className, ...props }) => (
  <button
    className={clsx(
      "px-6 py-3 rounded-md font-medium transition-colors",
      variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700",
      variant === 'secondary' && "bg-transparent text-white border-2 border-white hover:bg-white/10",
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
          backgroundImage: 'url(/src/images/Corvette C8/DSC01434.jpg)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <a href="/" className="text-2xl font-bold">
          <span className="text-blue-500">Rad</span>
          <span className="text-white">Rides BCR</span>
        </a>

        <div className="flex items-center gap-8">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/fleet">The Fleet</NavLink>
          <NavLink href="/team">The Team</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
          <NavLink href="/faqs">FAQs</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          
          <NavLink 
            href="tel:8182317347" 
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Phone className="w-4 h-4" />
            (818) 231-7347
          </NavLink>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-center px-4">
        <span className="text-blue-500 font-medium mb-4">
          SERVING THE LOS ANGELES AREA
        </span>
        
        <h1 className="text-white text-6xl font-bold max-w-4xl leading-tight mb-6">
          This Weekend, You're the One They're Filming
        </h1>
        
        <p className="text-gray-300 text-xl max-w-2xl mb-8">
          Real pricing. Spotless cars. No hassle. Just clean rides and fast booking from a crew that actually cares.
        </p>

        <div className="flex items-center gap-4">
          <Button>Send Message</Button>
          <Button variant="secondary">View Our Fleet</Button>
        </div>
      </div>
    </div>
  );
}