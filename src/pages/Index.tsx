
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Features from '@/components/Features';
import Professors from '@/components/Professors';
import TargetAudience from '@/components/TargetAudience';
import Benefits from '@/components/Benefits';
import Bonuses from '@/components/Bonuses';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBanner from '@/components/StickyBanner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Features />
        <Professors />
        <TargetAudience />
        <Benefits />
        <Bonuses />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
      <StickyBanner />
    </div>
  );
};

export default Index;
