import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import {
    Menu, X, LayoutGrid, Users, FileText, Mail, User,
    Bell, ChevronRight, Star, Code
} from 'lucide-react';

const SidebarLink = ({ href, icon: Icon, active, children }) => (
    <Link
        href={href}
        className={`
            flex items-center space-x-3 px-4 py-3.5 rounded-xl text-sm font-medium
            transition-all duration-300 ease-in-out group
            hover:scale-102 transform
            ${active 
                ? 'bg-white/20 text-white' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }
        `}
    >
        <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
        <span className="font-medium">{children}</span>
        {active && (
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
        )}
    </Link>
);

function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigationItems = [
        { name: 'Projects', href: route('projects.index'), icon: LayoutGrid },
        { name: 'Skills', href: route('projects.index'), icon: Code },
        { name: 'About', href: route('projects.index'), icon: User },
        { name: 'Contact', href: route('projects.index'), icon: Mail }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-xl border-b border-gray-700/50 shadow-lg">
                <div className="px-4 mx-auto max-w-[2000px]">
                    <div className="flex h-16 items-center justify-between">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none transition-colors duration-200"
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
                            <button className="p-2 rounded-xl text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                                <Bell className="h-5 w-5" />
                            </button>

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center gap-3 rounded-lg hover:bg-gray-700/50 px-3 py-2">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                            <span className="text-sm font-medium text-white">
                                                {user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="hidden md:block text-left">
                                            <div className="text-sm font-medium text-gray-200">{user.name}</div>
                                            <div className="text-xs text-gray-400">Developer</div>
                                        </div>
                                        <ChevronRight className="h-4 w-4 text-gray-400" />
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
                w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg
                border-r border-gray-700/50
                transition-all duration-300 ease-in-out
                lg:translate-x-0
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
                    <div className="border-t border-gray-700/30 p-4">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>© 2025 Portfolio</span>
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
                    <header className="bg-gray-800/90 backdrop-blur-xl shadow-md border-b border-gray-700/50">
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