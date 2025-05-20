
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';
import bonus1 from './../img/BONUS1.png'
import bonus2 from './../img/BONUS2.png'
import bonus3 from './../img/BONUS3.png'

interface BonusesProps {
  className?: string;
}

const Bonuses: React.FC<BonusesProps> = ({ className }) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto ancient-border">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-ancient-900">
            Ao comprar o estudo hoje, você garante 03 presentes exclusivos:
          </h2>
          
          <div className="space-y-12">
            {/* Bonus 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative">
                  <img 
                    src={bonus1} 
                    alt="A Família que Deus Constrói" 
                    className="w-full h-auto rounded-md shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-accent text-white font-bold py-2 px-4 rounded-full">
                    Presente 1
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-bold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-accent" />
                  LIVRO - A FAMÍLIA QUE DEUS CONSTRÓI
                </h3>
                <p className="text-lg leading-relaxed">
                  O que faz uma família ser forte e abençoada? Como construir um lar segundo o propósito de Deus? 
                  Em "A Família Que Deus Constrói", escrito por Elias & Cintia Rodrys você encontrará um profundo 
                  ensinamento bíblico sobre o papel da família no plano de Deus, aprendendo princípios essenciais 
                  para fortalecer seu casamento, educar seus filhos na fé e viver em harmonia.
                </p>
              </div>
            </div>
            
            {/* Bonus 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative">
                  <img 
                    src={bonus2}
                    alt="Os Fundamentos que todo Cristão Precisa Saber" 
                    className="w-full h-auto rounded-md shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-accent text-white font-bold py-2 px-4 rounded-full">
                    Presente 2
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-bold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-accent" />
                  LIVRO - OS FUNDAMENTOS QUE TODO CRISTÃO PRECISA SABER
                </h3>
                <p className="text-lg leading-relaxed">
                  Você deseja fortalecer sua fé e compreender os pilares essenciais do cristianismo? 
                  Neste livro, exploramos os principais fundamentos da vida cristã, como: A obra de Cristo, 
                  A Trindade, A importância da igreja, fundamentos da adoração e as disciplinas espirituais, 
                  Identidade de gênero à luz da Bíblia, a volta de Cristo, entre outros.
                </p>
                <p className="text-lg mt-2 font-medium">
                  E mais! Cada capítulo conta com um vídeo exclusivo para aprofundar ainda mais o aprendizado!
                </p>
              </div>
            </div>
            
            {/* Bonus 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative">
                  <img 
                    src={bonus3} 
                    alt="Plano de Leitura Bíblica Anual" 
                    className="w-full h-auto rounded-md shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-accent text-white font-bold py-2 px-4 rounded-full">
                    Presente 3
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif font-bold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-accent" />
                  PLANO DE LEITURA BÍBLICA ANUAL
                </h3>
                <p className="text-lg leading-relaxed">
                  Você já tentou ler a Bíblia inteira, mas acabou desistindo no meio do caminho? 
                  Com o Plano de Leitura Bíblica Anual, você terá um guia organizado e prático 
                  para concluir essa jornada espiritual em apenas 365 dias!
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-serif font-bold mb-3">JÁ ENTENDI</h3>
            <p className="text-lg mb-6">
              Já entendi! <br />
              Quero melhorar meu conhecimento bíblico e ganhar todos esses presentes.
            </p>
            
            <a 
              href="https://pay.hotmart.com/R98259121Y" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button inline-block"
            >
              QUERO COMEÇAR AGORA!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
