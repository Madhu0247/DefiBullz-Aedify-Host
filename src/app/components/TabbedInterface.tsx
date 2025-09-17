import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const TabbedInterface = () => {
  return (
    <section className="bg-[#000000] w-full overflow-hidden py-16 md:py-24">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
              Unlock Smarter Crypto Trading <br />
              with <span className="text-[#4ED634]">Journaling, <br />
              AI Insights & <br />
              Advanced Analytics</span>
            </h1>
          </div>
          
          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-400 text-md md:text-lg leading-relaxed">
              DefiBullz helps you log every move, uncover patterns, and get AI-powered insights to refine your strategy and boost performance — all in one intelligent platform.
            </p>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Box 1 */}
          <motion.div 
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#01273A]/60 hover:border-[#4ED634] transition-all duration-500 hover:shadow-[0_0_15px_rgba(78,214,52,0.3)]"
          >
            <div>
              <div className="w-full h-32 mb-6 relative">
                <Image
                  src="/WebsiteAssets/CoreViews1.png"
                  alt="Core Views"
                  width={200}
                  height={128}
                  className="mx-auto h-full w-auto object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Core Views on Trading
              </h3>
              <p className="text-gray-400 text-sm">
                Track your trades, analyze patterns, and make data-driven decisions to improve your performance.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#01273A]/60 hover:border-[#4ED634] transition-all duration-500 hover:shadow-[0_0_15px_rgba(78,214,52,0.3)]"
          >
            <div>
              <div className="w-full h-32 mb-6 relative">
                <Image
                  src="/WebsiteAssets/AdvancedAnalytics.png"
                  alt="AI Insights"
                  width={200}
                  height={128}
                  className="mx-auto h-full w-auto object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI-Powered Insights
              </h3>
              <p className="text-gray-400 text-sm">
                Get personalized recommendations and predictions based on your trading history and market trends.
              </p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="relative group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#01273A]/60 hover:border-[#4ED634] transition-all duration-500 hover:shadow-[0_0_15px_rgba(78,214,52,0.3)]"
          >
            <div>
              <div className="w-full h-32 mb-6 relative">
                <Image
                  src="/WebsiteAssets/AdvanceAnalytics2.png"
                  alt="Advanced Analytics"
                  width={200}
                  height={128}
                  className="mx-auto h-full w-auto object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Advanced Analytics
              </h3>
              <p className="text-gray-400 text-sm">
                Visualize your performance with interactive charts and detailed metrics to optimize your strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TabbedInterface;