import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Justin Baraglia',
    stats: '1 review • 1 photo',
    rating: 5,
    text: 'Chad is an amazing guy and so easy to deal with! He always has the best cars for the best prices. When you need a great car without all the hassle chose Rad Rides.'
  },
  {
    name: 'Alan Bogdanov',
    stats: '5 reviews • 0 photos',
    rating: 5,
    text: 'I had an amazing experience renting multiple cars from Chad. The cars are spotless, inside and out, and well-maintained. The pricing is very reasonable, offering great value for the quality of service provided. What truly sets this rental company apart is the outstanding customer service. Chad was incredibly helpful, always ready to assist with any questions. His professionalism and friendly attitude made the whole process easy and stress-free. If you\'re looking for a reliable car rental with clean vehicles, fair prices, and top-notch service, I highly recommend Rad rides, Will definitely rent again.'
  },
  {
    name: 'Tim Russell',
    stats: '2 reviews • 7 photos',
    rating: 5,
    text: 'Rad Rides gave me a perfect experience. Chad was very helpful and I would recommend this service to anyone. You can\'t go wrong putting your trust into Rad Rides. I\'m proud to say that I am a repeat customer and will continue to be one.'
  }
];

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            What Our Customers Say
            <div className="w-24 h-1 bg-blue-500 mt-4"></div>
          </h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{testimonial.stats}</p>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className={`relative ${expandedIndex === index ? '' : 'max-h-24 overflow-hidden'}`}>
                  <p className="text-white/80">{testimonial.text}</p>
                  {testimonial.text.length > 150 && expandedIndex !== index && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900" />
                  )}
                </div>

                {testimonial.text.length > 150 && (
                  <button
                    className="text-blue-500 hover:text-blue-400 mt-2"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? 'Show Less ↑' : 'Read More ↓'}
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end gap-4 mt-8">
          <button className="swiper-button-prev w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}