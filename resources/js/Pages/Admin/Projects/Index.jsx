import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Index = ({ projects }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <AdminLayout>
            <Head title="Projects Management" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Projects Management
                        </h2>
                        
                        <Link
                            href={route('admin.projects.create')}
                            className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'} w-full sm:w-auto text-center`}
                        >
                            Add New Project
                        </Link>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        {/* Mobile card view for small screens */}
                        <div className="block sm:hidden">
                            {projects.length > 0 ? (
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {projects.map((project) => (
                                        <div key={project.id} className={`p-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                            <div className="flex justify-between mb-2">
                                                <h3 className="font-medium">
                                                    <Link 
                                                        href={route('admin.projects.show', project.id)}
                                                        className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                                                    >
                                                        {project.title}
                                                    </Link>
                                                </h3>
                                                <span className="text-sm">Order: {project.order}</span>
                                            </div>
                                            
                                            <div className="mb-2">
                                                {project.featured ? (
                                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                                        isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        Featured
                                                    </span>
                                                ) : (
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Not Featured</span>
                                                )}
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Technologies:</div>
                                                {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                                                    <div className="flex flex-wrap gap-1">
                                                        {project.technologies.map((tech, index) => (
                                                            <span 
                                                                key={index}
                                                                className={`px-2 py-1 text-xs rounded-full ${
                                                                    isDark ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'
                                                                }`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span>-</span>
                                                )}
                                            </div>
                                            
                                            <div className="flex space-x-2 mt-3">
                                                <Link
                                                    href={route('admin.projects.edit', project.id)}
                                                    className={`px-3 py-1 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-xs rounded-md flex-1 text-center`}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('admin.projects.destroy', project.id)}
                                                    method="delete"
                                                    as="button"
                                                    className={`px-3 py-1 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-xs rounded-md flex-1 text-center`}
                                                    onClick={(e) => {
                                                        if (!confirm('Are you sure you want to delete this project?')) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={`p-4 text-center ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                    No projects found. <Link href={route('admin.projects.create')} className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}>Create one</Link>.
                                </div>
                            )}
                        </div>
                        
                        {/* Traditional table for larger screens */}
                        <div className="hidden sm:block overflow-x-auto">
                            <table className="min-w-full divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}">
                                <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                    <tr>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                            Order
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                            Title
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                            Featured
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                            Technologies
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`${isDark ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                                    {projects.length > 0 ? (
                                        projects.map((project) => (
                                            <tr key={project.id}>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                    {project.order}
                                                </td>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                                    <Link 
                                                        href={route('admin.projects.show', project.id)}
                                                        className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                                                    >
                                                        {project.title}
                                                    </Link>
                                                </td>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                    {project.featured ? (
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            Featured
                                                        </span>
                                                    ) : (
                                                        <span>-</span>
                                                    )}
                                                </td>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                    {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                                <span 
                                                                    key={index}
                                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                                        isDark ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'
                                                                    }`}
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                            {project.technologies.length > 3 && (
                                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                                                                }`}>
                                                                    +{project.technologies.length - 3}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <span>-</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route('admin.projects.edit', project.id)}
                                                            className={`px-3 py-1 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-xs rounded-md`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route('admin.projects.destroy', project.id)}
                                                            method="delete"
                                                            as="button"
                                                            className={`px-3 py-1 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-xs rounded-md`}
                                                            onClick={(e) => {
                                                                if (!confirm('Are you sure you want to delete this project?')) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className={`px-6 py-4 text-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                No projects found. <Link href={route('admin.projects.create')} className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}>Create one</Link>.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;