import React from 'react';
import Image from 'next/image';

interface FeatureComparisonTableProps {
    features: string[];
    plans: { [key: string]: (boolean | string)[] };
}

const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({ features, plans }) => {
    return (
        <div className="bg-[#0F0F0F] py-8 sm:py-10 md:py-12 px-2 sm:px-4 md:px-6 lg:px-12">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10">
                Feature Comparison
            </h2>

            <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="feature-comparison-table w-full text-left">
                    <thead>
                        <tr className="bg-[#000000]">
                            <th className="p-2 md:p-3 text-left text-white text-xs sm:text-sm md:text-base sticky left-0 bg-[#000000] z-10">Features</th>
                            <th className="p-2 md:p-3 text-center text-[#B5B5B5] text-[10px] sm:text-[12px]">Free Version</th>
                            <th className="p-2 md:p-3 text-center text-[#B5B5B5] text-[10px] sm:text-[12px]">Standard Version</th>
                            <th className="p-2 md:p-3 text-center text-[#B5B5B5] text-[10px] sm:text-[12px]">Premium Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="odd:bg-[#0D0F12] even:bg-[#000000] border-b border-gray-800">
                                <td className="p-2 md:p-4 flex items-center text-white text-xs sm:text-sm md:text-base sticky left-0 z-10 odd:bg-[#0D0F12] even:bg-[#000000]">
                                    {feature} <span className="ml-1 text-gray-400" dangerouslySetInnerHTML={{ __html: '&#9432;' }} />
                                </td>
                                <td className="p-2 md:p-4 text-center">
                                    {typeof plans['Free'][index] === 'string' ? (
                                        <span className="text-[#B5B5B5] text-[10px] sm:text-[12px]">{plans['Free'][index]}</span>
                                    ) : plans['Free'][index] ? (
                                        <Image 
                                            src="/WebsiteAssets/pricing/check.svg" 
                                            alt="Check" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    ) : (
                                        <Image 
                                            src="/WebsiteAssets/pricing/dash.svg" 
                                            alt="Dash" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    )}
                                </td>
                                <td className="p-2 md:p-4 text-center">
                                    {typeof plans['Standard'][index] === 'string' ? (
                                        <span className="text-[#B5B5B5] text-[10px] sm:text-[12px]">{plans['Standard'][index]}</span>
                                    ) : plans['Standard'][index] ? (
                                        <Image 
                                            src="/WebsiteAssets/pricing/check.svg" 
                                            alt="Check" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    ) : (
                                        <Image 
                                            src="/WebsiteAssets/pricing/dash.svg" 
                                            alt="Dash" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    )}
                                </td>
                                <td className="p-2 md:p-4 text-center">
                                    {typeof plans['Premium'][index] === 'string' ? (
                                        <span className="text-[#B5B5B5] text-[10px] sm:text-[12px]">{plans['Premium'][index]}</span>
                                    ) : plans['Premium'][index] ? (
                                        <Image 
                                            src="/WebsiteAssets/pricing/check.svg" 
                                            alt="Check" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    ) : (
                                        <Image 
                                            src="/WebsiteAssets/pricing/dash.svg" 
                                            alt="Dash" 
                                            width={20} 
                                            height={20} 
                                            className="inline-block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center text-white text-xs sm:text-sm mt-6 sm:mt-8 md:mt-10 opacity-70">
                * All plans include 24/7 customer support. Check the detailed features list for more information.
            </div>
        </div>
    );
};

export default FeatureComparisonTable; 