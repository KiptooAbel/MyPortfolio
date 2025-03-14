import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Components/Layout';

// Import reusable components (assuming you have these defined elsewhere)
import SectionHeading from '@/Components/SectionHeading';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-3 rounded-lg mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
      </div>
      
      <p className="text-gray-300 mb-4">{skill.description}</p>
      
      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <span className="mt-1 text-sm text-gray-400 block text-right font-medium">
        {skill.proficiency}%
      </span>
    </div>
  );
};

const Skills = ({ skills, categories }) => {
  useEffect(() => {
    // Optional: Add animation for skills when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.skill-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Head title="Skills - Abel Kiptoo" />
      
      <section id="skills" className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Skills"
            subtitle="Technical expertise and competencies"
            gradient="from-blue-400 via-indigo-500 to-purple-500"
          />
          
          <div className="space-y-16 mt-12">
            {categories.map((category) => (
              <div key={category} className="space-y-6">
                <h2 className="text-2xl font-bold text-white relative inline-block">
                  {category}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills[category].map((skill) => (
                    <div key={skill.id} className="skill-card opacity-0 transition-opacity duration-700">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Git', 'Docker', 'AWS', 'GraphQL', 'Redis', 'MySQL', 'MongoDB', 'Jest', 'Cypress', 'Figma'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full text-white/90 border border-white/10 hover:border-indigo-500/50 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;