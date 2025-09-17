"use client"; // to indicate this is a client-side component

import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaCog, FaRocket } from 'react-icons/fa';

const AIInsightsSection = () => {
  const processSteps = [
    {
      title: "Data Analysis",
      description: "Our AI analyzes your historical trades, identifying patterns in your winning and losing positions to establish your current trading baseline.",
      icon: FaChartLine,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Pattern Recognition",
      description: "Advanced algorithms detect your most successful trading setups and potential areas for improvement in your strategy.",
      icon: FaLightbulb,
      gradient: "from-[#4ED634]/20 to-emerald-500/20"
    },
    {
      title: "Strategy Refinement",
      description: "Based on the analysis, receive specific recommendations to enhance your entry points, position sizing, and risk management.",
      icon: FaCog,
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Implementation",
      description: "Get clear, actionable steps to implement the improved strategy, with AI monitoring your progress and suggesting real-time adjustments.",
      icon: FaRocket,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#4ED634]/5 rounded-full blur-3xl -top-48 -right-48"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -bottom-48 -left-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8">
            Transform Your Trading Strategy with{' '}
            <span className="text-[#4ED634] relative">
              AI-Powered Analysis
              <div className="absolute w-[40%] h-1 bg-[#4ED634] bottom-[-8px] left-0 rounded-full"></div>
            </span>
          </h2>
          <p className="text-md text-gray-400 max-w-3xl mx-auto">
            Our intelligent system analyzes your trading history to help you build and refine 
            strategies that align with your goals and risk tolerance
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-3xl p-8 relative group overflow-hidden border border-[#1a1a1a]`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#171C2C] rounded-2xl mb-3 group-hover:bg-[#4ED634]/10 transition-colors duration-300">
                        <Icon className="text-[#4ED634] text-2xl group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="h-full w-0.5 bg-gradient-to-b from-[#4ED634]/20 to-transparent"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#4ED634] text-sm font-medium bg-[#4ED634]/10 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-medium text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl pl-6 sm:pl-12 pr-0 min-h-[300px] sm:h-[400px] mt-20 sm:mt-40 relative group overflow-hidden flex flex-col md:flex-row items-center transition-all duration-300 border border-[#1a1a1a]"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 py-8 sm:py-0 w-full">
            <div className="w-full md:w-1/2 pr-6 sm:pr-0">
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 sm:mb-6 relative inline-block">
                Continuous Learning & Improvement
                <div className="absolute w-[30%] h-1 bg-[#4ED634] bottom-[-12px] sm:bottom-[-20px] left-0 rounded-full"></div>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 mt-6 sm:mt-8">
                Our AI system continuously learns from your trading activity, providing 
                increasingly refined insights and strategy adjustments. This creates a 
                feedback loop that helps you evolve and adapt your trading approach based 
                on market conditions and your performance.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-[#4ED634] text-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#3CB521] transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 text-sm sm:text-base">Start Improving Your Strategy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </div>
            <div className="flex md:w-1/2 h-full items-center justify-end">
              <div className="relative group w-full h-full hidden sm:block">
                <Image
                  src="/WebsiteAssets/bullzpro1.png"
                  alt="AI Strategy Analysis Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl transition-transform duration-300 object-cover"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInsightsSection;