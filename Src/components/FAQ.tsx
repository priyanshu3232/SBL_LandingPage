import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, AlertCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Your campaign goes live within 24 hours of setup completion. You'll see your first positive replies by Day 5, and qualified leads start booking calls within the first week. Our average client books 3-5 calls in their first 14 days."
    },
    {
      question: "What if I don't know my ideal customer profile?",
      answer: "No problem! Our ICP Builder Agent analyzes your past sales, current offers, and market data to define your perfect customer profile. Plus, you get a 1:1 strategy call with our Cialdini-certified expert to refine it further."
    },
    {
      question: "Will the messages sound robotic or spammy?",
      answer: "Absolutely not. We train your AI agent specifically on your voice, tone, and communication style. Plus, every message is reviewed by our persuasion experts before going live. Your prospects will think you're personally messaging them."
    },
    {
      question: "What if LinkedIn shuts down my account?",
      answer: "We use LinkedIn-compliant methods and stay well within daily limits. Our system has been tested across 500+ clients with zero account suspensions. We also provide LinkedIn safety training as part of your onboarding."
    },
    {
      question: "How many leads will I get per month?",
      answer: "Our average client gets 25-40 qualified leads per month, with 15-25 of those booking calls. Results vary based on your niche, offer, and how well you follow our system. We guarantee at least 5 qualified leads in your first 30 days."
    },
    {
      question: "What if the system doesn't work for me?",
      answer: "We have multiple safety nets in place. If you don't get results following our system, we'll work 1-on-1 with you, rewrite your entire campaign, or even send messages from our own profiles. We don't succeed unless you do."
    },
    {
      question: "Do I need any technical skills?",
      answer: "None whatsoever. We handle all the technical setup, integrations, and automation. You just approve the campaign and show up to close the calls. It's designed for business owners, not tech experts."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans are month-to-month with no long-term contracts. However, we're confident you'll want to stay once you see the results. Most clients actually upgrade to higher tiers within 60 days."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our LinkedIn outreach system
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scarcity CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">⚠️ Limited Spots Available</h3>
          </div>
          <p className="text-lg mb-2">
            We only take on <strong>50 new clients per month</strong> to ensure quality results.
          </p>
          <p className="text-sm mb-6 opacity-90">
            This month: <span className="font-bold">7 spots remaining</span>
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-semibold">Doors close in 3 days</span>
          </div>
          
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Claim Your Spot Now - Before It's Gone
          </button>
          
          <p className="text-sm mt-4 opacity-90">
            Next enrollment opens December 1st (if spots are available)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;