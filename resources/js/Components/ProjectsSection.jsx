import React from 'react';
import { Link } from '@inertiajs/react';

const ProjectsSection = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform with payment integration, user authentication, and an admin dashboard.',
      image: '/images/projects/project1.jpg', // You'll need to add these images to your public folder
      technologies: ['React', 'Laravel', 'Inertia.js', 'Stripe', 'Tailwind CSS'],
      link: '/projects/e-commerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, role-based permissions, and detailed analytics.',
      image: '/images/projects/project2.jpg',
      technologies: ['React', 'Laravel', 'Pusher', 'Chart.js', 'Tailwind CSS'],
      link: '/projects/task-manager'
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'A custom CMS built for a media company to manage digital content, users, and analytics in a single platform.',
      image: '/images/projects/project3.jpg',
      technologies: ['React', 'Laravel', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
      link: '/projects/cms'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Check out some of my recent work
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200 overflow-hidden">
                {/* Replace with actual images in production */}
                <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;