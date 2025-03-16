import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Index = ({ messages }) => {
    const { theme } = useTheme();
    
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(route('admin.contact.destroy', id));
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <AdminLayout>
            <Head title="Contact Messages" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Contact Messages
                    </h1>
                    
                    {messages.data.length === 0 ? (
                        <div className={`overflow-hidden shadow-sm sm:rounded-lg p-6 ${
                            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'
                        }`}>
                            <p>No messages found.</p>
                        </div>
                    ) : (
                        <div className={`overflow-hidden shadow-sm sm:rounded-lg ${
                            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                        }`}>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}>
                                    <tr>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            Name
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            Subject
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            Date
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            Status
                                        </th>
                                        <th scope="col" className={`px-6 py-3 text-right text-xs font-medium uppercase tracking-wider ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${theme === 'dark' ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                                    {messages.data.map((message) => (
                                        <tr key={message.id} className={
                                            message.read 
                                                ? theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                                                : theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'
                                        }>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {message.name}
                                                </div>
                                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {message.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                                    {message.subject || '(No subject)'}
                                                </div>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {formatDate(message.created_at)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    message.read 
                                                        ? theme === 'dark' ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-800'
                                                        : theme === 'dark' ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                    {message.read ? 'Read' : 'New'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link
                                                    href={route('admin.contact.show', message.id)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    View
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(message.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                            {/* Pagination */}
                            <div className={`px-4 py-3 border-t sm:px-6 ${
                                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 flex justify-between sm:hidden">
                                        {messages.prev_page_url && (
                                            <Link 
                                                href={messages.prev_page_url} 
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                                                    theme === 'dark' 
                                                        ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                Previous
                                            </Link>
                                        )}
                                        {messages.next_page_url && (
                                            <Link 
                                                href={messages.next_page_url} 
                                                className={`ml-3 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                                                    theme === 'dark' 
                                                        ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                Next
                                            </Link>
                                        )}
                                    </div>
                                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                        <div>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Showing <span className="font-medium">{messages.from}</span> to <span className="font-medium">{messages.to}</span> of <span className="font-medium">{messages.total}</span> results
                                            </p>
                                        </div>
                                        <div>
                                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                {messages.links.map((link, i) => {
                                                    if (link.url === null) {
                                                        return (
                                                            <span 
                                                                key={i} 
                                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                                    theme === 'dark' 
                                                                        ? 'border-gray-700 bg-gray-800 text-gray-500'
                                                                        : 'border-gray-300 bg-white text-gray-500'
                                                                }`}
                                                            >
                                                                {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                                                            </span>
                                                        );
                                                    }
                                                    
                                                    return (
                                                        <Link
                                                            key={i}
                                                            href={link.url}
                                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                                theme === 'dark'
                                                                    ? link.active
                                                                        ? 'border-indigo-500 bg-indigo-900/50 text-indigo-300'
                                                                        : 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                                    : link.active
                                                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                                                        </Link>
                                                    );
                                                })}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;