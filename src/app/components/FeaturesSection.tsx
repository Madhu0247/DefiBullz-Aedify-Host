import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-[#000000] w-full overflow-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-10 sm:mb-4 md:mb-6 lg:mb-8 transition-all duration-300">
            Why DefiBullz<span className="text-[#4ED634]">.AI</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto font-light px-4 transition-all duration-300">
            Your all-in-one trading companion that combines journaling, AI insights, and advanced analytics for smarter trading decisions.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32 transition-all duration-300">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24 transition-all duration-300">
            <div className="flex-1 mb-10 sm:mb-8 lg:mb-0 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 transition-all duration-300">
                Smart Journaling
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl transition-all duration-300">
                More than just logging trades - our platform helps you document strategies, track performance metrics, and identify patterns in your trading behavior with AI-powered insights.
              </p>
            </div>
            <div className="flex flex-row sm:flex-row gap-2 sm:gap-6 w-full lg:w-auto px-2 sm:px-0 transition-all duration-300">
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/SmartJournaling3.png"
                  alt="Smart Journaling Interface"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/SmartJournaling2.png"
                  alt="Smart Journaling Features"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 transition-all duration-300"></div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24 transition-all duration-300">
            <div className="flex-1 mb-10 sm:mb-8 lg:mb-0 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 transition-all duration-300">
                Performance Tracking
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl transition-all duration-300">
                Comprehensive analytics dashboard with real-time performance metrics, risk assessment, and detailed reports to help you make data-driven trading decisions.
              </p>
            </div>
            <div className="flex flex-row sm:flex-row gap-2 sm:gap-6 w-full lg:w-auto px-2 sm:px-0 transition-all duration-300">
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/PerformanceTracking3.png"
                  alt="Performance Tracking Interface"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/PerformanceTracking4.png"
                  alt="Performance Tracking Features"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 transition-all duration-300"></div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24 transition-all duration-300">
            <div className="flex-1 mb-10 sm:mb-8 lg:mb-0 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 transition-all duration-300">
                AI Analysis
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl transition-all duration-300">
                Our advanced AI analyzes your trading history to provide personalized insights, identify successful patterns, and suggest improvements to enhance your strategy.
              </p>
            </div>
            <div className="flex flex-row sm:flex-row gap-2 sm:gap-6 w-full lg:w-auto px-2 sm:px-0 transition-all duration-300">
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/AIAnalysis1.png"
                  alt="AI Analysis Interface"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
              <div className="group w-[49%] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] aspect-[3/4] sm:aspect-[16/9] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl lg:rounded-[32px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                <Image
                  src="/WebsiteAssets/AIAnalysis2.png"
                  alt="AI Analysis Features"
                  fill
                  className="object-contain rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 49vw, (max-width: 768px) 220px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;