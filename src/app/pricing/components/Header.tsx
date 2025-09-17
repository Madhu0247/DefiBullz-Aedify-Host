import React from 'react';

interface HeaderProps {
    setIsYearly: (isYearly: boolean) => void;
    isYearly: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsYearly, isYearly }) => {
    return (
        <header className="bg-cover bg-center text-white py-12 md:py-16 lg:py-20 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] text-center" 
            style={{ backgroundImage: "url(/WebsiteAssets/pricing/hero.png)" }}>
            <div className="container mx-auto px-4 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 items-center h-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 md:mb-8 leading-tight max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
                    Trade &amp; Journal with AI and get <span className="text-[#4ED634]">10x more</span> Confidence
                </h1>
                <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6 md:mb-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
                    The clarity you&apos;ve been seeking - free to start, premium to excel.
                </p>
                <div className="flex justify-center space-x-0 mb-4 sm:mb-6 md:mb-8">
                    <button 
                        onClick={() => setIsYearly(true)} 
                        className={`${isYearly ? "bg-[#4ED634] text-black" : "bg-[#171C2C] text-gray-400"} py-2 sm:py-3 px-6 sm:px-8 md:px-12 text-xs sm:text-sm md:text-base rounded-l-full focus:outline-none`}
                    >
                        Yearly
                    </button>
                    <button 
                        onClick={() => setIsYearly(false)} 
                        className={`${!isYearly ? "bg-[#4ED634] text-black" : "bg-[#171C2C] text-gray-400"} py-2 sm:py-3 px-6 sm:px-8 md:px-12 text-xs sm:text-sm md:text-base rounded-r-full focus:outline-none`}
                    >
                        Monthly
                    </button>
                </div>
                <p className="text-xs sm:text-sm">
                    Yearly save 17%, It&apos;s like <span className="text-blue-400">2 Months free</span> 🎉
                </p>
            </div>
        </header>
    );
};

export default Header; 