import React from 'react';

const SectionHeading = ({ title, subtitle, gradient = 'from-blue-400 via-indigo-500 to-purple-500' }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        <span className="block text-white mb-1">{title}</span>
        <span className={`block bg-gradient-to-r ${gradient} bg-clip-text text-transparent pb-2`}>
          {subtitle}
        </span>
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;