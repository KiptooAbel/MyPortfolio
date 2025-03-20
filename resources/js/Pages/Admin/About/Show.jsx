import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Show = ({ about }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <AdminLayout>
            <Head title="About Page Details" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            About Page Details
                        </h2>
                        
                        <div className="flex space-x-2">
                            <Link
                                href={route('admin.about.index')}
                                className={`px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'text-gray-200 focus:ring-gray-700 focus:ring-offset-gray-800' : 'text-gray-700 focus:ring-gray-500'}`}
                            >
                                Back to List
                            </Link>
                            <Link
                                href={route('admin.about.edit', about.id)}
                                className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'}`}
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
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
                                        
                                        <div>
                                            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Bio
                                            </label>
                                            <div className={`mt-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                                {about.bio}
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
                                                    <div className="space-y-2">
                                                        {about.experiences.map((exp, index) => (
                                                            <div key={index} className={`p-3 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                                <div className="font-medium">{exp.title}</div>
                                                                <div className="text-sm">{exp.company}</div>
                                                                <div className="text-sm text-gray-500">{exp.duration}</div>
                                                                <div className="text-sm mt-1">{exp.description}</div>
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                    <div className="space-y-2">
                                                        {about.education.map((edu, index) => (
                                                            <div key={index} className={`p-3 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                                <div className="font-medium">{edu.degree}</div>
                                                                <div className="text-sm">{edu.institution}</div>
                                                                <div className="text-sm text-gray-500">{edu.duration}</div>
                                                                <div className="text-sm mt-1">{edu.description}</div>
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                    <div className="space-y-2">
                                                        {about.testimonials.map((testimonial, index) => (
                                                            <div key={index} className={`p-3 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                                <div className="italic">{testimonial.quote}</div>
                                                                <div className="text-sm font-medium mt-1">— {testimonial.author}</div>
                                                                <div className="text-sm text-gray-500">{testimonial.title}</div>
                                                            </div>
                                                        ))}
                                                    </div>
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
                                                    <div className="space-y-2">
                                                        {about.certifications.map((cert, index) => (
                                                            <div key={index} className={`p-3 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                                <div className="font-medium">{cert.name}</div>
                                                                <div className="text-sm">{cert.issuer}</div>
                                                                <div className="text-sm text-gray-500">{cert.date}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-sm text-gray-500">No certifications added</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;