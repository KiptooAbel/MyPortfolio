import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check for system preference or stored preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            // Return saved theme, or system preference, or default to dark
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // Default theme
    });

    // Update theme when changed
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Save preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);