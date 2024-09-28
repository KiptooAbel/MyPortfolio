import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    { name: 'Mystic Market', description: 'E-commerce platform with enchanted user experience and data-driven insights', tech: 'Laravel, React, MySQL, D3.js' },
    { name: 'Data Divination', description: 'Advanced visualization tool that predicts future trends using machine learning', tech: 'Python, React, D3.js, TensorFlow' },
    { name: 'Quantum Inventory', description: 'Inventory system with real-time updates and predictive analytics', tech: 'PHP, MySQL, React, D3.js' },
    { name: 'Algorithmic Alchemy', description: 'Interactive platform that transforms complex algorithms into intuitive visualizations', tech: 'C++, React, D3.js' },
    { name: 'Design Dimension', description: 'A showcase of web design projects with focus on UX and responsive design', tech: 'HTML, CSS, JavaScript, Figma' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">Artifacts of Creation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <p className="text-blue-400">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
