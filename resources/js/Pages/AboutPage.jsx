import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="h-full flex flex-col justify-center items-center"
  >
    <h2 className="text-4xl font-bold mb-6">The Saga of a Code Weaver and Design Enthusiast</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">My Quest</h3>
        <p>
          In the vast realm of technology and design, I embark on a never-ending quest to turn complex problems into elegant, visually appealing solutions. 
          Armed with the mystical arts of Laravel, React, and the creative power of D3.js, I craft digital experiences that not only function flawlessly but also delight the eye.
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
          <li>Wizardry in web design and UX sorcery</li>
          <li>Mastery of D3.js data visualization magic</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default AboutPage;
