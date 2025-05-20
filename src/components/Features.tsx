
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Map, Star, Globe, Clock, Users } from 'lucide-react';
import bookmockup from './../img/bookmockup.png'
import screensmockup from './../img/screensmockup.png'

interface FeaturesProps {
  className?: string;
}

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  important?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, important }) => {
  return (
    <div className={cn(
      "bg-papyrus-100/80 backdrop-blur-sm p-5 rounded-lg shadow-md flex items-center gap-4 border",
      important 
        ? "border-accent" 
        : "border-papyrus-300"
    )}>
      <div className={cn(
        "h-10 w-40 flex items-center justify-center rounded-full",
        important 
          ? "bg-accent text-white" 
          : "bg-papyrus-300 text-ancient-800"
      )}>
        {icon}
      </div>
      <p className={cn(
        "font-medium text-lg",
        important && "font-bold"
      )}>
        {title}
      </p>
    </div>
  );
};

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    { title: "Explicações detalhadas de cada livro da Bíblia", icon: <BookOpen className="h-6 w-6" />, important: true },
    { title: "Contexto histórico e teológico dos textos sagrados", icon: <Map className="h-6 w-6" />, important: true },
    { title: "Análises sobre profecias e seus cumprimentos", icon: <Star className="h-6 w-6" />, important: true },
    { title: "Aplicações práticas para a vida cristã", icon: <Globe className="h-6 w-6" />, important: true },
    { title: "Detalhes e ensinamentos sobre personagens bíblicos", icon: <Users className="h-6 w-6" /> },
    { title: "Um material didático e de fácil compreensão", icon: <BookOpen className="h-6 w-6" />, important: true },
    { title: "Genealogias e muito mais", icon: <Clock className="h-6 w-6" />, important: true },
  ];

  return (
    <section id="content" className={cn("py-16", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-ancient-900">
          O ANTIGO TESTAMENTO COMO VOCÊ NUNCA VIU!
        </h2>

        <img 
            src={bookmockup} 
            alt="Companheiro Bíblico" 
            className="max-w-md mx-auto mt-4  rounded-md" 
          />
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              important={feature.important}
            />
          ))}
        </div>
        
        <div className="w-full flex flex-col items-center justify-center">
          <div className="ancient-border h-full flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-serif font-bold mb-3">Acesse Agora mesmo</h3>
            <h3 className="text-xl font-serif font-bold mb-3">Com qualquer dispositivo</h3>
            <h3 className="text-xl font-serif font-bold mb-3">Em qualquer lugar do mundo</h3>
         
        </div>
        </div>
        <img 
            src={screensmockup} 
            alt="screens" 
            className="max-w-md mx-auto mt-4 rounded-md" 
          />
        <div className="text-center mt-8">
             
     
          <p className="text-2xl font-serif font-bold mb-3">+ de 500 páginas de estudos</p>
          <p className="text-lg">acesse:</p>
  
        </div>
      </div>
    </section>
  );
};

export default Features;
