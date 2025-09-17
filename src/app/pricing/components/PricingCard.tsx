import React from 'react';
import Image from 'next/image';

interface PricingCardProps {
    planName: string;
    price: string;
    features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, features }) => {
    // Determine heading text based on plan name
    const headingText = 
        planName === 'Standard' ? "Everything from Basic and" : 
        planName === 'Premium' ? "Everything from Standard" : 
        "What you will get";
    
    return (
        <div className="pricing-card border border-white/25 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 bg-[#000000] text-white w-full h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-black">
            <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                <Image 
                    src="/WebsiteAssets/pricing/pricingcard.svg" 
                    alt="Pricing Icon" 
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                />
                <h2 className="text-base sm:text-lg font-semibold">{planName}</h2>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{price}</p>
            <hr className="border-gray-600 my-4 sm:my-6 md:my-8" />
            <h3 className="text-sm sm:text-md font-semibold mb-3 sm:mb-4 md:mb-6">{headingText}</h3>
            <ul className="mb-4 flex-grow space-y-2 sm:space-y-3 leading-relaxed">
                {features.map((feature, index) => (
                    <li key={index} className="text-[10px] sm:text-[12px] mb-1 flex text-[#B5b5b5] items-start">
                        <span className="text-[#4ED634] mr-2 flex-shrink-0 mt-0.5">✔️</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className="bg-white mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-4 md:mb-6 text-black py-2 px-4 rounded-md w-full text-sm sm:text-base transition-colors hover:bg-[#4ED634]">
                Get Started
            </button>
        </div>
    );
};

export default PricingCard; 