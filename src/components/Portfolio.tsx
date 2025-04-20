import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
      description: 'Plateforme e-commerce complète avec gestion de produits, panier et paiement.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'frontend',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      description: 'Tableau de bord pour visualiser et analyser des données marketing en temps réel.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Material UI'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Gestion de Projet App',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
      description: 'Application de gestion de projet avec fonctionnalités Kanban et suivi de temps.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'API Marketplace',
      category: 'backend',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      description: 'Système d\'API RESTful pour l\'intégration de services tiers et la gestion de données.',
      technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Application Mobile Fitness',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg',
      description: 'Application mobile pour suivi d\'entraînement et coaching fitness personnalisé.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Portfolio Photographe',
      category: 'frontend',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      description: 'Site portfolio responsive pour un photographe professionnel avec galerie interactive.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez une sélection de projets sur lesquels j'ai travaillé, démontrant mes compétences et mon expertise.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {['all', 'frontend', 'backend', 'fullstack', 'mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Tous' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Démo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Voir plus de projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;