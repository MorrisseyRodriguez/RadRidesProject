import React from 'react';
import { Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-white/80 mb-8">
              Let us know what you're looking for and we'll text you right back
            </p>

            <form className="space-y-4">
              <select className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white">
                <option value="">Select your request type</option>
                <option value="rental">Car Rental</option>
                <option value="quote">Get a Quote</option>
                <option value="info">General Information</option>
              </select>

              <textarea
                placeholder="Tell us about your request"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white h-32"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
                />
              </div>

              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
              />

              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">
              Get in Touch
              <div className="w-24 h-1 bg-blue-500 mt-4"></div>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-white text-xl mb-4">Give us a call</h3>
                <a
                  href="tel:(818) 231-7347"
                  className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (818) 231-7347
                </a>
              </div>

              <div>
                <h3 className="text-white text-xl mb-4">Send us an email</h3>
                <a
                  href="mailto:radridesbcr@gmail.com"
                  className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  radridesbcr@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-white text-xl mb-4">Follow Us</h3>
                <a
                  href="https://instagram.com/radridesbcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  @radridesbcr
                </a>
              </div>

              <div>
                <h3 className="text-white text-xl mb-4">Location</h3>
                <div className="text-white/80">
                  <p>Rad Rides BCR</p>
                  <p>Calabasas</p>
                  <p>California 91302</p>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl mb-4">Areas Covered</h3>
                <p className="text-white/80">
                  Metropolitan Los Angeles, any areas further wanting delivery can message Chad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}