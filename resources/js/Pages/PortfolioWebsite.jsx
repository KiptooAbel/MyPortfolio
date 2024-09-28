import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Terminal, Mail, User, Briefcase, Coffee, Home } from 'lucide-react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

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
                  {isMenuOpen && <span>{item.name.charAt(0