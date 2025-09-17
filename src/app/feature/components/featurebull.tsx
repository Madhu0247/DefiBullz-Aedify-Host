import React from 'react';
import Image from 'next/image';

const FeatureBull = () => {
  return (
    <div
    className="bg-black"
      // className="relative bg-cover bg-center h-[70vh] sm:min-h-screen w-full overflow-hidden"
      // style={{ backgroundImage: 'url(/WebsiteAssets/Feature/ai_bg.png)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-20 md:py-0 max-w-6xl mx-auto">
        {/* Main Text with Green Background */}
        <div className="w-full max-w-4xl py-8 sm:py-20">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-black bg-[#4ED634] rounded-lg px-3 sm:px-6 md:px-10 lg:px-20 
           py-2 sm:py-3 md:py-4 mb-4 sm:mb-10 md:mb-16 lg:mb-20 mx-auto inline-block">
            Do not leave your trades to guesswork. Let AI help you trade smarter.
          </h1>
        </div>

        {/* Description Text with 60% opacity */}
        <p className="text-xs sm:text-sm md:text-base lg:text-md opacity-60 max-w-3xl mb-4 sm:mb-12 md:mb-16 lg:mb-24">
          The future of trading is AI-driven, data-backed, and fully optimized. Our platform gives you the tools, insights, and automation you need to make better decisions, refine your strategies, and increase your profitability.
        </p>

        {/* BULLZ.AI Image */}
        <div className="mt-2 sm:mt-6 mb-4 sm:mb-8 md:mb-10 lg:mb-12 w-full max-w-3xl">
          <Image 
            src="/WebsiteAssets/Feature/bullz-ai-logo.png" 
            alt="BULLZ.AI" 
            className="mx-auto" 
            width={600}
            height={150}
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
        </div>

        {/* Get Started Button */}
        <button className="mt-2 sm:mt-6 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#4ED634] text-black hover:bg-[#3ab028] transition-colors duration-300 text-sm sm:text-base font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ED634]">
        Join Waitlist Now
        </button>
      </div>
    </div>
  );
};

export default FeatureBull;