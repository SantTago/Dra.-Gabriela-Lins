import React from 'react';
import { TREATMENTS } from '../constants.ts';

const Timeline: React.FC = () => {
  return (
    <section id="tratamentos" className="py-32 bg-brand-gray relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-3">Jornada do Cuidado</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acompanhando cada fase do seu bebê
          </h3>
          <p className="text-gray-600 text-lg">
            Um caminho suave e cheio de amor para resolver as tensões e garantir um desenvolvimento feliz.
          </p>
        </div>

        <div className="relative">
          {/* The Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-pink via-brand-green to-brand-pink md:-translate-x-1/2 rounded-full opacity-30 border-l-2 border-dashed border-gray-400"></div>

          <div className="space-y-16 md:space-y-32">
            {TREATMENTS.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 hover:border-brand-pink/20 transform hover:-translate-y-2 relative overflow-hidden">
                      {/* Decorative corner blob */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150 ${isEven ? 'bg-brand-pink' : 'bg-brand-green'}`}></div>
                      
                      <h4 className={`font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-pink transition-colors`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 ${isEven ? 'bg-brand-pink' : 'bg-brand-green'}`}>
                      <Icon className="w-6 h-6 md:w-9 md:h-9 text-white animate-pulse-slow" />
                    </div>
                  </div>

                  {/* Empty Spacer for Desktop balance */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* End of Path Decoration */}
          <div className="absolute -bottom-8 left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-text rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;