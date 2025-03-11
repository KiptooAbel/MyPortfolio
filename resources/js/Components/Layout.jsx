import React from 'react';
import { Head } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'Your Portfolio' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title={title} />
      
      <Header />
      
      <main className="flex-grow pt-16">  {/* Add padding-top to account for fixed header */}
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;