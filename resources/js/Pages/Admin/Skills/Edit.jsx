import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';

const Edit = ({ skill, categories }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [newCategory, setNewCategory] = useState('');
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    
    const { data, setData, put, processing, errors } = useForm({
        name: skill.name || '',
        icon: skill.icon || '',
        description: skill.description || '',
        proficiency: skill.proficiency || 0,
        category: skill.category || '',
        order: skill.order || 0,
        featured: skill.featured || false
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.skills.update', skill.id));
    };
    
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value === 'new') {
            setShowNewCategoryInput(true);
            setData('category', '');
        } else {
            setData('category', value);
        }
    };
    
    const handleNewCategorySubmit = () => {
        if (newCategory.trim()) {
            setData('category', newCategory.trim());
            setShowNewCategoryInput(false);
        }
    };
    
    return (
        <AdminLayout>
            <Head title="Edit Skill" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Edit Skill
                        </h2>
                        
                        <Link
                            href={route('admin.skills.index')}
                            className={`px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-gray-700 focus:ring-offset-gray-800' : 'focus:ring-gray-500'}`}
                        >
                            Back to List
                        </Link>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg p-6`}>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel 
                                        htmlFor="name" 
                                        value="Name"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel 
                                        htmlFor="icon" 
                                        value="Icon (optional)"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    <TextInput
                                        id="icon"
                                        type="text"
                                        name="icon"
                                        value={data.icon}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                        onChange={(e) => setData('icon', e.target.value)}
                                    />
                                    <div className={`mt-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Enter an icon class or SVG code
                                    </div>
                                    <InputError message={errors.icon} className="mt-2" />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <InputLabel 
                                        htmlFor="description" 
                                        value="Description (optional)"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    <TextArea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        rows={3}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel 
                                        htmlFor="proficiency" 
                                        value="Proficiency (%)"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    <div className="flex items-center space-x-2">
                                        <input
                                            id="proficiency-range"
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={data.proficiency}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                            onChange={(e) => setData('proficiency', parseInt(e.target.value))}
                                        />
                                        <TextInput
                                            id="proficiency"
                                            type="number"
                                            name="proficiency"
                                            min="0"
                                            max="100"
                                            value={data.proficiency}
                                            className={`mt-1 block w-16 ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                            onChange={(e) => setData('proficiency', parseInt(e.target.value))}
                                            required
                                        />
                                    </div>
                                    <InputError message={errors.proficiency} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel 
                                        htmlFor="category" 
                                        value="Category"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    {!showNewCategoryInput ? (
                                        <select
                                            id="category"
                                            name="category"
                                            value={data.category}
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                                                isDark ? 'bg-gray-700 text-white border-gray-600' : ''
                                            }`}
                                            onChange={handleCategoryChange}
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                            <option value="new">+ Add new category</option>
                                        </select>
                                    ) : (
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <TextInput
                                                type="text"
                                                value={newCategory}
                                                className={`flex-1 rounded-none rounded-l-md ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                                placeholder="New category name"
                                                onChange={(e) => setNewCategory(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm leading-4 font-medium rounded-r-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={handleNewCategorySubmit}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                    {showNewCategoryInput && (
                                        <button
                                            type="button"
                                            className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                            onClick={() => setShowNewCategoryInput(false)}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <InputError message={errors.category} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel 
                                        htmlFor="order" 
                                        value="Display Order"
                                        className={isDark ? 'text-gray-200' : ''}
                                    />
                                    <TextInput
                                        id="order"
                                        type="number"
                                        name="order"
                                        min="0"
                                        value={data.order}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-white' : ''}`}
                                        onChange={(e) => setData('order', parseInt(e.target.value))}
                                        required
                                    />
                                    <InputError message={errors.order} className="mt-2" />
                                </div>

                                <div className="flex items-center">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="featured"
                                            checked={data.featured}
                                            onChange={(e) => setData('featured', e.target.checked)}
                                        />
                                        <span className={`ml-2 text-sm ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                                            Featured Skill
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-6">
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Update Skill
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;