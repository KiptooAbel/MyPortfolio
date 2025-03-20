import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Edit = ({ project }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [technologiesInput, setTechnologiesInput] = useState('');
    
    const { data, setData, put, processing, errors } = useForm({
        title: project.title || '',
        description: project.description || '',
        image: project.image || '',
        github_url: project.github_url || '',
        live_url: project.live_url || '',
        technologies: project.technologies || [],
        featured: project.featured || false,
        order: project.order || 0,
    });

    // Initialize technologies input field on component mount
    useEffect(() => {
        if (project.technologies && Array.isArray(project.technologies)) {
            setTechnologiesInput(project.technologies.join(', '));
        }
    }, [project]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.projects.update', project.id));
    };

    const handleTechnologiesChange = (e) => {
        setTechnologiesInput(e.target.value);
        // Convert comma-separated string to array
        setData('technologies', e.target.value.split(',').map(item => item.trim()).filter(item => item));
    };

    return (
        <AdminLayout>
            <Head title="Edit Project" />
            
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Edit Project: {project.title}
                        </h2>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg p-6`}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                />
                                {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="description" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={5}
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                />
                                {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="image" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    id="image"
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.image}
                                    onChange={(e) => setData('image', e.target.value)}
                                />
                                {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="github_url" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    id="github_url"
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.github_url}
                                    onChange={(e) => setData('github_url', e.target.value)}
                                />
                                {errors.github_url && <div className="text-red-500 text-sm mt-1">{errors.github_url}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="live_url" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Live URL
                                </label>
                                <input
                                    type="url"
                                    id="live_url"
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.live_url}
                                    onChange={(e) => setData('live_url', e.target.value)}
                                />
                                {errors.live_url && <div className="text-red-500 text-sm mt-1">{errors.live_url}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="technologies" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Technologies (comma separated)
                                </label>
                                <input
                                    type="text"
                                    id="technologies"
                                    className={`mt-1 block w-full px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={technologiesInput}
                                    onChange={handleTechnologiesChange}
                                    placeholder="React, Laravel, Tailwind, etc."
                                />
                                {errors.technologies && <div className="text-red-500 text-sm mt-1">{errors.technologies}</div>}
                            </div>
                            
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    className={`h-4 w-4 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded focus:ring-indigo-500 text-indigo-600`}
                                    checked={data.featured}
                                    onChange={(e) => setData('featured', e.target.checked)}
                                />
                                <label htmlFor="featured" className={`ml-2 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Featured Project
                                </label>
                                {errors.featured && <div className="text-red-500 text-sm mt-1">{errors.featured}</div>}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="order" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Display Order
                                </label>
                                <input
                                    type="number"
                                    id="order"
                                    className={`mt-1 block w-32 px-3 py-2 border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    value={data.order}
                                    onChange={(e) => setData('order', parseInt(e.target.value, 10))}
                                />
                                {errors.order && <div className="text-red-500 text-sm mt-1">{errors.order}</div>}
                            </div>
                            
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className={`mr-4 px-4 py-2 border rounded-md font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                        isDark 
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-800' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
                                    }`}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`px-4 py-2 ${
                                        isDark 
                                            ? 'bg-indigo-700 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-gray-800' 
                                            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                                    } border border-transparent rounded-md font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                        processing ? 'opacity-75' : ''
                                    }`}
                                >
                                    {processing ? 'Updating...' : 'Update Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;