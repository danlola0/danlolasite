import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-blue-400 mb-2">Daniel Yongo lola</div>
            <p className="text-gray-400 max-w-md">
              Développeur Fullstack passionné par la création d'applications web innovantes et performantes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Accueil', 'À Propos', 'Compétences', 'Expériences', 'Portfolio', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Réseaux Sociaux
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'LinkedIn', url: '#' },
                  { name: 'GitHub', url: '#' },
                  { name: 'Twitter', url: '#' },
                  { name: 'Dribbble', url: '#' }
                ].map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.url}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:contact@danielyongo.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    daniellolayongo@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+33600000000"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    +243 823263196
                  </a>
                </li>
                <li className="text-gray-400">
                  Rdc , Kinshasa 
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Daniel Yongo Lola. Tous droits réservés.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-gray-400 text-sm">Conçu avec</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span className="text-gray-400 text-sm">  Danlola</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;