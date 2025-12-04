import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  const aboutImage = IMAGES.gallery[0]; 

  return (
    <section id="sobre" className="py-32 bg-brand-gray/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] transform hover:scale-[1.01] transition-transform duration-700">
              <img 
                src={aboutImage} 
                alt="Dra. Gabriela Lins" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block border border-gray-100 animate-float">
              <p className="font-serif italic text-gray-700 text-lg">"Cada bebê é um universo único que merece ser compreendido com amor."</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4">Sobre Mim</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Dra. Gabriela Lins
            </h3>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Olá! Sou Fisioterapeuta e especializada em <strong className="font-semibold text-brand-green">Osteopatia Pediátrica</strong>. Minha jornada profissional sempre foi guiada pelo desejo de proporcionar bem-estar desde os primeiros dias de vida.
              </p>
              <p>
                Acredito profundamente que o tratamento vai além da técnica; ele exige conexão. Minha filosofia de trabalho une o rigor científico da fisioterapia com o que chamo de <strong className="font-semibold text-brand-pink">"toque e amor de mãe"</strong>.
              </p>
              <p>
                Entendo as angústias dos pais quando o bebê chora por desconforto ou apresenta dificuldades no desenvolvimento. Meu objetivo é acolher sua família e devolver a tranquilidade ao seu lar através de mãos gentis e experientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-green hover:shadow-md transition-shadow">
                <span className="block font-bold text-3xl text-brand-green mb-1">+500</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Bebês atendidos</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-pink hover:shadow-md transition-shadow">
                <span className="block font-bold text-3xl text-brand-pink mb-1">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Dedicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;