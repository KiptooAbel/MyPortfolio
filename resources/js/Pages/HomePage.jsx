import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-full flex flex-col justify-center items-center text-center"
  >
    <h1 className="text-5xl font-bold mb-4">Welcome to My Digital Realm</h1>
    <p className="text-xl mb-8">Full-Stack Sorcerer | Code Alchemist | Web Design Virtuoso</p>
    <div className="relative w-64 h-64 mb-8">
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
      <img src="/api/placeholder/250/250" alt="Your Name" className="absolute inset-0 rounded-full object-cover" />
    </div>
    <p className="max-w-2xl mx-auto text-lg">
      Greetings, digital wanderer! You've discovered my corner of the web. 
      Here, bits and bytes dance to create meaningful experiences, and design meets functionality.
      Care to explore the intersection of code and creativity?
    </p>
  </motion.div>
);

export default HomePage;
