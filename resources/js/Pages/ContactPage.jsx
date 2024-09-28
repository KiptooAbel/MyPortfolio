import React from 'react';
import { motion } from 'framer-motion';

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

export default ContactPage;
