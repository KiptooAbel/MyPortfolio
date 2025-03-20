import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AuthenticatedLayout';
import { useTheme } from '@/Context/ThemeContext';

const Dashboard = ({ stats }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <AdminLayout>
            <Head title="Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                            Portfolio Dashboard
                        </h2>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Projects Stats */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
                            <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                                Projects
                            </h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        {stats.projects.total}
                                    </p>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Total Projects
                                    </p>
                                </div>
                                <div className={`px-3 py-1 text-sm rounded-full ${
                                    isDark ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'
                                }`}>
                                    {stats.projects.featured} Featured
                                </div>
                            </div>
                        </div>

                        {/* Skills Stats */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
                            <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                                Skills
                            </h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        {stats.skills.total}
                                    </p>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Total Skills
                                    </p>
                                </div>
                                <div className={`px-3 py-1 text-sm rounded-full ${
                                    isDark ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-800'
                                }`}>
                                    {stats.skills.categories} Categories
                                </div>
                            </div>
                        </div>

                        {/* Messages Stats */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
                            <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                                Messages
                            </h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        {stats.messages.unread}
                                    </p>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Unread Messages
                                    </p>
                                </div>
                                <div className={`px-3 py-1 text-sm rounded-full ${
                                    stats.messages.unread > 0 
                                        ? (isDark ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-800')
                                        : (isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800')
                                }`}>
                                    {stats.messages.unread > 0 ? 'Action Needed' : 'All Read'}
                                </div>
                            </div>
                        </div>

                        {/* Profile Completeness */}
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
                            <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                                Profile
                            </h3>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Completeness
                                    </p>
                                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {stats.profile.completeness}%
                                    </p>
                                </div>
                                <div className={`w-full bg-gray-200 rounded-full h-2.5 ${isDark ? 'bg-gray-700' : ''}`}>
                                    <div 
                                        className="bg-blue-600 h-2.5 rounded-full" 
                                        style={{ width: `${stats.profile.completeness}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className={`text-lg leading-6 font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                Recent Activity
                            </h3>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-700">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {stats.recentActivity.length > 0 ? (
                                    stats.recentActivity.map((activity, index) => (
                                        <li key={index} className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                                        activity.type === 'project' 
                                                            ? (isDark ? 'bg-blue-800' : 'bg-blue-100') 
                                                            : activity.type === 'skill'
                                                                ? (isDark ? 'bg-purple-800' : 'bg-purple-100')
                                                                : (isDark ? 'bg-yellow-800' : 'bg-yellow-100')
                                                    }`}>
                                                        <span className={`text-sm font-medium ${
                                                            activity.type === 'project' 
                                                                ? (isDark ? 'text-blue-200' : 'text-blue-800') 
                                                                : activity.type === 'skill'
                                                                    ? (isDark ? 'text-purple-200' : 'text-purple-800')
                                                                    : (isDark ? 'text-yellow-200' : 'text-yellow-800')
                                                        }`}>
                                                            {activity.type.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className={`text-sm font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                                            {activity.action}
                                                        </p>
                                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            {activity.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {activity.date}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className={`px-4 py-5 sm:px-6 text-center ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                        No recent activity found.
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;