import React, { forwardRef, useEffect, useRef } from 'react';
import { useTheme } from '@/Context/ThemeContext';

const TextArea = forwardRef(function TextArea(
    { className = '', isFocused = false, ...props },
    ref
) {
    const textareaRef = useRef(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        if (isFocused) {
            textareaRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                isDark ? 'bg-gray-700 text-white border-gray-600' : ''
            } ${className}`}
            ref={ref || textareaRef}
        />
    );
});

export default TextArea;