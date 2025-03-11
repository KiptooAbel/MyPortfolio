import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'Tools & Methods',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Testing', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My technical expertise and toolset
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-indigo-50 rounded-lg text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">30+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
            <div className="text-gray-700">Happy Clients</div>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
            <div className="text-gray-700">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;