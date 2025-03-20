import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import {
    Menu, X, LayoutGrid, Users, FileText, Mail, User,
    Bell, ChevronRight, Star, Code, Moon, Sun,FolderGit2
} from 'lucide-react';
import { useTheme } from '@/Context/ThemeContext';

const SidebarLink = ({ href, icon: Icon, active, children }) => {
    const { theme } = useTheme();
    
    return (
        <Link
            href={href}
            className={`
                flex items-center space-x-3 px-4 py-3.5 rounded-xl text-sm font-medium
                transition-all duration-300 ease-in-out group
                hover:scale-102 transform
                ${active 
                    ? theme === 'dark' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    : theme === 'dark'
                        ? 'text-gray-300 hover:bg-white/10 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
            `}
        >
            <Icon className={`h-5 w-5 ${
                active 
                    ? theme === 'dark' ? 'text-white' : 'text-gray-900' 
                    : theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
            }`} />
            <span className="font-medium">{children}</span>
            {active && (
                <div className={`ml-auto w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`} />
            )}
        </Link>
    );
};

function AuthenticatedLayout({ header, children }) {
    const { theme, toggleTheme } = useTheme();
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigationItems = [
        { name: 'Projects', href: route('admin.projects.index'), icon: FolderGit2 },
        { name: 'Skills', href: route('admin.skills.index'), icon: Code },
        { name: 'About', href: route('admin.about.index'), icon: User },
        { name: 'Contact', href: route('admin.contact.index'), icon: Mail }
    ];

    return (
        <div className={`min-h-screen ${
            theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        } transition-colors duration-300`}>
            {/* Top Navigation Bar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-lg transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gray-800/90 border-b border-gray-700/50' 
                    : 'bg-white/90 border-b border-gray-200/50'
            }`}>
                <div className="px-4 mx-auto max-w-[2000px]">
                    <div className="flex h-16 items-center justify-between">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className={`lg:hidden inline-flex items-center justify-center rounded-xl p-2 transition-colors duration-200 ${
                                theme === 'dark' 
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                        >
                            {isSidebarOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>

                        {/* Logo */}
                        <div className="flex lg:flex-1 items-center space-x-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                My Portfolio
                            </span>
                        </div>
                        
                        {/* Right side items */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle */}
                            <button 
                                onClick={toggleTheme}
                                className={`p-2 rounded-xl transition-colors duration-200 ${
                                    theme === 'dark' 
                                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                }`}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </button>

                            <button className={`p-2 rounded-xl transition-colors duration-200 ${
                                theme === 'dark' 
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }`}>
                                <Bell className="h-5 w-5" />
                            </button>

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                        theme === 'dark' 
                                            ? 'hover:bg-gray-700/50' 
                                            : 'hover:bg-gray-200/50'
                                    }`}>
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                            <span className="text-sm font-medium text-white">
                                                {user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="hidden md:block text-left">
                                            <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                                {user.name}
                                            </div>
                                            <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Developer
                                            </div>
                                        </div>
                                        <ChevronRight className={`h-4 w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside className={`
                fixed top-16 bottom-0 left-0 z-40
                w-64 shadow-lg
                border-r
                transition-all duration-300 ease-in-out
                lg:translate-x-0
                ${theme === 'dark' 
                    ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700/50' 
                    : 'bg-gradient-to-b from-white to-gray-50 border-gray-200/50'
                }
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto px-3 py-6 space-y-2">
                        {/* Navigation */}
                        <nav className="space-y-1">
                            {navigationItems.map((item) => (
                                <SidebarLink
                                    key={item.name}
                                    href={item.href}
                                    icon={item.icon}
                                    active={route().current(item.href.split('.').pop())}
                                >
                                    {item.name}
                                </SidebarLink>
                            ))}
                        </nav>
                    </div>

                    {/* Sidebar footer */}
                    <div className={`border-t p-4 ${
                        theme === 'dark' ? 'border-gray-700/30' : 'border-gray-200/30'
                    }`}>
                        <div className="flex items-center justify-between text-sm">
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>© 2025 Portfolio</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="lg:pl-64 pt-16 min-h-screen">
                {header && (
                    <header className={`backdrop-blur-xl shadow-md border-b transition-colors duration-300 ${
                        theme === 'dark' 
                            ? 'bg-gray-800/90 border-gray-700/50' 
                            : 'bg-white/90 border-gray-200/50'
                    }`}>
                        <div className="px-6 py-6">
                            {header}
                        </div>
                    </header>
                )}

                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default AuthenticatedLayout;