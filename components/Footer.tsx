import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl font-bold mb-4">Dra. Gabriela Lins</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Cuidado especializado com toque e amor de mãe. Proporcionando saúde e bem-estar para o seu maior tesouro.
        </p>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dra. Gabriela Lins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
