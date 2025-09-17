import React from 'react';

const Forums = () => {
    const forumCategories = [
        {
            title: "Cryptocurrency Trading",
            topics: 328,
            members: 5824,
            description: "Discuss Bitcoin, Ethereum, and altcoin trading strategies.",
            isHot: true
        },
        {
            title: "Stock Market",
            topics: 412,
            members: 6753,
            description: "Analysis and discussion of stock markets worldwide.",
            isHot: true
        },
        {
            title: "Forex Trading",
            topics: 276,
            members: 4192,
            description: "Currency trading strategies and market analysis.",
            isHot: false
        },
        {
            title: "Options & Futures",
            topics: 185,
            members: 3157,
            description: "Derivatives trading strategies and discussions.",
            isHot: false
        },
        {
            title: "Technical Analysis",
            topics: 342,
            members: 5421,
            description: "Chart patterns, indicators, and technical trading methods.",
            isHot: true
        },
        {
            title: "Fundamental Analysis",
            topics: 231,
            members: 3842,
            description: "Economic indicators, financial statements, and industry analysis.",
            isHot: false
        }
    ];

    return (
        <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0F0F0F] to-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Discussion Forums</h2>
                        <p className="text-gray-400 text-sm sm:text-base">Join the conversation in our active trading communities</p>
                    </div>
                    <button className="mt-4 sm:mt-0 bg-[#4ED634] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#3DB025] transition-all duration-300 text-sm sm:text-base font-medium">
                        Join Forums
                    </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {forumCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-[#0D0F12] border border-gray-800 rounded-xl p-4 sm:p-5 md:p-6 hover:border-[#4ED634] transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-2 sm:mb-3">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
                                {category.isHot && (
                                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full ml-2 flex-shrink-0">
                                        Hot
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{category.description}</p>
                            <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                                <span>{category.topics} Topics</span>
                                <span>{category.members.toLocaleString()} Members</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                    <button className="bg-transparent border border-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:border-[#4ED634] transition-all duration-300 text-sm sm:text-base">
                        View All Forums
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forums; 