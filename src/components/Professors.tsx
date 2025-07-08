
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import familiarodrys from './../img/familiarodrys.webp'

interface ProfessorsProps {
  className?: string;
}

const Professors: React.FC<ProfessorsProps> = ({ className }) => {
  return (
    <section id="professors" className={cn("py-16 bg-ancient-700/10", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-ancient-900">
          QUEM SERÃO SEUS PROFESSORES?
        </h2>

        <div className="max-w-4xl mx-auto ancient-border">
          <div className="flex flex-col md:flex-col gap-8 items-center md:items-start">
            <div className="flex flex-col gap-4 items-center">
                  <img
                    src={familiarodrys}
                    alt="Pastor Elias e Cintia Rodrys"
                    id="pastores"
                    className="w-full h-auto object-cover rounded"
                  />
            </div>

              <span className="text-base md:text-lg leading-relaxed">
                Somos Elias Rodrys e Cintia Rodrys, casados desde dezembro de 2019 e pais do pequeno Bernardo.
                Temos a honra de servir como pastores auxiliares na CEPAC CHURCH, onde dedicamos nossas vidas ao ministério pastoral e à liderança do corpo de obreiros da igreja.
                Atualmente cursamos  bacharel em Teologia pela Universidade Metodista de São Paulo, com o objetivo de aprofundar nosso conhecimento das Escrituras e fortalecer ainda mais nosso serviço a Deus e ao próximo.
                <br></br>
                <br></br>
                Cintia é formada em Administração de Empresas com ênfase em desenvolvimento de projetos e CEO da Rodrys acessórios, e Elias possui formação em Gestão de Recursos Humanos, além de uma pós-graduação em Gestão Estratégica de Negócios pelo Senac e um MBA em Gestão Estratégica de Vendas pela UniESPG.
                <br></br>
                <br></br>
                Somos cristãos desde a infância e já servimos em diversas áreas ao longo dos anos. Atuamos como líderes de jovens, discipulado, ministério de louvor e pregações, ministrando a Palavra de Deus em várias igrejas e cidades. Essas experiências moldaram quem somos e nos deram uma visão clara de nosso chamado: compartilhar o Evangelho de forma acessível e transformadora.
                <br></br>
                <br></br>
                Foi dessa paixão pela Palavra de Deus que nasceu o Companheiro Bíblico, um projeto dedicado a explicar as Escrituras de maneira prática, profunda e aplicável à vida cristã. Nosso desejo é que, por meio deste material, mais pessoas possam crescer no conhecimento da Palavra e experimentar a riqueza e a profundidade do relacionamento com Deus.
                Que Deus abençoe sua jornada e que, juntos, possamos explorar as maravilhas das Escrituras!
                <br></br>
                <br></br>
                Siga-nos
                <br></br>
                @EliasRodrys & @CintiaRodrys
              </span>
            
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://pay.hotmart.com/M100606980W?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            SIM! QUERO APRENDER O ANTIGO TESTAMENTO AGORA MESMO!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Professors;
