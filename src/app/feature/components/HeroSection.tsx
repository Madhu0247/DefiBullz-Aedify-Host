import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Solid color background for mobile */}
        <div className="absolute inset-0 bg-[#4ED634] md:hidden w-full h-full"></div>
        {/* Image only visible on md and larger screens */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="/WebsiteAssets/Feature/featureHero.png"
            alt="Feature Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-end h-full text-black px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-xl text-left space-y-6 sm:space-y-10 p-6 sm:p-8 rounded-md mt-0 sm:mt-[-20px]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ lineHeight: '1.2' }}>
            Your All-in-One <span className="text-[#ffffff]">AI Trading</span> Companion
          </h1>
          <p className="text-base sm:text-xl text-black mb-4 sm:mb-6">
            Everything You Need to Trade Smarter, in One Powerful Platform
          </p>
          <p className="text-black text-sm sm:text-base mb-8 sm:mb-10">
            Take your trading to the next level with cutting-edge AI-driven tools designed to help you track, analyze, and optimize every move.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#000000] text-white font-bold rounded-md hover:bg-green-500 transition text-base sm:text-md">
           Join Waitlist Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;