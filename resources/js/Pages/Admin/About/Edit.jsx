import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

const Edit = ({ about }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    const { data, setData, post, processing, errors } = useForm({
        title: about.title || '',
        bio: about.bio || '',
        short_description: about.short_description || '',
        profile_image: null,
        experiences: Array.isArray(about.experiences) ? about.experiences : [],
        education: Array.isArray(about.education) ? about.education : [],
        testimonials: Array.isArray(about.testimonials) ? about.testimonials : [],
        certifications: Array.isArray(about.certifications) ? about.certifications : [],
        personal_info: about.personal_info || {},
        _method: 'put',
    });
    
    const [imagePreview, setImagePreview] = useState(about.profile_image ? `/storage/${about.profile_image}` : null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.about.update', about.id));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('profile_image', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };
    
    // Generic handler for array fields
    const handleArrayField = (field, action, index = null, key = null, value = null) => {
        const updated = [...(data[field] || [])];
        
        if (action === 'add') {
            const templates = {
                experiences: { title: '', company: '', period: '', description: '' },
                education: { degree: '', institution: '', period: '' },
                certifications: { name: '', issuer: '', date: '' },
                testimonials: { name: '', position: '', content: '' }
            };
            setData(field, [...updated, templates[field]]);
        } else if (action === 'update') {
            updated[index][key] = value;
            setData(field, updated);
        } else if (action === 'remove') {
            updated.splice(index, 1);
            setData(field, updated);
        }
    };
    
    // Render form field
    const renderField = (label, name, type = 'text', value, onChange, multiline = false) => (
        <div className="mb-4">
            <InputLabel htmlFor={name} value={label} className={isDark ? 'text-gray-300' : ''} />
            {multiline ? (
                <TextArea
                    id={name}
                    value={value}
                    className={`mt-1 block w-full ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : ''}`}
                    onChange={onChange}
                    rows={3}
                />
            ) : (
                <TextInput
                    id={name}
                    type={type}
                    value={value}
                    className={`mt-1 block w-full ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : ''}`}
                    onChange={onChange}
                />
            )}
            <InputError message={errors[name]} className="mt-2" />
        </div>
    );
    
    // Render array section
    const renderArraySection = (title, field, keys) => {
        // Ensure the field is an array
        const items = Array.isArray(data[field]) ? data[field] : [];
        
        return (
            <div className="mb-6">
                <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                    {title}
                </h3>
                
                {items.map((item, index) => (
                    <div key={index} className={`p-4 rounded-md mb-4 border ${isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
                        {keys.map(key => (
                            <div key={key.name} className="mb-2">
                                <InputLabel htmlFor={`${field}-${key.name}-${index}`} value={key.label} className={isDark ? 'text-gray-300' : ''} />
                                {key.multiline ? (
                                    <TextArea
                                        id={`${field}-${key.name}-${index}`}
                                        value={item[key.name] || ''}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : ''}`}
                                        onChange={(e) => handleArrayField(field, 'update', index, key.name, e.target.value)}
                                        rows={3}
                                    />
                                ) : (
                                    <TextInput
                                        id={`${field}-${key.name}-${index}`}
                                        type="text"
                                        value={item[key.name] || ''}
                                        className={`mt-1 block w-full ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : ''}`}
                                        onChange={(e) => handleArrayField(field, 'update', index, key.name, e.target.value)}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="mt-2 flex justify-end">
                            <button
                                type="button"
                                className={`px-3 py-1 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-sm font-medium rounded-md`}
                                onClick={() => handleArrayField(field, 'remove', index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                
                <button
                    type="button"
                    className={`px-4 py-2 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white text-sm font-medium rounded-md`}
                    onClick={() => handleArrayField(field, 'add')}
                >
                    Add {title}
                </button>
            </div>
        );
    };
    
    return (
        <AdminLayout>
            <Head title="Edit About Page" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h2 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Edit About Page
                        </h2>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="mb-6">
                                <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                                    General Information
                                </h3>
                                
                                {renderField('Title', 'title', 'text', data.title, (e) => setData('title', e.target.value))}
                                {renderField('Short Description', 'short_description', 'text', data.short_description, (e) => setData('short_description', e.target.value), true)}
                                {renderField('Bio', 'bio', 'text', data.bio, (e) => setData('bio', e.target.value), true)}
                                
                                <div className="mb-4">
                                    <InputLabel htmlFor="profile_image" value="Profile Image" className={isDark ? 'text-gray-300' : ''} />
                                    <div className="mt-1 flex items-center">
                                        {imagePreview && (
                                            <img src={imagePreview} alt="Profile Preview" className="h-16 w-16 object-cover rounded-md mr-4" />
                                        )}
                                        <input
                                            id="profile_image"
                                            type="file"
                                            className={`block w-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
                                            onChange={handleImageChange}
                                            accept="image/*"
                                        />
                                    </div>
                                    <InputError message={errors.profile_image} className="mt-2" />
                                </div>
                            </div>
                            
                            {renderArraySection('Experience', 'experiences', [
                                { name: 'title', label: 'Title' },
                                { name: 'company', label: 'Company' },
                                { name: 'period', label: 'Period' },
                                { name: 'description', label: 'Description', multiline: true }
                            ])}
                            
                            {renderArraySection('Education', 'education', [
                                { name: 'degree', label: 'Degree' },
                                { name: 'institution', label: 'Institution' },
                                { name: 'period', label: 'Period' }
                            ])}
                            
                            {renderArraySection('Certifications', 'certifications', [
                                { name: 'name', label: 'Name' },
                                { name: 'issuer', label: 'Issuer' },
                                { name: 'date', label: 'Date' }
                            ])}
                            
                            {renderArraySection('Testimonials', 'testimonials', [
                                { name: 'name', label: 'Name' },
                                { name: 'position', label: 'Position' },
                                { name: 'content', label: 'Content', multiline: true }
                            ])}
                            
                            <div className="mt-6 flex justify-end space-x-4">
                                <SecondaryButton as="a" href={route('admin.about.index')}>
                                    Cancel
                                </SecondaryButton>
                                
                                <PrimaryButton type="submit" disabled={processing} className={isDark ? 'bg-green-700 hover:bg-green-600' : ''}>
                                    {processing ? 'Saving...' : 'Save Changes'}
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