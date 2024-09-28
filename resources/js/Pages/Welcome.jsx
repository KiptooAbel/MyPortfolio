import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Terminal, Mail, Linkedin, FileText, Home, User, Briefcase, Coffee } from 'lucide-react';

// Imagine each of these components is in a separate file
const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-full flex flex-col justify-center items-center text-center"
  >
    <h1 className="text-5xl font-bold mb-4">Welcome to My Digital Realm</h1>
    <p className="text-xl mb-8">Full-Stack Sorcerer | Code Alchemist | Tech Explorer</p>
    <div className="relative w-64 h-64 mb-8">
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
      <img src="/img/portfolio.jpg" alt="Your Name" className="absolute inset-0 rounded-full object-cover" />
    </div>
    <p className="max-w-2xl mx-auto text-lg">
      Greetings, digital wanderer! You've stumbled upon my corner of the web. 
      Here, bits and bytes dance to create meaningful experiences. 
      Care to join the adventure?
    </p>
  </motion.div>
);

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <h2 className="text-4xl font-bold mb-6">The Saga of a Code Weaver</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">My Quest</h3>
        <p>
          In the vast realm of technology, I embark on a never-ending quest to turn complex problems into elegant solutions. 
          Armed with the mystical arts of Laravel, React, and the ancient wisdom of C++, I craft digital experiences that delight and inspire.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">The Arsenal</h3>
        <ul className="list-disc list-inside">
          <li>Mastery of the LAMP stack legends</li>
          <li>Proficiency in the React incantations</li>
          <li>Command over the Laravel framework</li>
          <li>Fluency in the Python serpent's tongue</li>
          <li>Expertise in the arcane C and C++ runes</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const SkillsPage = () => {
  const skills = [
    { name: 'Laravel', icon: <Server className="w-8 h-8" />, level: 90 },
    { name: 'React', icon: <Code className="w-8 h-8" />, level: 85 },
    { name: 'PHP', icon: <Terminal className="w-8 h-8" />, level: 95 },
    { name: 'MySQL', icon: <Database className="w-8 h-8" />, level: 80 },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, level: 88 },
    { name: 'Python', icon: <Terminal className="w-8 h-8" />, level: 75 },
    { name: 'C/C++', icon: <Terminal className="w-8 h-8" />, level: 70 },
    { name: 'HTML/CSS', icon: <Code className="w-8 h-8" />, level: 92 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">My Arcane Arsenal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-800 p-4 rounded-lg text-center">
            {skill.icon}
            <h3 className="text-xl font-semibold my-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const projects = [
    { name: 'Mystic Market', description: 'E-commerce platform with enchanted user experience', tech: 'Laravel, React, MySQL' },
    { name: 'Data Divination', description: 'Visualization tool that predicts future trends', tech: 'Python, React, D3.js' },
    { name: 'Quantum Inventory', description: 'Inventory system that exists in multiple states simultaneously', tech: 'PHP, MySQL, React' },
    { name: 'Algorithmic Alchemy', description: 'Visualizer that transforms complex algorithms into gold', tech: 'C++, React' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">Artifacts of Creation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
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

const ContactPage = () => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <h2 className="text-4xl font-bold mb-8">Summon Me</h2>
    <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 bg-gray-700 rounded text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Send Magical Message
        </button>
      </form>
    </div>
  </motion.div>
);

const PortfolioWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageComponents = {
    home: <HomePage />,
    about: <AboutPage />,
    skills: <SkillsPage />,
    projects: <ProjectsPage />,
    contact: <ContactPage />,
  };

  const navItems = [
    { name: 'home', icon: <Home /> },
    { name: 'about', icon: <User /> },
    { name: 'skills', icon: <Terminal /> },
    { name: 'projects', icon: <Briefcase /> },
    { name: 'contact', icon: <Mail /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex">
      <nav className={`bg-gray-800 p-4 flex flex-col justify-between ${isMenuOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mb-8 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300">
            <Coffee className={`w-6 h-6 ${isMenuOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
          </button>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActivePage(item.name)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition duration-300 ${activePage === item.name ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {item.icon}
                  {isMenuOpen && <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white"><Linkedin /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FileText /></a>
        </div>
      </nav>

      <main className="flex-1 p-8 overflow-auto">
        <AnimatePresence mode="wait">
          {pageComponents[activePage]}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default PortfolioWebsite;
