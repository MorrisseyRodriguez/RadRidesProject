import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="text-blue-500">Rad</span> Rides BCR
            </Link>
            <p className="text-white/60 mt-4">
              Luxury and exotic car rentals serving the Los Angeles area since 2014.
            </p>
            <a
              href="https://instagram.com/radridesbcr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/60 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/60 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/fleet" className="block text-white/60 hover:text-white transition-colors">
                The Fleet
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-white/60">
              <p>Calabasas, CA 91302</p>
              <a 
                href="tel:(818) 231-7347" 
                className="block hover:text-white transition-colors"
              >
                (818) 231-7347
              </a>
              <a 
                href="mailto:radridesbcr@gmail.com" 
                className="block hover:text-white transition-colors"
              >
                radridesbcr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}