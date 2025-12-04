import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_URL, LOGO_URL } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-3">Contato</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
            Agende sua Consulta
          </h3>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo Section */}
          <div className="mb-12 p-8 rounded-full bg-brand-gray/30 shadow-inner animate-float">
             <img 
               src={LOGO_URL} 
               alt="Dra. Gabriela Lins - Logo" 
               className="h-32 md:h-40 w-auto object-contain"
             />
          </div>

          <p className="text-gray-600 text-lg mb-10 max-w-lg">
            Entre em contato para agendar uma avaliação ou tirar suas dúvidas. Estou aqui para acolher sua família.
          </p>
          
          {/* Action Buttons */}
          <div className="w-full grid md:grid-cols-2 gap-6">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">WhatsApp</span>
                <span className="block font-bold text-xl">+55 (99) 98123-4344</span>
              </div>
            </a>

            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">Instagram</span>
                <span className="block font-bold text-xl">@gabiosteopatia</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;