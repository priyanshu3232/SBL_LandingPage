import React from 'react';
import { CheckCircle, Users, MessageSquare, Bot, Target, BarChart, Shield, Database, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Done-for-you lead sourcing",
      description: "We get you leads who can actually pay — not random followers or broke freelancers.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Fully written outreach messages in your tone",
      description: "Built using psychological triggers that make people say 'I'm in' — without even feeling sold to.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Bot,
      title: "Your own AI sales assistant, trained on your voice",
      description: "We build and plug in the exact agent that speaks like you, replies for you, and pushes leads to book calls.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Target,
      title: "Plug-and-play DM flows & trigger templates",
      description: "Copy. Paste. Run. These flows are already used by top consultants to get 15-30 meetings/month.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BarChart,
      title: "Manual review + 1:1 optimization support",
      description: "Real humans (trained in persuasion) sit with you and fix what's not working — even if that means rewriting everything from scratch.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Database,
      title: "ICP Builder Agent",
      description: "If you're unclear about who to target, this tool finds it for you — based on what you've sold before and who said yes.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Shield,
      title: "Full automation setup (zero tech skills needed)",
      description: "We connect it all for you — LinkedIn, lead lists, triggers, inboxes — while you chill.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: BarChart,
      title: "LinkedIn HeatMap Review",
      description: "We analyze your profile & posts to show what attracts your buyers — and what's killing your leads.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What You Get
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            A system that does 80% of the work — so you just close.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Plus: Swipe Vault Access (Private)</h3>
          <p className="text-lg mb-6">20+ winning DM scripts, cold message angles, reply flows, and sales rebuttals that actually worked.</p>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Your calendar filled with highly qualified leads
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;