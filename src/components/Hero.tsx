
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={cn("min-h-[90vh] pt-20 pb-20 relative flex items-center", className)}>
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
          backgroundImage: "url('/ancient-map.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-ancient-900 leading-tight">
             Aprenda o antigo testamento em 30 dias, com apenas 25 minutos por dia
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic font-medium text-ancient-800">
            <em>- mesmo que nunca tenha lido a bíblia. 
                <br/>- mesmo que não tenha teologia
            </em>
          </p>
          
          <p className="text-lg md:text-xl">
            Tenha um companheiro bíblico completo para seu estudo!
          </p>
          
          <div className="bg-papyrus-300/90 p-6 md:p-10 rounded-lg shadow-lg ancient-border max-w-1xl mx-auto">
            <div className="aspect-video w-full rounded-md mb-6 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sSoKVha9VKA"
                title="Companheiro Bíblico - Antigo Testamento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <button 
              onClick={scrollToPricing} 
              className="cta-button w-full md:w-auto md:px-12"
            >
              QUERO APRENDER O ANTIGO TESTAMENTO
            </button>
            
            <p className="mt-4 text-sm md:text-base text-ancient-700">
              Acesso imediato à área de membros
            </p>
          </div>
          
          <div className="animate-scroll-emphasis pt-12 opacity-75">
            <ArrowDown className="mx-auto h-8 w-8 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
