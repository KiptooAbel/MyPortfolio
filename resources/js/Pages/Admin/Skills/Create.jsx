import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import TextArea from '@/Components/TextArea';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({ categories }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [newCategory, setNewCategory] = useState('');
    const [showNewCategory, setShowNewCategory] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        icon: '',
        description: '',
        proficiency: 0,
        category: categories.length > 0 ? categories[0] : '',
        order: 0,
        featured: false
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // If creating a new category, use that value
        if (showNewCategory && newCategory) {
            setData('category', newCategory);
        }
        
        post(route('admin.skills.store'), {
            onSuccess: () => reset()
        });
    };
    
    return (
        <AdminLayout>
            <Head title="Create Skill" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Create New Skill
                        </h2>
                        
                        <Link
                            href={route('admin.skills.index')}
                            className={`px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'text-gray-200 focus:ring-gray-500 focus:ring-offset-gray-800' : 'text-gray-700 focus:ring-gray-500'}`}
                        >
                            Back to Skills
                        </Link>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg p-6`}>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <InputLabel htmlFor="name" value="Name" className={isDark ? 'text-gray-300' : ''} />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : ''}`}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                
                                {/* Icon */}
                                <div>
                                    <InputLabel htmlFor="icon" value="Icon (Font Awesome class)" className={isDark ? 'text-gray-300' : ''} />
                                    <TextInput
                                        id="icon"
                                        type="text"
                                        name="icon"
                                        value={data.icon}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : ''}`}
                                        onChange={(e) => setData('icon', e.target.value)}
                                        placeholder="fa-solid fa-code"
                                    />
                                    <InputError message={errors.icon} className="mt-2" />
                                </div>
                                
                                {/* Category Selection */}
                                <div>
                                    <InputLabel htmlFor="category" value="Category" className={isDark ? 'text-gray-300' : ''} />
                                    {!showNewCategory ? (
                                        <>
                                            <div className="flex items-center">
                                                <select
                                                    id="category"
                                                    name="category"
                                                    value={data.category}
                                                    className={`mt-1 block w-full rounded-md shadow-sm ${
                                                        isDark 
                                                            ? 'bg-gray-700 text-gray-300 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500' 
                                                            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                                                    }`}
                                                    onChange={(e) => setData('category', e.target.value)}
                                                    disabled={showNewCategory}
                                                >
                                                    {categories.map((category) => (
                                                        <option key={category} value={category}>
                                                            {category}
                                                        </option>
                                                    ))}
                                                </select>
                                                <button
                                                    type="button"
                                                    className={`ml-2 px-2 py-2 ${isDark ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white text-xs rounded-md`}
                                                    onClick={() => setShowNewCategory(true)}
                                                >
                                                    New
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center">
                                                <TextInput
                                                    id="newCategory"
                                                    type="text"
                                                    name="newCategory"
                                                    value={newCategory}
                                                    className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : ''}`}
                                                    onChange={(e) => setNewCategory(e.target.value)}
                                                    placeholder="Enter new category"
                                                    autoFocus
                                                />
                                                <button
                                                    type="button"
                                                    className={`ml-2 px-2 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-xs rounded-md ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                                    onClick={() => {
                                                        setShowNewCategory(false);
                                                        setNewCategory('');
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </>
                                    )}
                                    <InputError message={errors.category} className="mt-2" />
                                </div>
                                
                                {/* Order */}
                                <div>
                                    <InputLabel htmlFor="order" value="Order" className={isDark ? 'text-gray-300' : ''} />
                                    <TextInput
                                        id="order"
                                        type="number"
                                        name="order"
                                        value={data.order}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : ''}`}
                                        onChange={(e) => setData('order', e.target.value)}
                                        min="0"
                                    />
                                    <InputError message={errors.order} className="mt-2" />
                                </div>
                                
                                {/* Proficiency */}
                                <div className="md:col-span-2">
                                    <InputLabel htmlFor="proficiency" value={`Proficiency: ${data.proficiency}%`} className={isDark ? 'text-gray-300' : ''} />
                                    <input
                                        id="proficiency"
                                        type="range"
                                        name="proficiency"
                                        min="0"
                                        max="100"
                                        value={data.proficiency}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('proficiency', e.target.value)}
                                    />
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                                        <div 
                                            className="bg-blue-600 h-2.5 rounded-full" 
                                            style={{ width: `${data.proficiency}%` }}
                                        ></div>
                                    </div>
                                    <InputError message={errors.proficiency} className="mt-2" />
                                </div>
                                
                                {/* Description */}
                                <div className="md:col-span-2">
                                    <InputLabel htmlFor="description" value="Description" className={isDark ? 'text-gray-300' : ''} />
                                    <TextArea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : ''}`}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>
                                
                                {/* Featured */}
                                <div className="md:col-span-2">
                                    <div className="flex items-center">
                                        <Checkbox
                                            id="featured"
                                            name="featured"
                                            checked={data.featured}
                                            onChange={(e) => setData('featured', e.target.checked)}
                                            className={isDark ? 'border-gray-600' : ''}
                                        />
                                        <InputLabel htmlFor="featured" value="Featured Skill" className={`ml-2 ${isDark ? 'text-gray-300' : ''}`} />
                                    </div>
                                    <InputError message={errors.featured} className="mt-2" />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-end mt-6">
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Create Skill
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Create;