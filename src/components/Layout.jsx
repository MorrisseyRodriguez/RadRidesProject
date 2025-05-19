import React from 'react';
import { Phone } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import Footer from './Footer';

const NavLink = ({ to, children, className }) => (
  <Link 
    to={to} 
    className={clsx(
      "text-white/80 hover:text-white transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

export default function Layout() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-between px-8 py-6">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-500">Rad</span>
          <span className="text-white">Rides BCR</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/fleet">The Fleet</NavLink>
          <NavLink to="/team">The Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          
          <a 
            href="tel:8182317347" 
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white"
          >
            <Phone className="w-4 h-4" />
            (818) 231-7347
          </a>
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}