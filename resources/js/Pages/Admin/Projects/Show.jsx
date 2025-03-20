import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Show = ({ project }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('admin.projects.destroy', project.id));
        }
    };

    return (
        <AdminLayout>
            <Head title={project.title || 'Project Details'} />
            
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex justify-between items-center">
                        <Link
                            href={route('admin.projects.index')}
                            className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                        >
                            &larr; Back to all projects
                        </Link>
                        
                        <div className="flex space-x-4">
                            <Link
                                href={route('admin.projects.edit', project.id)}
                                className={`px-4 py-2 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-700 focus:ring-offset-gray-800' : 'focus:ring-blue-500'}`}
                            >
                                Edit Project
                            </Link>
                            
                            <button
                                onClick={handleDelete}
                                className={`px-4 py-2 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-red-700 focus:ring-offset-gray-800' : 'focus:ring-red-500'}`}
                            >
                                Delete Project
                            </button>
                        </div>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        {project.image && (
                            <div className="w-full aspect-video overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className={`text-lg leading-6 font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                {project.title}
                            </h3>
                            {project.featured && (
                                <span className={`ml-2 px-2 py-1 text-xs inline-flex leading-5 font-semibold rounded-full ${
                                    isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    Featured
                                </span>
                            )}
                            <p className={`mt-1 max-w-2xl text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Order: {project.order}
                            </p>
                        </div>
                        
                        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                            <dl>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Description
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2 whitespace-pre-wrap`}>
                                        {project.description}
                                    </dd>
                                </div>
                                
                                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Technologies
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, index) => (
                                                    <span 
                                                        key={index} 
                                                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                                                            isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
                                                        }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                No technologies specified
                                            </span>
                                        )}
                                    </dd>
                                </div>
                                
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Links
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        <div className="space-y-2">
                                            {project.github_url && (
                                                <div>
                                                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>GitHub: </span>
                                                    <a 
                                                        href={project.github_url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                                                    >
                                                        {project.github_url}
                                                    </a>
                                                </div>
                                            )}
                                            
                                            {project.live_url && (
                                                <div>
                                                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Live Demo: </span>
                                                    <a 
                                                        href={project.live_url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                                                    >
                                                        {project.live_url}
                                                    </a>
                                                </div>
                                            )}
                                            
                                            {!project.github_url && !project.live_url && (
                                                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    No links provided
                                                </span>
                                            )}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;