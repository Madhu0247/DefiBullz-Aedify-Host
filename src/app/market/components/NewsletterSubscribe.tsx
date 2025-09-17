"use client";

import Image from 'next/image';

const NewsletterSubscribe = () => {
  return (
    <div className=" bg-[#0F1116] w-[100vw] relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171C2C] to-transparent"></div>

        <div className="relative p-12 container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="lg:w-1/2 z-10">
            <h2 className="text-white text-3xl font-bold mb-4">
              Stay on top of crypto. All the time, any time.
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Please keep me updated by email with the latest crypto news, research findings, reward
              programs, event updates, coin listings and more information from Live Coin Watch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="flex-grow px-4 py-3 rounded-lg bg-[#1E2330] text-white text-sm border border-gray-700 focus:outline-none focus:border-[#4ED634]"
              />
              <button className="px-8 py-3 bg-[#4ED634] text-white font-medium rounded-lg text-sm hover:bg-[#3154B7] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right side vector image */}
          <div className="lg:w-1/2 flex justify-end z-10 mt-8 lg:mt-0 h-full">
            <div className="w-full max-w-md relative">
              <Image
                src="/WebsiteAssets/market/Newsletter.svg"
                alt="Crypto newsletter illustration"
                width={500}
                height={500}
                className="object-cover w-full h-full scale-145"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe; 