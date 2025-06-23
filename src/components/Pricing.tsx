import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "DIY — Plug & Play",
      price: 97,
      popular: false,
      icon: Zap,
      description: "For solo consultants who want to run high-converting LinkedIn campaigns using proven AI agents without heavy effort.",
      features: [
        "Access to SecondBrain DIY Workspace",
        "ICP Form → Auto Agent Builder", 
        "Plug & Play Campaign Templates (5 presets)",
        "ICP → Message Flow Generator (Auto-trained on your niche)",
        "Basic Comment-Trigger Warmup Engine",
        "Access to Swipe Vault (Lite)"
      ],
      bonuses: [
        "DFY ICP Agent (Generates ideal profiles + lead criteria)",
        "Swipe Vault Lite: 5 highest-converting flows from our clients",
        "Launch Guide: First 5 Days Setup"
      ],
      guarantees: [
        "Campaign goes live in 3 days or we do the setup for you once",
        "No qualified reply in 7 days? We upgrade you to DWY for free for 1 campaign"
      ]
    },
    {
      name: "DWY — Setup & Strategy Included",
      price: 297,
      popular: true,
      icon: Star,
      description: "For consultants who want personalized guidance, strategic ICP help, and a persuasive campaign live without lifting too much.",
      features: [
        "Everything in DIY +",
        "Custom-Tuned SBL Agent Setup",
        "DFY ICP & Competitor Audience Strategy",
        "1 High-Intent Lead List/month (done via Sales Navigator triggers)",
        "2 Review Calls (Launch + Optimization)",
        "Persuasion Tone Training (we adjust agent to sound like you)",
        "Warmup Comment Strategy + Integration"
      ],
      bonuses: [
        "1:1 Strategy Call with Cialdini-Certified Persuasion Expert",
        "Full Swipe Vault Access (20+ flows)",
        "Agent Upgrade Token™ — Full rewrite in 14 days",
        "LinkedIn HeatMap Review"
      ],
      guarantees: [
        "5 Qualified Leads in 30 Days or we work 1-on-1 till you get them",
        "<5% response rate? Full rewrite by expert for free",
        "No replies by Day 5? We send 100 DMs on your behalf"
      ]
    },
    {
      name: "DFY — Autopilot Campaigns",
      price: 997,
      popular: false,
      icon: Crown,
      description: "We become your revenue engine. You approve, we execute. You get qualified meetings on calendar every week.",
      features: [
        "Everything in DWY +",
        "Weekly Warm ICP List Delivery",
        "Full Campaign Strategy Design & Testing",
        "Multi-Threaded Agent System (for different offers/niches)",
        "Weekly Optimization Based on Outcomes",
        "Dedicated Success Manager",
        "End-to-End CRM & Calendar Integration"
      ],
      bonuses: [
        "Priority DM Warmup via Influencer Triggers",
        "No-Show Nurture Campaigns (DFY)",
        "Case Study Spotlight Opportunity",
        "Slack Access to Ayush for Strategic Scaling"
      ],
      guarantees: [
        "No $10K pipeline added in 30 days? We work for free until you do",
        "If your campaign goes cold? We rebuild it from scratch — free",
        "AI feels robotic? You get human-written fallback campaign free"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pick the level of support that matches your needs. All plans include our core guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${tier.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${tier.popular ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started Now
                </button>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ What's Included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🎁 Bonuses:</h4>
                    <ul className="space-y-2">
                      {tier.bonuses.map((bonus, bonusIndex) => (
                        <li key={bonusIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🛡️ Guarantees:</h4>
                    <ul className="space-y-2">
                      {tier.guarantees.map((guarantee, guaranteeIndex) => (
                        <li key={guaranteeIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{guarantee}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;