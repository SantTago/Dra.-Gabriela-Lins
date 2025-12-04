import React from 'react';
import { TREATMENTS } from '../constants';

const Treatments: React.FC = () => {
  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-3">Áreas de Atuação</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como posso ajudar seu bebê?
          </h3>
          <p className="text-gray-600 text-lg">
            A osteopatia pediátrica é uma abordagem suave e segura para tratar diversos desconfortos comuns na infância.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-pink/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brand-pink/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-pink transition-colors">
                  <Icon className="w-7 h-7 text-brand-pink group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-pink transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;