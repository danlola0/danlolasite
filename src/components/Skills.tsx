import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-blue-600' },
    { name: 'React.js & Next.js', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js & Express', level: 85, color: 'bg-blue-600' },
    { name: 'Python & Django', level: 80, color: 'bg-blue-600' },
    { name: 'SQL & NoSQL Databases', level: 85, color: 'bg-blue-600' },
    { name: 'API Development', level: 90, color: 'bg-blue-600' }
  ];

  const softSkills = [
    { name: 'Gestion de projet', level: 90, color: 'bg-blue-400' },
    { name: 'Communication', level: 95, color: 'bg-blue-400' },
    { name: 'Formation & Pédagogie', level: 85, color: 'bg-blue-400' },
    { name: 'Analyse de problèmes', level: 90, color: 'bg-blue-400' },
    { name: 'Travail d\'équipe', level: 95, color: 'bg-blue-400' },
    { name: 'Esprit critique', level: 85, color: 'bg-blue-400' }
  ];

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Je maîtrise un large éventail de technologies et méthodologies pour concevoir des solutions adaptées à chaque projet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Compétences Techniques
            </h3>
            
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Compétences Humaines
            </h3>
            
            <div>
              {softSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux', 
            'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="text-blue-600 font-semibold">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;