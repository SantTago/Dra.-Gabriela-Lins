import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Use hero image plus first 5 gallery images for the carousel
  const carouselImages = [IMAGES.hero, ...IMAGES.gallery.slice(0, 5)];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Carousel Area */}
      <div className="absolute inset-0 z-0 bg-gray-100">
        {carouselImages.map((imgSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent/10 z-10 md:w-3/4"></div>
            <img 
              src={imgSrc} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            CUIDADO ESPECIALIZADO
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            O toque que seu <span className="text-brand-pink">bebê</span> precisa para crescer feliz.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-light leading-relaxed border-l-4 border-brand-green pl-4 bg-white/50 backdrop-blur-sm p-4 rounded-r-lg">
            "Com toque e amor de mãe, ajudo o seu bebê a viver livre de tensões!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="group bg-brand-pink hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Agende sua Consulta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToAbout}
              className="bg-white/90 hover:bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center backdrop-blur-sm shadow-sm"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;