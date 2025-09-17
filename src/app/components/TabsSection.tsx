"use client";  // To indicate this is a client-side component

import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const TabsSection = () => {
  return (
    <section className="bg-[#000000] py-20 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
            Elevate Your Trading with{' '}
            <motion.span 
              className="text-[#4ED634] inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Smart Insights
            </motion.span>
          </h2>
          <p className="text-md text-gray-400 max-w-3xl mx-auto">
            Transform your trading journey with powerful analytics, real-time tracking, and AI-driven insights
          </p>
        </motion.div>

        {/* Main Dashboard Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-32"
        >
          <div className="flex flex-col">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full relative group mb-40"
            >
              <Image
                src="/WebsiteAssets/trade_journal_demo.png"
                alt="Unified Trading Dashboard"
                className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-500 ease-out group-hover:shadow-[0_0_30px_rgba(78,214,52,0.2)]"
                width={1000}
                height={600}
              />
            </motion.div>
            <div className="max-w-3xl py-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-medium text-white mb-4"
              >
                Your Complete Trading{' '}
                <span className="text-[#4ED634]">Command Center</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-md text-gray-400 leading-relaxed max-w-2xl"
              >
                Access all your trades, analytics, and insights in one powerful dashboard. 
                Track performance, monitor positions, and make informed decisions with our 
                comprehensive suite of trading tools.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Mobile and Analytics Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Mobile Experience */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="bg-[#0F1117] rounded-3xl p-8 transition-all duration-500 ease-out ]"
          >
            <div className="aspect-video relative mb-8 overflow-hidden rounded-2xl group">
              <Image
                src="/WebsiteAssets/imagepro1.png"
                alt="Mobile Trading Experience"
                className="rounded-2xl shadow-lg transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">
              Trading on the{' '}
              <motion.span 
                className="text-[#4ED634]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Go
              </motion.span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Never miss a trading opportunity with our mobile companion app. 
              Get instant notifications, track your positions, and access your 
              entire trading dashboard from anywhere in the world.
            </p>
          </motion.div>

          {/* Analytics Insights */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="bg-[#0F1117] rounded-3xl p-8 transition-all duration-500 ease-out ]"
          >
            <div className="aspect-video relative mb-8 overflow-hidden rounded-2xl group">
              <Image
                src="/WebsiteAssets/imagepro2.png"
                alt="Trading Analytics"
                className="rounded-2xl shadow-lg transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">
              Data-Driven{' '}
              <motion.span 
                className="text-[#4ED634]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Success
              </motion.span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Transform your trading strategy with powerful analytics. Understand your 
              patterns, identify winning strategies, and continuously improve your 
              performance with AI-powered insights.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-4xl font-medium text-white mb-6">
            Ready to Transform Your{' '}
            <motion.span 
              className="text-[#4ED634]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Trading Journey?
            </motion.span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of traders who have elevated their trading game with our comprehensive platform.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#4ED634] text-black font-semibold py-4 px-8 rounded-xl transition-all duration-500 ease-out hover:bg-[#3CB521] hover:shadow-[0_0_20px_rgba(78,214,52,0.4)]"
          >
            Get Started Now
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TabsSection;