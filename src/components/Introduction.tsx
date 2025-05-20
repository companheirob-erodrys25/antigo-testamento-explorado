
import React from 'react';
import { cn } from '@/lib/utils';

interface IntroductionProps {
  className?: string;
}

const Introduction: React.FC<IntroductionProps> = ({ className }) => {
  return (
    <section className={cn("py-16 bg-papyrus-100", className)}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto ancient-border">
          <p className="text-lg leading-relaxed mb-6">
            O Companheiro Bíblico foi criado para aqueles que desejam mais do que apenas ler a Bíblia – querem 
            compreendê-la profundamente. Muitas pessoas enfrentam dificuldades para interpretar as Escrituras, 
            entender o contexto histórico e aplicar os ensinamentos bíblicos em sua vida cristã. Este estudo 
            completo surge como um guia essencial, tornando o estudo bíblico acessível, didático e enriquecedor.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Com uma abordagem clara e teologicamente fundamentada, este material oferece uma oportunidade única 
            para quem deseja crescer espiritualmente, aprofundar-se na Palavra de Deus e fortalecer sua fé. 
            Seja você um pastor, líder, professor de escola bíblica ou um cristão que busca conhecimento mais 
            sólido, o Companheiro Bíblico será seu aliado na jornada de aprendizado.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Essa é sua chance de ter um conteúdo completo e organizado, pronto para te ajudar a entender cada 
            livro da Bíblia, suas mensagens, contextos históricos e aplicações práticas.
          </p>
          
          <p className="text-lg font-bold italic">
            Não perca a oportunidade de transformar seu estudo bíblico e levar sua fé a um novo nível!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
