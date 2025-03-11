import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Components/Layout';
import HeroSection from '../Components/HeroSection';
import ProjectsSection from '../Components/ProjectsSection';
import SkillsSection from '../Components/SkillsSection';
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection';

const Home = () => {
  return (
    <Layout title="Your Name - Portfolio">
      <Head>
        <meta name="description" content="Full-stack developer specializing in React, Laravel, and Inertia.js" />
        <meta name="keywords" content="developer, react, laravel, inertia, portfolio" />
      </Head>
      
      <HeroSection />
      <ProjectsSection />
      <SkillsSection/>
      <AboutSection/>
      <ContactSection/>
      {/* Additional sections will be added here in the next iteration */}
      {/* We'll add Projects, Skills, About, Contact sections next */}
      
    </Layout>
  );
};

export default Home;