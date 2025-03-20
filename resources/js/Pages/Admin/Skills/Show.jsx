import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Show = ({ skill }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    return (
        <AdminLayout>
            <Head title={`Skill: ${skill.name}`} />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Skill Details
                        </h2>
                        
                        <div className="flex space-x-2">
                            <Link
                                href={route('admin.skills.edit', skill.id)}
                                className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'}`}
                            >
                                Edit Skill
                            </Link>
                            <Link
                                href={route('admin.skills.index')}
                                className={`px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-gray-700 focus:ring-offset-gray-800' : 'focus:ring-gray-500'}`}
                            >
                                Back to List
                            </Link>
                        </div>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className={`text-lg leading-6 font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                {skill.name}
                            </h3>
                            <p className={`mt-1 max-w-2xl text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                {skill.featured ? (
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        Featured
                                    </span>
                                ) : (
                                    <span>Not Featured</span>
                                )}
                            </p>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                            <dl>
                                <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Category
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {skill.category}
                                    </dd>
                                </div>
                                <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Proficiency
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                            <div 
                                                className="bg-blue-600 h-2.5 rounded-full" 
                                                style={{ width: `${skill.proficiency}%` }}
                                            />
                                        </div>
                                        <span className="mt-1 inline-block">{skill.proficiency}%</span>
                                    </dd>
                                </div>
                                <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Icon
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {skill.icon ? skill.icon : '-'}
                                    </dd>
                                </div>
                                <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Order
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {skill.order}
                                    </dd>
                                </div>
                                <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Description
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {skill.description ? skill.description : '-'}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="px-4 py-4 sm:px-6 border-t border-gray-200 dark:border-gray-700">
                            <Link
                                href={route('admin.skills.destroy', skill.id)}
                                method="delete"
                                as="button"
                                className={`px-4 py-2 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-red-700 focus:ring-offset-gray-800' : 'focus:ring-red-500'}`}
                                onClick={(e) => {
                                    if (!confirm('Are you sure you want to delete this skill?')) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                Delete Skill
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;