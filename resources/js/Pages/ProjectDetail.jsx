import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Globe, 
  Rocket, 
  Code2, 
  Target, 
  Layers 
} from 'lucide-react';
import Layout from '@/Components/Layout';

const ProjectDetail = ({ project }) => {
  return (<Layout>
    <div className="min-h-screen bg-gray-950 text-white">
      <Head title={project.title} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/projects" 
            className="
              inline-flex items-center gap-2 
              text-gray-400 hover:text-white 
              transition-colors
            "
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Showcase */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Hero Image */}
            <div className="h-[600px] overflow-hidden relative">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-8xl font-bold text-gray-600">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              
              {project.featured && (
                <div className="absolute top-6 right-6 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  <Rocket className="w-5 h-5 mr-2" />
                  Featured Project
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 space-y-12"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-5 h-5" />
                  <span className="text-lg">Project Highlights</span>
                </div>
              </div>

              {project.live_url && (
                <a 
                  href={project.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 
                    px-6 py-3 rounded-lg 
                    bg-blue-600 text-white 
                    hover:bg-blue-700 
                    transition-colors
                  "
                >
                  <Globe className="w-5 h-5" />
                  Visit Live Site
                </a>
              )}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-semibold text-white">
                  Project Overview
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-semibold text-white">
                    Technology Stack
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="
                        px-4 py-2 
                        bg-white/10 text-gray-300 
                        rounded-full text-sm
                        hover:bg-blue-500/20 
                        transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
    
    </Layout>
  );
};

export default ProjectDetail;