import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative px-6 md:px-20 py-16 sm:py-28 h-[50vh] sm:h-[75vh] overflow-hidden">
      {/* Multiple glow elements with longer duration and lower opacity at dim state */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4ED634] blur-[100px] opacity-30 rounded-full animate-[glow_7.2s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute -top-4 -left-4 w-[450px] h-[450px] bg-[#4ED634] blur-[120px] opacity-20 rounded-full animate-[glow_7.2s_ease-in-out_infinite_0.6s] -z-20"></div>
      <div className="absolute -top-8 -left-8 w-[500px] h-[500px] bg-[#4ED634] blur-[140px] opacity-10 rounded-full animate-[glow_7.2s_ease-in-out_infinite_1.2s] -z-30"></div>
      
      {/* Gradient overlay for right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black -z-40"></div>
      
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white text-left">
          Your <span className="text-[#4ED634]">AI Journal</span> for Smarter Crypto Trading
        </h2>

        <p className="text-gray-300 text-md mb-8 text-left">
          Track your trades. Analyze performance. Build AI-driven strategies based on your data. One platform to dominate your trading edge.
        </p>

        <a href="/auth/signup">
          <button className="bg-[#4ED634] text-black font-bold px-8 py-4 rounded-md hover:bg-green-500 transition">
          Join Waitlist Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;