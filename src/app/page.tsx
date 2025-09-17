"use client";  // To indicate this is a client-side component

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import WebsiteHeader from './components/Header'; // Import WebsiteHeader
import HeroSection from './components/HeroSection';  // Adjusted path
import TabbedInterface from './components/TabbedInterface';  // Adjusted path
import FeaturesSection from './components/FeaturesSection';  // Adjusted path
import TabsSection from './components/TabsSection';  // Adjusted path
import AIInsightsSection from './components/AIInsightsSection'; // Adjusted path
import PartnersSection from './components/PartnersSection';  // Adjusted path
import Footer from './components/Footer'; // Adjusted path

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const WebsitePage = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div> {/* Added outer div from website/layout.tsx */}
      <WebsiteHeader /> {/* Added WebsiteHeader */}
      <main> {/* Added main tag from website/layout.tsx */}
        <motion.div 
          className="w-full overflow-x-hidden"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Hero section with full responsive styling */}
          <HeroSection />  {/* Hero section at the top of the page */}

          {/* Tabbed Interface Section */}
          <motion.div 
            className="bg-[#000000] "
            variants={fadeInUp}
          >
            <TabbedInterface />  {/* Adding the TabbedInterface */}
          </motion.div>

          {/* Features Section */}
          <motion.div 
            className="py-0 w-full"
            variants={fadeInUp}
          >
            <FeaturesSection />  {/* Add the FeaturesSection below the TabbedInterface */}
          </motion.div>

          {/* Tabs Section */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <TabsSection />  {/* Add the TabsSection below the AIInsightsSection */}
          </motion.div>

          {/* AI Insights Section */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <AIInsightsSection />  {/* Add the AIInsightsSection below the FeaturesSection */}
          </motion.div>

          {/* Partners Section */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <PartnersSection />  {/* Add the PartnersSection below the AIInsightsSection */}
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <Footer />  {/* Add the PartnersSection below the AIInsightsSection */}
          </motion.div>
        </motion.div>
      </main>
      {/* The empty footer from website/layout.tsx is omitted as page.tsx already has a Footer component */}
    </div>
  );
};

export default WebsitePage; 