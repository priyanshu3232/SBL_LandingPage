import React from 'react';
import { Gift, Target, Brain, Mic, Database, Zap, TrendingUp } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      icon: Target,
      title: "DFY ICP Agent + Competitor Miner",
      description: "We drop in an AI agent trained to define your exact ideal customer profile and pull lead lists directly from your competitors' audience.",
      highlight: "You literally start targeting the exact people already buying what you offer."
    },
    {
      icon: Brain,
      title: "1:1 Strategy Call With a Cialdini-Certified Persuasion Expert",
      description: "You and a persuasion-trained strategist sit together, review your offer, and craft a campaign that makes your ICP say 'damn, I need this.'",
      highlight: "Worth $1,500 alone - included free.",
      value: "$1,500"
    },
    {
      icon: Mic,
      title: "Custom-Tone Agent Training",
      description: "We'll train your LinkedIn agent in your voice, tone, and vibe — so it never sounds 'bot-like' or fake.",
      highlight: "Real convos. Real replies. Real bookings."
    },
    {
      icon: Database,
      title: "The SecondBrain Swipe Vault™",
      description: "20+ of our top-performing campaigns, replies, and cold DM flows — proven to generate 25+ meetings/month.",
      highlight: "Not public. Not shared. Only for paying clients."
    },
    {
      icon: Zap,
      title: "Agent Upgrade Token™",
      description: "After 2 weeks, you get one full rewrite of your entire messaging flow — done by a persuasion strategist who's worked with 7-figure coaches.",
      highlight: "Tweak. Refire. Win again."
    },
    {
      icon: TrendingUp,
      title: "LinkedIn HeatMap™ Review",
      description: "We run your profile through our attention map tool to show what attracts leads — and what silently repels them.",
      highlight: "You'll know exactly how to get inbound leads too."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Gift className="w-12 h-12 text-purple-600 mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Exclusive Bonuses
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get these valuable bonuses when you join today - limited time only
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">🎯 Bonus #{index + 1}</h3>
                  {bonus.value && (
                    <span className="text-sm text-green-600 font-semibold">{bonus.value} Value</span>
                  )}
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{bonus.title}</h4>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{bonus.description}</p>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-purple-800 font-medium italic">{bonus.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🔥 Limited Time: All Bonuses Included</h3>
          <p className="text-lg mb-6">These bonuses are worth over $5,000 individually - but you get them all when you join today.</p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl font-bold line-through opacity-75">$5,000</span>
            <span className="text-4xl font-bold">FREE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
