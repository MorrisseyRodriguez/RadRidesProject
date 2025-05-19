import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-12">
          More Than Cars. We Deliver the Moment.
          <div className="w-24 h-1 bg-blue-500 mt-4"></div>
        </h1>

        <div className="space-y-8 text-white/80">
          <p className="text-xl">
            At Rad Rides BCR, we don't just rent cars—we deliver the moment. The stares at the light. 
            The roar of the engine. That "I can't believe I'm in this" feeling.
          </p>

          <p className="text-xl">
            We're a Exotic car rental crew based in Calabasas, known for making the exotic rental 
            experience actually feel easy, personal, and real.
          </p>

          <div className="bg-zinc-900 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>No ghosting when you text.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>No "similar vehicle" BS when you show up.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>No cold, front-desk energy.</p>
            </div>
          </div>

          <p className="text-xl font-semibold">Just real cars. Real replies. Real people.</p>

          <p className="text-xl">
            Whether you're pulling up for a special event, or just chasing that first-time thrill, 
            we'll make sure the entire process is smooth.
          </p>

          <div className="bg-zinc-900 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Need something specific? Ask.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Have questions about insurance, age, or deposits? We work with you.</p>
            </div>
          </div>

          <p className="text-xl">Because here, it's not just about the car.</p>

          <p className="text-xl font-semibold">
            It's about the feeling you get when you grab the keys and realize... 
            you're about to experience something unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}