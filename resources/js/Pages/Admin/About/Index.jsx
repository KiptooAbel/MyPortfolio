import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Index = ({ about }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <AdminLayout>
            <Head title="About Page Management" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            About Page Management
                        </h2>
                        
                        {!about ? (
                            <Link
                                href={route('admin.about.create')}
                                className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'} w-full sm:w-auto text-center`}
                            >
                                Create About Page
                            </Link>
                        ) : null}
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        {about ? (
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                                            General Information
                                        </h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Title
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.title}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Short Description
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.short_description}
                                                </div>
                                            </div>
                                            
                                            {about.profile_image && (
                                                <div>
                                                    <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        Profile Image
                                                    </label>
                                                    <div className="mt-1">
                                                        <img 
                                                            src={`/storage/${about.profile_image}`} 
                                                            alt="Profile" 
                                                            className="h-32 w-32 object-cover rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                                            Additional Information
                                        </h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Experiences
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.experiences && about.experiences.length > 0 ? (
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            isDark ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'
                                                        }`}>
                                                            {about.experiences.length} entries
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-gray-500">No experiences added</span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Education
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.education && about.education.length > 0 ? (
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            isDark ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-800'
                                                        }`}>
                                                            {about.education.length} entries
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-gray-500">No education added</span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Testimonials
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.testimonials && about.testimonials.length > 0 ? (
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            isDark ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {about.testimonials.length} entries
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-gray-500">No testimonials added</span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Certifications
                                                </label>
                                                <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {about.certifications && about.certifications.length > 0 ? (
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
                                                        }`}>
                                                            {about.certifications.length} entries
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-gray-500">No certifications added</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex space-x-4">
                                    <Link
                                        href={route('admin.about.edit', about.id)}
                                        className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'}`}
                                    >
                                        Edit About Page
                                    </Link>
                                    <Link
                                        href={route('admin.about.destroy', about.id)}
                                        method="delete"
                                        as="button"
                                        className={`px-4 py-2 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-red-700 focus:ring-offset-gray-800' : 'focus:ring-red-500'}`}
                                        onClick={(e) => {
                                            if (!confirm('Are you sure you want to delete this about page?')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className={`p-6 text-center ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                No about page found. <Link href={route('admin.about.create')} className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}>Create one</Link>.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;