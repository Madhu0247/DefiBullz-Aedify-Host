"use client";

import { useState } from "react";
import { CryptoData } from "../types";
import Image from 'next/image';
import imageLoader from '@/lib/utils/imageLoader';

interface CryptoTableProps {
  data: CryptoData[];
  isLoading: boolean;
  error: string;
}

const CryptoTable = ({ data, isLoading, error }: CryptoTableProps) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  
  if (isLoading) {
    return (
      <div className="bg-[#171C2C] rounded-b-lg p-4 min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 w-6 rounded-full border-3 border-t-[#4ED634] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <p className="mt-3 text-xs text-gray-400">Loading market data...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-[#171C2C] rounded-b-lg p-4 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xs mb-1">Error</p>
          <p className="text-gray-400 text-xs">{error}</p>
        </div>
      </div>
    );
  }
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const formatPrice = (price: number | null) => {
    if (price === null) return "N/A";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };
  
  const formatLargeNumber = (num: number) => {
    if (num >= 1e9) {
      return `$${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
      return `$${(num / 1e6).toFixed(2)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };
  
  const formatPercentage = (percentage: number | null) => {
    if (percentage === null) return "N/A";
    return (
      <span className={`px-1 py-0.5 rounded text-xs ${
        percentage >= 0 
          ? 'text-green-500' 
          : 'text-red-500'
      }`}>
        {percentage >= 0 ? '+' : ''}
        {percentage.toFixed(2)}%
      </span>
    );
  };
  
  return (
    <div className="bg-[#0F1116] rounded-b-lg overflow-hidden">
      <div className="overflow-x-auto">
        <div className="overflow-y-auto max-h-[1010px]">
          <table className="min-w-full">
            <thead className="sticky top-0 bg-[#171C2C] z-10">
              <tr className="border-b border-gray-700">
                <th className="pl-6 pr-2 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">1D</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">1W</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">1M</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">1Y</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Market Cap</th>
                <th className="px-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Volume (24h)</th>
                <th className="pr-4 pl-2 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">ATH</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.length > 0 ? (
                currentPageData.map((coin, index) => (
                  <tr key={coin.id} className="border-b border-gray-700 hover:bg-[#1E2434]">
                    <td className="pl-4 pr-2 py-2 whitespace-nowrap text-xs text-gray-300">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-6 w-6 relative">
                          {coin.image ? (
                            <Image
                              loader={imageLoader}
                              src={coin.image}
                              alt={coin.name}
                              width={24}
                              height={24}
                              className="rounded-full object-contain"
                              unoptimized
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                              <span className="text-xs text-gray-300">{coin.symbol.substring(0, 2).toUpperCase()}</span>
                            </div>
                          )}
                        </div>
                        <div className="ml-2">
                          <div className="text-xs font-medium text-white">{coin.name}</div>
                          <div className="text-xs text-gray-400">{coin.symbol.toUpperCase()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right text-white">
                      {formatPrice(coin.current_price)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right">
                      {formatPercentage(coin.price_change_percentage_24h)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right">
                      {formatPercentage(coin.price_change_percentage_7d)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right">
                      {formatPercentage(coin.price_change_percentage_30d)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right">
                      {formatPercentage(coin.price_change_percentage_1y)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right text-gray-300">
                      {formatLargeNumber(coin.market_cap)}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-xs text-right text-gray-300">
                      {formatLargeNumber(coin.total_volume)}
                    </td>
                    <td className="pr-4 pl-2 py-2 whitespace-nowrap text-xs text-right text-gray-300">
                      {formatPrice(coin.ath)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="px-2 py-4 text-center text-gray-400 text-xs">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination - Simplified */}
      {totalPages > 1 && (
        <div className="px-2 py-2 flex items-center justify-between border-t border-gray-700">
          <div className="flex-1 flex justify-between">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className={`relative inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                page === 1
                  ? 'bg-[#0D0F12] text-gray-500 cursor-not-allowed'
                  : 'bg-[#0D0F12] text-white hover:bg-[#1E2434]'
              }`}
            >
              Previous
            </button>
            <div className="text-xs text-gray-400">
              Page {page} of {totalPages}
            </div>
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className={`relative inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                page === totalPages
                  ? 'bg-[#0D0F12] text-gray-500 cursor-not-allowed'
                  : 'bg-[#0D0F12] text-white hover:bg-[#1E2434]'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoTable; 