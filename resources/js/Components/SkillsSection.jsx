import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const { skills } = usePage().props;
  
  // Transform skills data from backend into the format needed for the component
  const processSkillsData = () => {
    if (!skills) return [];
    
    // Create an array of categories with their skills
    return Object.keys(skills).map(category => {
      // Define icons based on category name
      const getCategoryIcon = (categoryName) => {
        const icons = {
          'Frontend': 'M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z',
          'Backend': 'M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z',
          'Tools & Methods': 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
          // Add more default icons as needed
        };
        
        return icons[categoryName] || 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z';
      };
      
      return {
        title: category,
        icon: skills[category][0]?.icon || getCategoryIcon(category),
        skills: skills[category].map(skill => ({
          name: skill.name,
          level: skill.proficiency,
          description: skill.description
        }))
      };
    });
  };
  
  const skillCategories = processSkillsData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe section elements
    const sectionElements = document.querySelectorAll('.animate-on-scroll');
    sectionElements.forEach((el) => observer.observe(el));

    // Animated skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      bar.style.width = '0%';
      bar.style.transition = `width 1s ease`;
      bar.style.transitionDelay = `${index * 0.1}s`;
      
      const barObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targetWidth = bar.getAttribute('data-level');
              bar.style.width = targetWidth;
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      
      barObserver.observe(bar);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-on-scroll opacity-0 transition-all duration-700">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-100"></div>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            My technical expertise and toolset
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-lg animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mr-3">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={category.icon} 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                        <div 
                          className="skill-bar bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" 
                          data-level={`${skill.level}%`}
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
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Completed' },
            { value: '15+', label: 'Happy Clients' },
            { value: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg text-center animate-on-scroll opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${index * 0.1 + 0.6}s` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;