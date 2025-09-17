// components/FeatureList.tsx

import React from 'react';
import Image from 'next/image';

const FeatureList = () => {
  return (
    <div className="bg-black text-white">
      {/* Centered Heading */}
      <div className="text-center py-8 md:py-16 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl mx-auto">
          Everything You Need to Thrive in <span className="text-[#4ED634]">Crypto Trading</span>
        </h1>
      </div>

      {/* Feature 1 */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between p-4 sm:p-6 md:p-12 lg:p-16 md:h-auto lg:h-[600px] xl:h-[680px]">
        {/* Image Section - Full width on mobile, 55% on desktop */}
        <div className="w-full md:w-[55%] md:order-2 text-center flex items-center justify-center mb-6 md:mb-0 px-4">
          <Image 
            src="/WebsiteAssets/Feature/featurelist1.png" 
            alt="Feature 1: Smart Trade Logging" 
            width={600} 
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Text Section - Full width on mobile, 40% on desktop */}
        <div className="w-full md:w-[42%] md:order-1 space-y-3 sm:space-y-4 md:space-y-6 bg-[#000000] p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-tl-3xl md:rounded-bl-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-left leading-snug sm:leading-relaxed">
            Track, Analyze, and Improve with Smart Trade Logging
          </h2>
          <p className="text-xs sm:text-sm text-left text-white opacity-70 max-w-md">
            Log trades effortlessly, add notes, and let AI uncover insights to refine your strategy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-left gap-4 sm:gap-6 md:gap-8 mt-20">
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#4ED634] text-white rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Log Detailed Trades
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Attach Notes & Media
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              AI Trade Insights
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Smart Search & Filters
            </button>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between p-4 sm:p-6 md:p-12 lg:p-16 md:h-auto lg:h-[600px] xl:h-[680px] mt-8 md:mt-4">
        {/* Image Section - Full width on mobile, 55% on desktop */}
        <div className="w-full md:w-[55%] md:order-1 text-center flex items-center justify-center mb-6 md:mb-0 px-4">
          <Image 
            src="/WebsiteAssets/featurelist-two.png" 
            alt="Feature 2: AI-Powered Trading Strategies" 
            width={600} 
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Text Section - Full width on mobile, 40% on desktop */}
        <div className="w-full md:w-[42%] md:order-2 space-y-3 sm:space-y-4 md:space-y-6 bg-[#000000] p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-tr-3xl md:rounded-br-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-left leading-snug sm:leading-relaxed">
            Create and Test Your Own AI-Powered Trading Strategies
          </h2>
          <p className="text-xs sm:text-sm text-left text-white opacity-70 max-w-md">
            Design, test, and refine your own AI-powered trading strategies with full control.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-left gap-4 sm:gap-6 md:gap-8 mt-20">
          <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
          Custom Strategy Builder
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Backtesting Reports
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#4ED634] text-white rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Strategy Optimization
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Automated Execution
            </button>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between p-4 sm:p-6 md:p-12 lg:p-16 md:h-auto lg:h-[600px] xl:h-[680px] mt-8 md:mt-4 mb-8">
        {/* Image Section - Full width on mobile, 55% on desktop */}
        <div className="w-full md:w-[55%] md:order-2 text-center flex items-center justify-center mb-6 md:mb-0 px-4">
          <Image 
            src="/WebsiteAssets/Feature/featurelist3.png" 
            alt="Feature 3: Trading Data Insights" 
            width={600} 
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Text Section - Full width on mobile, 40% on desktop */}
        <div className="w-full md:w-[42%] md:order-1 space-y-3 sm:space-y-4 md:space-y-6 bg-[#000000] p-5 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-tl-3xl md:rounded-bl-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-left leading-snug sm:leading-relaxed">
            Turn Your Trading Data Into Actionable Insights
          </h2>
          <p className="text-xs sm:text-sm text-left text-white opacity-70 max-w-md">
            Track your wins, losses, and trends with AI-powered charts and analytics.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-left gap-4 sm:gap-6 md:gap-8 mt-20">
          <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
          Interactive Reports
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Pattern Detection
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#4ED634] text-white rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Strategy Comparison
            </button>
            <button className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 bg-[#080A0D] text-gray-400 rounded-full truncate max-w-[200px] sm:max-w-[200px] w-[45%]">
              Trend Monitoring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;