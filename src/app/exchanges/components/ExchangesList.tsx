"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

interface Exchange {
  id: string;
  name: string;
  description: string;
  logo: string;
  type: 'centralized' | 'decentralized' | 'multi';
  status: 'Supported' | 'Coming Soon';
}

const exchanges: Exchange[] = [
  {
    id: 'binance',
    name: 'Binance',
    description: 'One of the largest exchanges by volume, offering extensive API documentation.',
    logo: '/WebsiteAssets/exchanges/binance.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'coinbase-pro',
    name: 'Coinbase Pro',
    description: 'A trusted platform in the US with powerful API integrations.',
    logo: '/WebsiteAssets/exchanges/coinbase.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'kraken',
    name: 'Kraken',
    description: 'Known for its security and detailed API for trading and market data.',
    logo: '/WebsiteAssets/exchanges/kraken.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'bitfinex',
    name: 'Bitfinex',
    description: 'Popular with advanced traders, with comprehensive API endpoints.',
    logo: '/WebsiteAssets/exchanges/bitfinex.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'bittrex',
    name: 'Bittrex',
    description: 'Offers solid API support for a wide range of cryptocurrencies.',
    logo: '/WebsiteAssets/exchanges/bittrex.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'huobi',
    name: 'Huobi Global',
    description: 'A major Asian exchange with robust API services.',
    logo: '/WebsiteAssets/exchanges/huobi.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'okx',
    name: 'OKX',
    description: 'Provides a rich API for both trading and market data.',
    logo: '/WebsiteAssets/exchanges/okx.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    description: 'Widely used with a versatile API for various trading operations.',
    logo: '/WebsiteAssets/exchanges/kucoin.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Focused on security and compliance, offering an API suited for US traders.',
    logo: '/WebsiteAssets/exchanges/gemini.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com',
    description: 'Gaining traction with an API that supports various trading functions.',
    logo: '/WebsiteAssets/exchanges/crypto-com.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  {
    id: 'bitstamp',
    name: 'Bitstamp',
    description: 'One of the oldest exchanges, with a reliable API for market data and trading.',
    logo: '/WebsiteAssets/exchanges/bitstamp.png',
    type: 'centralized',
    status: 'Coming Soon'
  },
  // Decentralized Exchanges
  {
    id: 'uniswap',
    name: 'Uniswap',
    description: 'Leading DEX on Ethereum with comprehensive on-chain data.',
    logo: '/WebsiteAssets/exchanges/Uniswap.png',
    type: 'decentralized',
    status: 'Coming Soon'
  },
  {
    id: 'sushiswap',
    name: 'Sushiswap',
    description: 'Feature-rich DEX offering trading and yield farming capabilities.',
    logo: '/WebsiteAssets/exchanges/Sushiswap.png',
    type: 'decentralized',
    status: 'Coming Soon'
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap',
    description: 'Premier DEX on the Binance Smart Chain (BSC) for DeFi trading.',
    logo: '/WebsiteAssets/exchanges/Pancakeswap.png',
    type: 'decentralized',
    status: 'Coming Soon'
  },
  {
    id: '1inch',
    name: '1inch',
    description: 'DEX aggregator providing best rates by sourcing liquidity from multiple exchanges.',
    logo: '/WebsiteAssets/exchanges/1inch.png',
    type: 'decentralized',
    status: 'Coming Soon'
  },
  {
    id: 'balancer',
    name: 'Balancer',
    description: 'Automated market maker with advanced portfolio management features.',
    logo: '/WebsiteAssets/exchanges/Balancer.png',
    type: 'decentralized',
    status: 'Coming Soon'
  },
  // Multi-Exchange Tools
  {
    id: 'ccxt',
    name: 'CCXT Library',
    description: 'Universal JavaScript/Python/PHP library for trading that supports 100+ cryptocurrency exchanges.',
    logo: '/WebsiteAssets/exchanges/ccxt.png',
    type: 'multi',
    status: 'Coming Soon'
  },
  {
    id: '3commas',
    name: '3Commas',
    description: 'Advanced trading platform offering automated trading strategies across multiple exchanges.',
    logo: '/WebsiteAssets/exchanges/3Commas.png',
    type: 'multi',
    status: 'Coming Soon'
  },
  {
    id: 'shrimpy',
    name: 'Shrimpy',
    description: 'Unified API and portfolio management platform supporting multiple cryptocurrency exchanges.',
    logo: '/WebsiteAssets/exchanges/shrimpy.png',
    type: 'multi',
    status: 'Coming Soon'
  }
];

interface ExchangesListProps {
  selectedType: string;
}

const ExchangesList = ({ selectedType }: ExchangesListProps) => {
  // Filter exchanges based on selected type
  const filteredExchanges = exchanges.filter(exchange => {
    if (selectedType === "Centralized Exchanges") return exchange.type === "centralized";
    if (selectedType === "Decentralized Exchanges") return exchange.type === "decentralized";
    if (selectedType === "Multi-Exchange") return exchange.type === "multi";
    return true;
  });

  return (
    <div className="bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="pt-6 sm:pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredExchanges.map((exchange) => (
            <Link 
              href={`/website/exchanges/${exchange.id}`} 
              key={exchange.id}
              className="block"
            >
              <div className="bg-[#F8F9FA] rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer h-full">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative mr-3 sm:mr-4">
                    <Image
                      src={exchange.logo}
                      alt={`${exchange.name} logo`}
                      fill
                      sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 48px"
                      style={{ objectFit: 'contain' }}
                      priority={exchange.id === 'binance' || exchange.id === 'coinbase-pro' || exchange.id === 'kraken'}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{exchange.name}</h3>
                    <span className={`text-xs sm:text-sm ${
                      exchange.status === 'Supported' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {exchange.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{exchange.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Focus Section with Gradient Background */}
      <div className="relative w-full mt-12 sm:mt-16 md:mt-24">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 aspect-[4/3] sm:aspect-[3/2] md:aspect-[2/1] relative overflow-hidden">
          {/* Abstract graphic elements */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#4ED634]/20 to-transparent opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-[#4ED634]/10 to-transparent opacity-30"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 w-full max-w-2xl mx-auto">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Keep Your Focus on What Truly Matters</h2>
              <Link 
                href="/get-started" 
                className="inline-block bg-[#4ED634] hover:bg-[#45a049] text-black font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ExchangesList; 