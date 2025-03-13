import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe section elements
    const sectionElements = document.querySelectorAll('.animate-on-scroll');
    sectionElements.forEach((el) => observer.observe(el));

    // Timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
      item.style.transitionDelay = `${index * 0.2}s`;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      
      itemObserver.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
      <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-on-scroll opacity-0 transition-all duration-700">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-on-scroll opacity-0 transition-all duration-700 delay-100"></div>
            
            <p className="mt-6 text-lg text-gray-300 animate-on-scroll opacity-0 transition-all duration-700 delay-200">
              I'm a passionate full-stack developer specializing in creating modern web applications 
              with React, Laravel, and Inertia.js. With over 4 years of professional experience, 
              I've helped businesses of all sizes bring their ideas to life through clean code 
              and user-centered design.
            </p>
            <p className="mt-4 text-lg text-gray-300 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
              My journey in web development began during my Computer Science studies, where I discovered 
              my passion for creating elegant solutions to complex problems. Since then, I've worked 
              with startups and established companies to build everything from e-commerce platforms 
              to custom content management systems.
            </p>
            <p className="mt-4 text-lg text-gray-300 animate-on-scroll opacity-0 transition-all duration-700 delay-400">
              What sets me apart is my commitment to writing maintainable, scalable code and 
              my focus on creating intuitive user experiences. I believe that great software 
              should not only function flawlessly but also be a joy to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-on-scroll opacity-0 transition-all duration-700 delay-500">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              >
                Learn More
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 flex justify-center animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              {/* Profile image container with gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center text-white text-3xl font-bold">
                Your Photo
              </div>
            </div>
          </div>
        </div>
        
        {/* Education & Experience Section */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-400">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              Education
            </h3>
            <div className="space-y-10">
              <div className="timeline-item relative pl-8 pb-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                <p className="text-indigo-400">University Name, 2015-2019</p>
                <p className="mt-2 text-gray-300">Specialized in web development and software engineering with a minor in user experience design.</p>
              </div>
              <div className="timeline-item relative pl-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <h4 className="text-xl font-semibold text-white">Full-Stack Web Development Certificate</h4>
                <p className="text-indigo-400">Coding Bootcamp Name, 2019</p>
                <p className="mt-2 text-gray-300">Intensive program focused on modern JavaScript frameworks and PHP/Laravel backend development.</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Experience
            </h3>
            <div className="space-y-10">
              <div className="timeline-item relative pl-8 pb-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <h4 className="text-xl font-semibold text-white">Senior Full-Stack Developer</h4>
                <p className="text-indigo-400">Company Name, 2022-Present</p>
                <p className="mt-2 text-gray-300">Lead development of web applications using React, Laravel, and Inertia.js. Mentor junior developers and participate in architecture planning.</p>
              </div>
              <div className="timeline-item relative pl-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <h4 className="text-xl font-semibold text-white">Web Developer</h4>
                <p className="text-indigo-400">Another Company, 2019-2022</p>
                <p className="mt-2 text-gray-300">Built and maintained client websites and web applications. Collaborated with designers and product managers to deliver high-quality projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;