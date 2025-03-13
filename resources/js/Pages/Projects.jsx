import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Components/Layout';

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Extract unique technologies from all projects for filter buttons
  const allTechnologies = [...new Set(
    projects.flatMap(project => project.technologies || [])
  )];
  
  // Filter projects based on selected technology
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.technologies && project.technologies.includes(activeFilter)
        )
      );
    }
  }, [activeFilter, projects]);

  return (
    <Layout>
      <Head title="Projects" />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              Explore my latest work and side projects. Each project represents a unique challenge and learning opportunity.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Projects
            </button>
            
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tech
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center">
                      <span className="text-xl font-bold text-white/70">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded bg-white/10 text-white text-center text-sm hover:bg-white/20 transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    )}
                    
                    {project.live_url && (
                      <a 
                        href={project.live_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center text-sm hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <h3 className="mt-2 text-xl font-medium text-gray-300">No projects found</h3>
              <p className="mt-1 text-gray-400">
                {activeFilter === 'all' 
                  ? "There are no projects available at the moment." 
                  : `No projects found using ${activeFilter}. Try selecting a different filter.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;