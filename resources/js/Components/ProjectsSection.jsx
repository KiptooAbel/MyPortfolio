import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Novel E-Commerce Platform',
      description: 'Online bookstore with personalized recommendations and secure checkout.',
      technologies: ['React', 'Laravel', 'Stripe'],
      link: '/projects/novel-ecommerce'
    },
    {
      id: 2,
      title: 'Medical College Website',
      description: 'Interactive platform with application system and virtual campus tours.',
      technologies: ['React', 'Laravel', 'Tailwind'],
      link: 'thecheranganyhospitalcollegeofhealthsciences.com'
    },
    {
      id: 3,
      title: 'College Portal System',
      description: 'Student management system with course registration and grade tracking.',
      technologies: ['React', 'Laravel', 'Pusher'],
      link: '/projects/college-portal'
    },
    {
      id: 4,
      title: 'Dropshipping Platform',
      description: 'E-commerce solution with automated order fulfillment and supplier integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '/projects/dropshipping'
    }
  ];

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

    // Observe project cards with staggered delay
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
      card.style.transitionDelay = `${index * 0.1}s`;
      
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      
      cardObserver.observe(card);
    });

    return () => {
      observer.disconnect();
      projectCards.forEach(() => {
        // Clean up observers
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Decorative elements similar to Hero */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
      
      {/* Particle-like decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-on-scroll opacity-0 transition-all duration-700">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-100"></div>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            Recent work showcasing my technical expertise
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105">
                  <span className="text-white text-lg font-bold text-center">{project.title}</span>
                </div>
              </div>
              <div className="p-5 bg-gray-900/80">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center transition-colors duration-200"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-300">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
          >
            Explore All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;