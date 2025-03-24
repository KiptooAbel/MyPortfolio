import React, { useState, useEffect, useMemo } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Layout as LayoutIcon, 
  Rocket, 
  CloudLightning 
} from 'lucide-react';
import Layout from '@/Components/Layout';

// Extracted reusable variants for consistent animations
const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    type: "spring", 
    stiffness: 100,
    damping: 15
  }
};

const ProjectCard = React.memo(({ project, index }) => {
  return (
    <motion.div
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      transition={{
        ...animationVariants.transition,
        delay: index * 0.1, 
        duration: 0.5 
      }}
      className="group"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl">
        {/* Optimized Image Rendering */}
        <div className="h-64 overflow-hidden relative">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-500">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
          
          {project.featured && (
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
              <Rocket className="w-4 h-4 mr-1" />
              Featured
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Optimization */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link 
              href={`/projects/${project.id}`}
              className="flex-1 py-2 px-4 bg-white/10 text-white rounded-lg text-center hover:bg-blue-500/20 transition-colors"
            >
              View Details
            </Link>
            
            {project.live_url && (
              <a 
                href={project.live_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition-colors"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Memoized technology extraction with better performance
  const allTechnologies = useMemo(() => {
    const technologies = new Set();
    projects.forEach(project => {
      project.technologies?.forEach(tech => technologies.add(tech));
    });
    return Array.from(technologies).sort();
  }, [projects]);
  
  // Optimized filtering with useCallback
  const filterProjects = React.useCallback(() => {
    const filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(p => 
          p.technologies && p.technologies.includes(activeFilter)
        );
    
    setFilteredProjects(filtered);
  }, [activeFilter, projects]);

  useEffect(() => {
    filterProjects();
  }, [filterProjects]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-950 text-white">
        <Head title="Portfolio Showcase" />
        
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section with Accessibility Improvements */}
          <motion.section 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
            aria-labelledby="showcase-title"
          >
            <div className="flex justify-center mb-6">
              <CloudLightning 
                className="w-16 h-16 text-blue-500" 
                aria-hidden="true" 
              />
            </div>
            <h1 
              id="showcase-title" 
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Digital Craftsmanship
            </h1>

          </motion.section>



          {/* Projects Grid with Fallback */}
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                aria-live="polite"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white/5 rounded-2xl"
              >
                <div className="flex justify-center mb-4">
                  <Filter className="w-16 h-16 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-400">
                  {activeFilter === 'all' 
                    ? "No projects are currently available." 
                    : `No projects found for ${activeFilter}. Try a different filter.`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;