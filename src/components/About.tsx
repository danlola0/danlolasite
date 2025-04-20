import React from 'react';
import aboutImage from '../images/IMG-20220911-WA0052.jpg'; // Corrected import path and filename

const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">À Propos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
              <img 
                src={aboutImage} // Using the imported image
                alt="Daniel Yongo" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-20"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Développeur passionné & formateur dédié</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bienvenue sur mon portfolio! Je suis Daniel Yongo, un développeur Fullstack avec plus de 5 ans d'expérience dans la création d'applications web innovantes et performantes.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mon parcours professionnel m'a permis de développer une expertise approfondie dans l'architecture de solutions techniques, l'analyse de données et la formation de développeurs juniors.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Je m'efforce de combiner créativité et rigueur technique pour livrer des projets qui dépassent les attentes et contribuent réellement à la réussite des entreprises avec lesquelles je collabore.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">5+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Années d'expérience</h4>
                  <p className="text-sm text-gray-500">En développement web</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">30+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Projets</h4>
                  <p className="text-sm text-gray-500">Réalisés avec succès</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">50+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Clients satisfaits</h4>
                  <p className="text-sm text-gray-500">Entreprises & particuliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
