import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana S.",
      text: "A Dra. Gabriela é um anjo! Meu bebê tinha muitas cólicas e chorava muito. Após as sessões, ele é outra criança. Gratidão eterna!",
      role: "Mãe do Pedro (3 meses)"
    },
    {
      name: "Fernanda L.",
      text: "Profissional incrível. O carinho com que ela trata os bebês é visível. Tratamos o torcicolo da minha filha com resultados rápidos.",
      role: "Mãe da Sofia (5 meses)"
    },
    {
      name: "Carlos E.",
      text: "Recomendo de olhos fechados. O ambiente é super acolhedor e a Gabi passa muita segurança para nós pais de primeira viagem.",
      role: "Pai do Lucas (2 meses)"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-4xl font-bold text-gray-900 mb-16">
          O que dizem os pais
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4 text-brand-green">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div>
                <strong className="block text-gray-900 font-serif text-lg">{t.name}</strong>
                <span className="text-sm text-brand-pink font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
