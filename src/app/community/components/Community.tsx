import React from 'react';
import Image from 'next/image';

const Community = () => {
    const communityFeatures = [
        {
            title: "Global Network",
            description: "Connect with traders from around the world and expand your trading network.",
            icon: "/WebsiteAssets/community/network-icon.svg"
        },
        {
            title: "Knowledge Sharing",
            description: "Share strategies, insights, and learn from experienced traders in the community.",
            icon: "/WebsiteAssets/community/knowledge-icon.svg"
        },
        {
            title: "Real-time Discussions",
            description: "Engage in real-time discussions about market trends and trading opportunities.",
            icon: "/WebsiteAssets/community/discussion-icon.svg"
        },
        {
            title: "Private Groups",
            description: "Join specialized private groups focused on specific trading strategies or markets.",
            icon: "/WebsiteAssets/community/group-icon.svg"
        }
    ];

    return (
        <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-[#0F0F0F]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
                    Community Features
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {communityFeatures.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-[#0D0F12] border border-gray-800 rounded-xl p-4 sm:p-5 md:p-6 hover:border-[#4ED634] transition-all duration-300 h-full"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4 relative">
                                <Image 
                                    src={feature.icon}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">{feature.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                    <a 
                        href="#join-now" 
                        className="inline-block bg-[#4ED634] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#3DB025] transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                        Explore Community Features
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Community; 