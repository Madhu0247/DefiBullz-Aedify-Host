import React from 'react';
import Image from 'next/image';

const PaymentMethod: React.FC = () => {
    return (
        <div className="bg-black text-white py-8 sm:py-10 md:py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 md:mb-8">Payment Method</h2>
                <p className="text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
                    Multiple choices so you can track your trades without interruption
                </p>
                
                <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/visa.png" alt="Visa" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> Visa
                    </div>
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/mastercard.png" alt="MasterCard" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> MasterCard
                    </div>
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/applepay.png" alt="Apple Pay" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> Apple Pay
                    </div>
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/googlepay.png" alt="Google Pay" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> Google Pay
                    </div>
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/usdt.png" alt="USDT" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> USDT
                    </div>
                    <div className="bg-[#131316] p-3 sm:p-4 rounded-lg flex items-center text-xs sm:text-sm">
                        <Image src="/WebsiteAssets/pricing/usdc.png" alt="USDC" width={20} height={20} className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> USDC
                    </div>
                </div>
                
                <button className="bg-[#4ED634] text-black py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-md mx-auto block text-sm sm:text-base font-medium hover:bg-[#3ab028] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ED634]">
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default PaymentMethod; 