import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SecondBrain</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#guarantees" className="text-gray-600 hover:text-blue-600 transition-colors">
              Guarantees
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#how-it-works" className="block py-2 text-gray-600">How It Works</a>
            <a href="#features" className="block py-2 text-gray-600">Features</a>
            <a href="#pricing" className="block py-2 text-gray-600">Pricing</a>
            <a href="#guarantees" className="block py-2 text-gray-600">Guarantees</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;