import React from 'react';
import { Download } from 'lucide-react';
import danlolaCopie from '../images/danlola copie.jpg'; // Importation corrigée de la nouvelle image

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-blue-700 to-blue-600">
      <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn">
              <span className="block">Daniel Yongo lola</span>
              <span className="text-2xl sm:text-3xl md:text-4xl opacity-90 font-normal mt-2 block">
                Développeur Fullstack, Analyste & Formateur
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-lg mx-auto md:mx-0">
              Passionné par le développement web et l'analyse de données. Créateur de solutions digitales innovantes.
            </p>
            
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Download size={20} className="mr-2" />
              Télécharger CV
            </button>
          </div>
          
          <div className="md:w-2/5">
            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-500 hover:scale-105">
              <img 
                src={danlolaCopie} // Utilisation de la nouvelle image
                alt="Daniel Yongo" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('a-propos');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="animate-bounce"
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
