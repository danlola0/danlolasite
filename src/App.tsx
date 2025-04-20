import React, { useEffect, useRef } from 'react';
import './styles/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { animateOnScroll } from './utils/animations';

function App() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Update document title
    document.title = "Daniel Yongo | Développeur Fullstack";
    
    // Add animation to sections on scroll
    sectionsRef.current.forEach((section) => {
      if (section) {
        const elements = section.querySelectorAll('.scroll-fade');
        elements.forEach((el) => {
          animateOnScroll(el as HTMLElement);
        });
      }
    });
    
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <About />
      </div>
      
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <Skills />
      </div>
      
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Experience />
      </div>
      
      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <Portfolio />
      </div>
      
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;