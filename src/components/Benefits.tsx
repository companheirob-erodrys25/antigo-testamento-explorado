
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Star, Users } from 'lucide-react';

interface BenefitsProps {
  className?: string;
}

const Benefits: React.FC<BenefitsProps> = ({ className }) => {
  return (
    <section id="benefits" className={cn("py-16 bg-ancient-700/10", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-ancient-900">
          VEJA POR QUE VOCÊ DEVE COMEÇAR AGORA
        </h2>
        
        <div className="max-w-4xl mx-auto ancient-border">
          <p className="text-lg leading-relaxed mb-8">
            O Companheiro Bíblico é um material completo de estudo que foi criado para ajudar você a entender a Bíblia de forma clara, profunda e aplicada à sua vida cristã. Ele existe porque muitas pessoas enfrentam dificuldades para interpretar as Escrituras, compreender o contexto histórico e extrair ensinamentos práticos para o dia a dia. Diferente de outros materiais, este estudo completo foi elaborado de forma didática, acessível e teologicamente fundamentada, permitindo que qualquer pessoa, independentemente do seu nível de conhecimento, possa crescer espiritualmente através do estudo bíblico.
          </p>
          
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">
            A partir deste material você alcançará três principais resultados:
          </h3>
          
          <div className="space-y-8 mb-10">
            <div className="bg-papyrus-100/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-papyrus-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-serif font-bold">CONHECIMENTO BÍBLICO PROFUNDO</h4>
              </div>
              <p className="text-lg leading-relaxed ml-16">
                Se você já tentou ler a Bíblia e sentiu dificuldade para entender o contexto, as profecias e as aplicações, este material vai te ajudar. Com explicações detalhadas e de fácil compreensão, você finalmente poderá interpretar as Escrituras com segurança.
              </p>
            </div>
            
            <div className="bg-papyrus-100/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-papyrus-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white">
                  <Star className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-serif font-bold">FORTALECIMENTO DA FÉ</h4>
              </div>
              <p className="text-lg leading-relaxed ml-16">
                Conhecer a Bíblia profundamente fortalece sua fé e te dá mais convicção no seu relacionamento com Deus. Quanto mais você estuda, mais preparado você estará para enfrentar desafios espirituais e viver segundo os princípios bíblicos.
              </p>
            </div>
            
            <div className="bg-papyrus-100/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-papyrus-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-serif font-bold">APRENDIZADO PARA ENSINAR E COMPARTILHAR A PALAVRA</h4>
              </div>
              <p className="text-lg leading-relaxed ml-16">
                Se você deseja ensinar na igreja, liderar um grupo ou discipular outras pessoas, este material será um recurso essencial. Ele vai te equipar com conhecimento sólido e embasamento teológico para ensinar com autoridade e confiança.
              </p>
            </div>
          </div>
          
          <div className="border-t-2 border-papyrus-400 pt-8">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">
              O QUE VOCÊ IRÁ APRENDER COM O COMPANHEIRO BÍBLICO?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                {[
                  "Ordem dos Livros Bíblicos",
                  "Número de Capitulo e versículos por livro",
                  "Períodos Históricos dos Livros",
                  "Autores dos Livros Bíblicos",
                  "Principais propósitos dos Livros",
                  "Principais acontecimentos dos livros",
                  "Resumo explicativo de cada livro",
                  "Narrativa de cada livro"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">►</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <ul className="space-y-3">
                {[
                  "Capítulos divididos por assunto",
                  "Contexto de cada livro bíblico",
                  "Estudos dos principais assuntos de cada livro",
                  "Genealogias"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">►</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">
              Além de:
            </h4>
            
            <ul className="space-y-3">
              {[
                "Panorama completo do antigo testamento",
                "Como a Bíblia foi Escrita",
                "Principais versões bíblicas e suas Diferenças",
                "As divisões da bíblia",
                "E muito mais..."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">►</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
