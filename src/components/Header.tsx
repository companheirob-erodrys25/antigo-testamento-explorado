
import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Book } from 'lucide-react';
import compbiblogo from  './../img/logo.png'

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="relative py-4 bg-papyrus-300/80 backdrop-blur-sm shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={compbiblogo} className="h-8 w-8 text-accent mr-2" />
          <span className="font-serif font-bold text-xl hidden sm:block text-ancient-900">Companheiro Bíblico</span>
        </div>
        
        <ScrollArea className="max-w-[600px] hidden md:block">
          <nav className="flex space-x-6">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Conteúdo', id: 'content' },
              { name: 'Professores', id: 'professors' },
              { name: 'Benefícios', id: 'benefits' },
              { name: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-ancient-800 hover:text-accent transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </ScrollArea>
        
        <button 
          onClick={() => scrollToSection('pricing')}
          className="cta-button px-4 py-2 text-sm"
        >
          Quero Aprender
        </button>
      </div>
    </header>
  );
};

export default Header;
