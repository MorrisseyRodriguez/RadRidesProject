import React, { useState } from 'react';
import { Phone, Mail, Instagram, Send } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    requestType: '',
    message: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isSupabaseConfigured()) {
      console.error('Supabase not configured');
      toast.error('Contact form is temporarily unavailable. Please call or email us directly.');
      return;
    }

    if (!formData.requestType || !formData.message || !formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('inquiries')
        .insert([
          {
            type: formData.requestType,
            message: formData.message,
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Success:', data);
      toast.success('Message sent successfully!');
      setFormData({
        requestType: '',
        message: '',
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black py-20">
      <Toaster position="top-right" />
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
              >
                <option value="">Select your request type</option>
                <option value="booking">Booking a rental</option>
                <option value="car-request">Car request</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your request"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white h-32"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-white"
              />

              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  href="tel:+18182317347"
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