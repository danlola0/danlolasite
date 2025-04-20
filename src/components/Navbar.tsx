import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">DY</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['accueil', 'a-propos', 'competences', 'experiences', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-600 transition-colors duration-300 font-medium`}
              >
                {item === 'accueil' 
                  ? 'Accueil' 
                  : item === 'a-propos' 
                    ? 'À Propos' 
                    : item === 'competences' 
                      ? 'Compétences' 
                      : item === 'experiences' 
                        ? 'Expériences' 
                        : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full">
          <div className="flex flex-col items-center py-4 space-y-4">
            {['accueil', 'a-propos', 'competences', 'experiences', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item === 'accueil' 
                  ? 'Accueil' 
                  : item === 'a-propos' 
                    ? 'À Propos' 
                    : item === 'competences' 
                      ? 'Compétences' 
                      : item === 'experiences' 
                        ? 'Expériences' 
                        : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;