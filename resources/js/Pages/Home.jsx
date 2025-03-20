import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';
import HeroSection from '../Components/HeroSection';
import ProjectsSection from '../Components/ProjectsSection';
import SkillsSection from '../Components/SkillsSection';
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection';

const Home = () => {
  const { skills } = usePage().props;
  
  return (
    <Layout title="Your Name - Portfolio">
      <Head>
        <meta name="description" content="Full-stack developer specializing in React, Laravel, and Inertia.js" />
        <meta name="keywords" content="developer, react, laravel, inertia, portfolio" />
      </Head>
     
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />      
    </Layout>
  );
};

export default Home;