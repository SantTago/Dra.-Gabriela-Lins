import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#" className="flex items-center focus:outline-none group">
          <img 
            src={LOGO_URL} 
            alt="Dra. Gabriela Lins - Osteopatia Pediátrica" 
            className={`h-auto w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'max-h-12' : 'max-h-16 md:max-h-20'
            }`}
          />
        </a>

        {/* CTA Button */}
        <button 
          onClick={scrollToContact}
          className="bg-brand-pink hover:bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Agende Agora
        </button>
      </div>
    </header>
  );
};

export default Header;