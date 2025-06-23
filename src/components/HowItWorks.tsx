import React from 'react';
import { Users, Search, MessageSquare, Rocket, Calendar, Settings, BarChart, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Define Your ICP",
      description: "We work with you to identify your perfect customer profile. If you're unsure, our ICP Builder Agent analyzes your past sales and market data to create the ideal target persona.",
      details: "Complete ICP questionnaire → AI analysis of your successful clients → Competitor audience research → Final ICP documentation",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Search,
      title: "Lead Sourcing & List Building",
      description: "Our team uses advanced Sales Navigator techniques and proprietary tools to build high-quality lead lists of people who can actually afford your services.",
      details: "Sales Navigator filtering → Lead qualification scoring → Contact information verification → CRM integration setup",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Campaign Strategy & Messaging",
      description: "We craft personalized message sequences using psychological triggers and persuasion principles. Every message is written in your unique voice and tone.",
      details: "Voice analysis → Message flow creation → A/B testing setup → Psychological trigger integration → Personalization variables",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Settings,
      title: "AI Agent Training",
      description: "We build and train your custom AI sales assistant on your communication style, offer details, and objection handling techniques.",
      details: "Voice pattern analysis → Conversation flow training → Objection handling scripts → Response timing optimization → Quality assurance testing",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Rocket,
      title: "Campaign Launch & Automation",
      description: "Everything goes live with full automation setup. We handle all technical integrations while you focus on your business.",
      details: "LinkedIn automation setup → CRM integration → Calendar booking system → Follow-up sequences → Monitoring dashboard activation",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "We track every metric that matters - open rates, reply rates, booking rates, and conversion rates. Real-time optimization based on data.",
      details: "Daily performance reports → A/B testing analysis → Message optimization → Lead quality scoring → ROI tracking",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Zap,
      title: "Optimization & Scaling",
      description: "Based on performance data, we continuously optimize your campaigns. What's working gets scaled, what's not gets fixed or replaced.",
      details: "Performance analysis → Message refinement → Audience expansion → Campaign scaling → Success replication across segments",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Calendar,
      title: "Results & Growth",
      description: "Watch your calendar fill with qualified prospects who are pre-sold on your offer. You just show up to close the deals.",
      details: "Qualified leads booking calls → Pre-call briefings → Closing support → Success tracking → Monthly growth reviews",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 8-step framework that transforms your LinkedIn outreach from random messages to a predictable lead generation machine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0"></div>
              )}
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 h-full">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Process:</p>
                  <p className="text-xs text-gray-600 mt-1">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">⚡ Timeline: From Zero to Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Week 1</h4>
              <p className="text-sm">Setup complete, campaign live, first messages sent</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Week 2</h4>
              <p className="text-sm">First replies coming in, optimization begins</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Week 3-4</h4>
              <p className="text-sm">Qualified calls booked, pipeline building</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;