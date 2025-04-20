import React from 'react';

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  period, 
  title, 
  company, 
  description 
}) => {
  return (
    <div className="mb-12 relative pl-8 border-l-2 border-blue-100">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
          {period}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <h4 className="text-lg text-blue-600 mb-3">{company}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2021 - Présent',
      title: 'Développeur Fullstack Senior',
      company: 'TechInnovate Solutions',
      description: 'Conception et développement d\'applications web et mobiles pour clients internationaux. Gestion d\'équipe de 5 développeurs. Mise en place d\'architectures scalables et robustes.'
    },
    {
      period: '2019 - 2021',
      title: 'Lead Développeur Frontend',
      company: 'Digital Experience Agency',
      description: 'Développement d\'interfaces utilisateur réactives et accessibles. Migration d\'applications legacy vers des architectures modernes. Formation des juniors aux bonnes pratiques.'
    },
    {
      period: '2017 - 2019',
      title: 'Développeur Web',
      company: 'WebCreative Studio',
      description: 'Création de sites web et d\'applications sur mesure. Collaboration avec designers et clients pour traduire les besoins en solutions techniques efficaces.'
    },
    {
      period: '2016 - 2017',
      title: 'Formateur Développement Web',
      company: 'CodeAcademy Institute',
      description: 'Formation de futurs développeurs aux technologies frontend et backend. Création de curricula et d\'exercices pratiques. Suivi individualisé des étudiants.'
    }
  ];

  const education = [
    {
      period: '2014 - 2016',
      title: 'Master en Informatique',
      company: 'Université Paris Saclay',
      description: 'Spécialisation en développement logiciel et gestion de projets numériques. Mémoire sur l\'optimisation des applications web pour mobiles.'
    },
    {
      period: '2011 - 2014',
      title: 'Licence en Informatique',
      company: 'Université Paris-Est',
      description: 'Formation fondamentale en programmation, algorithmique et systèmes d\'information. Projets pratiques en équipe.'
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Expériences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Mon parcours professionnel et académique m'a permis d'acquérir une expertise solide dans le développement de solutions numériques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Expérience Professionnelle</h3>
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Formation</h3>
            {education.map((item, index) => (
              <ExperienceItem 
                key={index}
                period={item.period}
                title={item.title}
                company={item.company}
                description={item.description}
              />
            ))}
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'AWS Certified Developer', year: '2022' },
                  { name: 'React Certification', year: '2021' },
                  { name: 'Node.js Certification', year: '2020' },
                  { name: 'SCRUM Master', year: '2019' }
                ].map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="text-blue-600 font-semibold">{cert.name}</div>
                    <div className="text-sm text-gray-500">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;