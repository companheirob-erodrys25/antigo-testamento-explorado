
import React, { useState, useEffect } from 'react';

const StickyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show banner after scrolling down 800px
      setIsVisible(scrollPosition > 800);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-accent shadow-lg py-3 px-4 z-50 transition-transform transform animate-fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-white font-bold mb-2 sm:mb-0">
            QUERO APRENDER O ANTIGO TESTAMENTO
          </p>
        </div>
        <div className="flex-shrink-0">
          <a 
            href="https://pay.hotmart.com/M100606980W?checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button inline-block px-5 py-2"
          >
            Acesso imediato à área de membros
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
