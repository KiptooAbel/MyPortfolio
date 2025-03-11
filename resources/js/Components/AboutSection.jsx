import React from 'react';
import { Link } from '@inertiajs/react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I'm a passionate full-stack developer specializing in creating modern web applications 
              with React, Laravel, and Inertia.js. With over 4 years of professional experience, 
              I've helped businesses of all sizes bring their ideas to life through clean code 
              and user-centered design.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              My journey in web development began during my Computer Science studies, where I discovered 
              my passion for creating elegant solutions to complex problems. Since then, I've worked 
              with startups and established companies to build everything from e-commerce platforms 
              to custom content management systems.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              What sets me apart is my commitment to writing maintainable, scalable code and 
              my focus on creating intuitive user experiences. I believe that great software 
              should not only function flawlessly but also be a joy to use.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn More
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-lg">
              {/* Replace with your actual profile image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                Your Photo
              </div>
            </div>
          </div>
        </div>
        
        {/* Education & Experience Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                <p className="text-indigo-600">University Name, 2015-2019</p>
                <p className="mt-2 text-gray-600">Specialized in web development and software engineering with a minor in user experience design.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                <h4 className="text-xl font-semibold text-gray-900">Full-Stack Web Development Certificate</h4>
                <p className="text-indigo-600">Coding Bootcamp Name, 2019</p>
                <p className="mt-2 text-gray-600">Intensive program focused on modern JavaScript frameworks and PHP/Laravel backend development.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                <h4 className="text-xl font-semibold text-gray-900">Senior Full-Stack Developer</h4>
                <p className="text-indigo-600">Company Name, 2022-Present</p>
                <p className="mt-2 text-gray-600">Lead development of web applications using React, Laravel, and Inertia.js. Mentor junior developers and participate in architecture planning.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-indigo-200">
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                <h4 className="text-xl font-semibold text-gray-900">Web Developer</h4>
                <p className="text-indigo-600">Another Company, 2019-2022</p>
                <p className="mt-2 text-gray-600">Built and maintained client websites and web applications. Collaborated with designers and product managers to deliver high-quality projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;