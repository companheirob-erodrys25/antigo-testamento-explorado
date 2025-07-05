
import React from 'react';
import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

interface TargetAudienceProps {
  className?: string;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ className }) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto ancient-border">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-ancient-900">
            PARA QUEM É ESSE ESTUDO?
          </h2>
          
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-4">
              O <strong>Companheiro Bíblico</strong> foi criado para quem realmente deseja crescer espiritualmente e se aprofundar no conhecimento das Escrituras. Se você apenas lê a Bíblia ocasionalmente e não tem interesse em compreendê-la de forma profunda, este material pode não ser para você.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Este estudo completo é para aqueles que buscam mais do que leituras superficiais – é para pastores, líderes, professores de Escola Bíblica, pregadores e todos os cristãos que querem se aprofundar na Palavra de Deus com clareza e entendimento. Se você sente que, muitas vezes, a Bíblia parece difícil de entender, ou se deseja ensinar outras pessoas com mais conhecimento e embasamento, então este material foi feito para você!
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Se você valoriza o estudo sério das Escrituras, deseja crescer em conhecimento teológico e quer compreender melhor cada livro da Bíblia, então o Companheiro Bíblico será o guia que faltava na sua caminhada cristã.
            </p>
            
            <p className="text-lg leading-relaxed font-bold">
              Apenas aqueles que realmente desejam conhecer a Bíblia profundamente terão resultados com este material. Se esse é o seu desejo, esta oportunidade é para você!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <div className="bg-papyrus-300/80 rounded-lg p-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-lg font-medium">Pastores & Lideres de Ministérios</span>
            </div>
            
            <div className="bg-papyrus-300/80 rounded-lg p-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-lg font-medium">Pregadores e Professores de EBD</span>
            </div>
            
            <div className="bg-papyrus-300/80 rounded-lg p-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-lg font-medium">Todo Cristão dedicado na palavra de Deus</span>
            </div>
          </div>
          
          <div className="mt-10 border-t-2 border-papyrus-400 pt-8">
            <h3 className="text-2xl font-serif font-bold mb-4 text-center">Não acredita?</h3>
            <p className="text-lg text-center mb-4">
              Veja com seus próprios olhos…
            </p>
            <p className="text-lg text-center mb-6">
              Conheça o Material por dentro e veja a qualidade dos ensinamentos.
            </p>
            <p className="text-xl text-center font-serif font-bold">
              São mais de 500 paginas de conhecimento de todos os livros do Antigo Testamento
            </p>
            
            <div className="mt-8 aspect-video w-full bg-black/10 flex items-center justify-center rounded-md">
              <div className="w-full text-center h-100">
                <iframe width="100%" height="0px" src="https://www.youtube.com/embed/1X8qMKwChno" title="A HISTÓRIA DE ADÃO E EVA: O PRIMEIRO PECADO (Rodrigo Silva) | PrimoCast 428" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
