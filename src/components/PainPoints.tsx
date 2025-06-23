import React from 'react';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    "Struggle to book consistent, high-quality calls every week",
    "Tired of chasing, cold-pitching, or spamming just to get one reply",
    "Know their offer works but it never reaches the right people",
    "Tried tools like Dripify, Waalaxy, Dux-Soup – nothing actually worked",
    "Don't want to sound like a bot but don't have time to write every message",
    "Are stuck doing everything alone to keep the pipeline from drying up"
  ];

  const transformations = [
    "Wake up to booked calls with people who already want what you offer",
    "Add $10k-$25k in real pipeline every single month without cold pitching",
    "Launch your campaign in 24 hours, start seeing replies by Day 5",
    "Have our team set up everything for you, while you just focus on showing up to close",
    "Use plug-and-play message flows that sound like you and convert better than you",
    "Be the one people DM to work with – not the one begging for attention"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            For LinkedIn Consultants, Personal Brand Strategists, Creators & Agency Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop struggling with inconsistent results. Here's what changes when you work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Reality */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl border-2 border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200 rounded-full -ml-12 -mb-12 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-800 mb-1">Your Current Reality</h3>
                  <p className="text-red-600 text-sm">The struggle is real...</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-red-800 font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Reality */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full -ml-12 -mb-12 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-1">Your New Reality</h3>
                  <p className="text-green-600 text-sm">This is what success looks like...</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {transformations.map((transformation, index) => (
                  <div key={index} className="flex items-start bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-green-800 font-medium leading-relaxed">{transformation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center my-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-transform">
            This Transformation Happens in 30 Days →
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;