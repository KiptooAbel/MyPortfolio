import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Show = ({ message }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(route('admin.contact.destroy', message.id));
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <AdminLayout>
            <Head title={message.subject || 'Contact Message'} />
            
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex justify-between items-center">
                        <Link
                            href={route('admin.contact.index')}
                            className={`${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                        >
                            &larr; Back to all messages
                        </Link>
                        
                        <button
                            onClick={handleDelete}
                            className={`px-4 py-2 ${isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-red-700 focus:ring-offset-gray-800' : 'focus:ring-red-500'}`}
                        >
                            Delete Message
                        </button>
                    </div>
                    
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className={`text-lg leading-6 font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                {message.subject || '(No subject)'}
                            </h3>
                            <p className={`mt-1 max-w-2xl text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {formatDate(message.created_at)}
                            </p>
                        </div>
                        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                            <dl>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        From
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {message.name}
                                    </dd>
                                </div>
                                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Email
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        {message.email}
                                    </dd>
                                </div>
                                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Status
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            message.read 
                                                ? (isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') 
                                                : (isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800')
                                        }`}>
                                            {message.read ? 'Read' : 'New'}
                                        </span>
                                    </dd>
                                </div>
                                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        Message
                                    </dt>
                                    <dd className={`mt-1 text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'} sm:mt-0 sm:col-span-2 whitespace-pre-wrap`}>
                                        {message.message}
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