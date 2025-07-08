
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import './stylescustom.css';

interface PricingProps {
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className }) => {
  return (
    <section id="pricing" className={cn("py-16 bg-ancient-700/10", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-ancient-900">
          VEJA TUDO O QUE VOCÊ IRÁ RECEBER, E APROVEITE AS CONDIÇÕES ESPECIAIS!
        </h2>
        
        <div className="max-w-4xl mx-auto" id="pricing-CompBiblic">
          <div>
            {/* Product Cards */}
            <div className="space-y-6 mt-10">
              {/* Main Product */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border-2 border-accent overflow-hidden">
                <div className="bg-accent text-white py-3 px-6 text-center">
                  <h3 className="text-xl font-serif font-bold">Companheiro Bíblico</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg mb-4">Estudo completo com mais de 500 páginas sobre o antigo testamento.</p>
                  <p className="text-right line-through text-gray-500 text-lg">R$ 497,90</p>
                </div>
              </div>
              
              {/* Bonus 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-papyrus-300 overflow-hidden">
                <div className="bg-papyrus-300 py-2 px-6 text-center">
                  <h3 className="text-lg font-semibold">E-book - A família que Deus constrói</h3>
                </div>
                <div className="p-4">
                  <p className="text-base mb-2">Ensinamento bíblico sobre o papel da família no plano de Deus.</p>
                  <p className="text-right line-through text-gray-500">R$ 27,90</p>
                </div>
              </div>
              
              {/* Bonus 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-papyrus-300 overflow-hidden">
                <div className="bg-papyrus-300 py-2 px-6 text-center">
                  <h3 className="text-lg font-semibold">E-book - Fundamentos que todo cristão precisa saber</h3>
                </div>
                <div className="p-4">
                  <p className="text-base mb-2">Compreenda os pilares essenciais do cristianismo.</p>
                  <p className="text-right line-through text-gray-500">R$ 34,90</p>
                </div>
              </div>
              
              {/* Bonus 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-papyrus-300 overflow-hidden">
                <div className="bg-papyrus-300 py-2 px-6 text-center">
                  <h3 className="text-lg font-semibold">Plano de leitura Bíblica Anual</h3>
                </div>
                <div className="p-4">
                  <p className="text-base mb-2">Um guia prático para concluir a leitura bíblica em apenas 365 dias!</p>
                  <p className="text-right line-through text-gray-500">R$ 17,90</p>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="flex flex-col">
              <div className="bg-papyrus-100 rounded-t-lg p-6 border-t-2 border-l-2 border-r-2 border-accent mt-5">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">VALOR TOTAL DO QUE VOCÊ IRÁ RECEBER</h3>
                  <p className="text-3xl font-serif font-bold text-ancient-900">R$ 578,60</p>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-lg mb-1">Mas você não terá que pagar por tudo isso.</p>
                  <p className="text-lg font-bold">Na oferta especial de HOJE, seu investimento será</p>
                  <p className="text-lg">de <span className="line-through text-gray-500">R$ 578,60</span> por apenas</p>
                  <p className="text-5xl font-serif font-extrabold text-accent my-3">R$ 127,00</p>
                  <p className="text-lg font-bold">OU 10 x de R$ 15,26</p>
                </div>
              </div>
              
              
              
              <div className="bg-white/80 backdrop-blur-sm mt-6 p-6 rounded-lg border border-papyrus-300">
                <h3 className="text-xl font-serif font-bold mb-4 text-center">UÉ, MAS POR QUE ESTÁ ASSIM TÃO BARATO?</h3>
                <p className="mb-4">A resposta é simples, por 3 motivos:</p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                    <div>
                      <p className="font-bold">Queremos tornar o estudo da Bíblia acessível a todos.</p>
                      <p>A Palavra de Deus deve ser estudada por todos que desejam crescer espiritualmente. Nosso objetivo é facilitar esse acesso, para que ninguém deixe de aprender por questões financeiras.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                    <div>
                      <p className="font-bold">Para que você tenha um material completo sem precisar investir muito.</p>
                      <p>Entendemos que muitas pessoas querem se aprofundar no conhecimento bíblico, mas nem sempre encontram um material completo e acessível. Por isso, fizemos questão de oferecer um conteúdo de alto nível por um preço justo.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                    <div>
                      <p className="font-bold">Porque nossa missão é alcançar e transformar vidas.</p>
                      <p>Mais do que vender um material, nosso propósito é impactar o maior número de pessoas possível. Queremos que mais cristãos tenham acesso ao ensino bíblico sólido, cresçam espiritualmente e possam compartilhar a Palavra com clareza e confiança.</p>
                    </div>
                  </div>
                </div>
              </div>
              
         
            </div>
        
          </div>
          <a 
                href="https://pay.hotmart.com/M100606980W?checkoutMode=10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button inline-block mt-10"
              >
                QUERO APRENDER A BÍBLIA AGORA MESMO
              </a>
        </div>
       
      </div>
    </section>
  );
};

export default Pricing;
