import React from 'react';
import Image from 'next/image';

const PartnersSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 md:py-24 px-6 md:px-24 bg-cover bg-center bg-[#000000] gap-8">
      <div className="w-full md:w-3/5 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-[600px] leading-[1.4]">
          Ready to take your trading to the next level?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-white opacity-75 max-w-[600px] leading-relaxed">
          The one tool that lets you do everything you need to improve your trading strategy and become a profitable trader. Get started today.
        </p>

        {/* Button */}
        <a 
          href="/auth/signup" 
          className="inline-block bg-[#4ED634] text-[#11182B] py-3 px-8 rounded-md text-md font-medium hover:bg-green-500 transition-colors duration-200 mb-8 sm:mb-4"
        >
          Join Waitlist Now
        </a>
      </div>

      {/* Right section with the Partners.png */}
      <div className="w-full md:w-2/5 mt-8flex justify-center items-center">
        <div className="relative w-full max-w-[500px] aspect-[5/3]">
          <Image
            src="/WebsiteAssets/Partners1.png"
            alt="Partners"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;