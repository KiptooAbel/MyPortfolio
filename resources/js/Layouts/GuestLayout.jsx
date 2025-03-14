import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-6 sm:justify-center sm:pt-0">
            <div className="mb-6">
                <Link href="/">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        My Portfolio
                    </div>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 shadow-lg shadow-indigo-500/10">
                {children}
            </div>
        </div>
    );
}