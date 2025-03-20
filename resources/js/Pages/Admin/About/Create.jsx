import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Create = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        bio: '',
        short_description: '',
        profile_image: null,
        experiences: [],
        education: [],
        testimonials: [],
        certifications: [],
        personal_info: {}
    });
    
    const [imagePreview, setImagePreview] = useState(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('profile_image', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.about.store'));
    };
    
    return (
        <AdminLayout>
            <Head title="Create About Page" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Create About Page
                        </h2>
                        
                        <Link
                            href={route('admin.about.index')}
                            className={`px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'text-gray-200 focus:ring-gray-700 focus:ring-offset-gray-800' : 'text-gray-700 focus:ring-gray-500'}`}
                        >
                            Back to List
                        </Link>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                                        General Information
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                onChange={handleChange}
                                                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDark ? 'bg-gray-700 text-gray-200 border-gray-600' : ''}`}
                                                required
                                            />
                                            {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                                        </div>
                                        
                                        <div>
                                            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                                                Short Description
                                            </label>
                                            <textarea
                                                name="short_description"
                                                value={data.short_description}
                                                onChange={handleChange}
                                                rows="3"
                                                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDark ? 'bg-gray-700 text-gray-200 border-gray-600' : ''}`}
                                                required
                                            ></textarea>
                                            {errors.short_description && <div className="text-red-500 text-sm mt-1">{errors.short_description}</div>}
                                        </div>
                                        
                                        <div>
                                            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                                                Bio
                                            </label>
                                            <textarea
                                                name="bio"
                                                value={data.bio}
                                                onChange={handleChange}
                                                rows="6"
                                                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDark ? 'bg-gray-700 text-gray-200 border-gray-600' : ''}`}
                                                required
                                            ></textarea>
                                            {errors.bio && <div className="text-red-500 text-sm mt-1">{errors.bio}</div>}
                                        </div>
                                        
                                        <div>
                                            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                                                Profile Image
                                            </label>
                                            <input
                                                type="file"
                                                name="profile_image"
                                                onChange={handleImageChange}
                                                className={`mt-1 block w-full ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                                                accept="image/*"
                                            />
                                            {errors.profile_image && <div className="text-red-500 text-sm mt-1">{errors.profile_image}</div>}
                                            
                                            {imagePreview && (
                                                <div className="mt-3">
                                                    <img 
                                                        src={imagePreview} 
                                                        alt="Profile Preview" 
                                                        className="h-32 w-32 object-cover rounded-md" 
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                                        Additional Information
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Additional sections like experiences, education, testimonials, 
                                                certifications, and personal info can be added after creating the about page.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`px-4 py-2 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-green-700 focus:ring-offset-gray-800' : 'focus:ring-green-500'} ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Creating...' : 'Create About Page'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Create;