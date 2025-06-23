import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Guarantees from './components/Guarantees';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Guarantees />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
