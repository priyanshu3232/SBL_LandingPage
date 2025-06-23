import React from 'react';
import { Shield, MessageSquare, RefreshCw, Brain, Clock } from 'lucide-react';

const Guarantees = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Speed Guarantee",
      subtitle: "Follow our 3-step setup. If you don't get:",
      points: [
        "Your campaign live by Day 3",
        "First real positive replies by Day 5", 
        "At least 5 qualified leads in 30 days"
      ],
      action: "We work 1-on-1 with you (worth $5K) until it happens. No extra charge. No excuses."
    },
    {
      icon: MessageSquare,
      title: "No-Replies? We Message For You",
      subtitle: "Still no reply by Day 5?",
      points: [
        "We'll send 100 DMs from our own premium profiles promoting your offer — free."
      ],
      action: "Zero additional cost to you."
    },
    {
      icon: RefreshCw,
      title: "Cold Campaign Rebuild Guarantee",
      subtitle: "Campaign fizzles?",
      points: [
        "We'll rebuild it from scratch — new list, new angle, new triggers",
        "All done by our team. No templates. No delays."
      ],
      action: "We relaunch it on our time."
    },
    {
      icon: Brain,
      title: "Full Creative Rewrite Guarantee", 
      subtitle: "Under 5% reply rate?",
      points: [
        "We rewrite everything — with a Cialdini-certified strategist.",
        "You pay $0."
      ],
      action: "Complete campaign overhaul at no cost."
    }
  ];

  return (
    <section id="guarantees" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-green-600 mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Guarantees
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're so confident in our system, we guarantee your success at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <guarantee.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{guarantee.title}</h3>
              </div>
              
              <p className="text-gray-700 font-medium mb-4">{guarantee.subtitle}</p>
              
              <ul className="space-y-2 mb-6">
                {guarantee.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">{guarantee.action}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">⚠️ Total Safety Net</h3>
          </div>
          <p className="text-lg">
            If you follow the steps and still don't get leads, booked calls, or replies…
            <br />
            <strong className="text-xl">We keep working with you until it clicks. Period.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;