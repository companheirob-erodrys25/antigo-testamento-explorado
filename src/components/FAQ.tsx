
import React from 'react';
import { cn } from '@/lib/utils';

interface FAQProps {
  className?: string;
}

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-papyrus-100/90 backdrop-blur-sm rounded-lg border border-papyrus-300 overflow-hidden mb-4">
      <h3 className="bg-papyrus-300 py-3 px-5 font-bold text-ancient-900">
        {question}
      </h3>
      <div className="p-5">
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ className }) => {
  return (
    <section id="faq" className={cn("py-16", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-ancient-900">
          PERGUNTAS FREQUENTES
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <FAQItem
            question="COMO RECEBEREI O MATERIAL APÓS A COMPRA?"
            answer={
              <p className="text-lg leading-relaxed">
                Assim que a compra for confirmada, você receberá o Companheiro Bíblico de forma 100% digital, 
                podendo acessá-lo imediatamente pelo seu celular, tablet ou computador. O material estará disponível 
                para download, permitindo que você o estude onde e quando quiser.
              </p>
            }
          />
          
          <FAQItem
            question="O COMPANHEIRO BÍBLICO SUBSTITUI A LEITURA DA BÍBLIA?"
            answer={
              <p className="text-lg leading-relaxed">
                Não! O Companheiro Bíblico é um guia de estudo que aprofundará sua compreensão das Escrituras, 
                mas ele não substitui a leitura da Bíblia. Pelo contrário, ele ajudará você a interpretar melhor 
                cada livro, entender o contexto histórico e aplicar os ensinamentos à sua vida cristã.
              </p>
            }
          />
          
          <FAQItem
            question="POSSO IMPRIMIR O MATERIAL?"
            answer={
              <p className="text-lg leading-relaxed">
                Sim! O material pode ser impresso para uso pessoal. Se você deseja utilizá-lo em grupos de estudo, 
                na sua igreja ou em outras atividades, entre em contato conosco para conhecer nossos planos especiais 
                para igrejas e ministérios.
              </p>
            }
          />
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://pay.hotmart.com/M100606980W?checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button inline-block"
          >
            CLIQUE AQUI E COMPRE O COMPANHEIRO BÍBLICO
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
