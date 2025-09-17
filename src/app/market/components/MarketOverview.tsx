"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface MarketStats {
  // LiveCoinWatch API response fields
  cap: number;
  volume: number;
  liquidity: number;
  btcDominance: number;
}

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
}

interface FearGreedData {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update?: string;
}

interface MarketOverviewProps {
  isLoading: boolean;
  error: string;
  refreshInterval?: number; // Refresh interval in milliseconds
}

const MarketOverview = ({ refreshInterval = 60000 }: MarketOverviewProps) => {
  const [stats, setStats] = useState<MarketStats>({
    cap: 0,
    volume: 0,
    liquidity: 0,
    btcDominance: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  // News state
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);

  // Fear and Greed state
  const [fearGreedData, setFearGreedData] = useState<FearGreedData | null>(null);
  const [fearGreedLoading, setFearGreedLoading] = useState(true);
  const [fearGreedError, setFearGreedError] = useState<string | null>(null);

  // Fetch all market data
  const fetchMarketData = async (forceRefresh: boolean = false) => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch('/api/market/all' + (forceRefresh ? '?force=true' : ''));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Update market stats from the API response
      if (data.marketStats) {
        setStats({
          cap: data.marketStats.cap || 0,
          volume: data.marketStats.volume || 0,
          liquidity: data.marketStats.liquidity || 0,
          btcDominance: data.marketStats.btcDominance || 0,
        });
      }

      setLastUpdated(new Date());
      setIsLoading(false);
      
    } catch (err) {
      console.error('Error fetching market data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch market data');
      setIsLoading(false);
    }
  };

  // Fetch news data
  const fetchNews = async () => {
    try {
      setNewsError(null);
      setNewsLoading(true);
      
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error('Failed to fetch news');
      
      const data = await res.json();
      setNewsItems(data.news || []);
      setNewsLoading(false);
    } catch (err) {
      console.error('Error fetching news:', err);
      setNewsError(err instanceof Error ? err.message : 'Failed to fetch news');
      setNewsLoading(false);
    }
  };

  // Fetch Fear & Greed Index
  const fetchFearGreed = async () => {
    try {
      setFearGreedError(null);
      setFearGreedLoading(true);
      
      // Mock Fear & Greed data since we don't have a real API for this
      const mockFearGreed: FearGreedData = {
        value: "65",
        value_classification: "Greed",
        timestamp: new Date().toISOString(),
        time_until_update: "12 hours"
      };
      
      setFearGreedData(mockFearGreed);
      setFearGreedLoading(false);
    } catch (err) {
      console.error('Error fetching fear & greed data:', err);
      setFearGreedError(err instanceof Error ? err.message : 'Failed to fetch fear & greed data');
      setFearGreedLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchMarketData();
    fetchNews();
    fetchFearGreed();
  }, []);

  // Set up refresh interval
  useEffect(() => {
    if (refreshInterval > 0) {
      const interval = setInterval(() => {
        fetchMarketData();
        fetchNews();
        fetchFearGreed();
      }, refreshInterval);
      
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  // Format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  // Format percentage
  const formatPercentage = (num: number): string => {
    return `${num.toFixed(2)}%`;
  };


  return (
    <div className="mb-8">
      {/* Market Overview Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Cryptocurrency Market Overview
          </h1>
          <p className="text-gray-400 text-sm">
            Real-time market data and insights
            {lastUpdated && (
              <span className="ml-2 text-gray-500">
                • Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </p>
        </div>
        
        <button
          onClick={() => fetchMarketData(true)}
          disabled={isLoading}
          className="bg-[#4ED634] text-black px-4 py-2 rounded-md hover:bg-[#3bc522] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          {isLoading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-6">
          <p className="text-red-400 text-sm">Error: {error}</p>
        </div>
      )}

      {/* Market Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Market Cap */}
        <div className="bg-[#0D0F12] rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm font-medium">Total Market Cap</h3>
            <Image
              src="/WebsiteAssets/market/marketcap.svg"
              alt="Market Cap"
              width={20}
              height={20}
              className="opacity-60"
            />
          </div>
          <p className="text-white text-lg font-bold">
            {isLoading ? '...' : formatNumber(stats.cap)}
          </p>
        </div>

        {/* 24h Volume */}
        <div className="bg-[#0D0F12] rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm font-medium">24h Volume</h3>
            <Image
              src="/WebsiteAssets/market/24hvol.svg"
              alt="24h Volume"
              width={20}
              height={20}
              className="opacity-60"
            />
          </div>
          <p className="text-white text-lg font-bold">
            {isLoading ? '...' : formatNumber(stats.volume)}
          </p>
        </div>

        {/* BTC Dominance */}
        <div className="bg-[#0D0F12] rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm font-medium">BTC Dominance</h3>
            <Image
              src="/WebsiteAssets/market/btcdominance.svg"
              alt="BTC Dominance"
              width={20}
              height={20}
              className="opacity-60"
            />
          </div>
          <p className="text-white text-lg font-bold">
            {isLoading ? '...' : formatPercentage(stats.btcDominance)}
          </p>
        </div>

        {/* Fear & Greed Index */}
        <div className="bg-[#0D0F12] rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-400 text-sm font-medium">Fear & Greed</h3>
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-green-500 opacity-60" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-lg font-bold">
              {fearGreedLoading ? '...' : fearGreedData?.value || '65'}
            </p>
            <span className={`text-xs px-2 py-1 rounded ${
              fearGreedData?.value_classification === 'Greed' ? 'bg-green-900/20 text-green-400' :
              fearGreedData?.value_classification === 'Fear' ? 'bg-red-900/20 text-red-400' :
              'bg-yellow-900/20 text-yellow-400'
            }`}>
              {fearGreedLoading ? '...' : fearGreedData?.value_classification || 'Greed'}
            </span>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-[#0D0F12] rounded-lg p-6 border border-gray-800">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
          <Image
            src="/WebsiteAssets/market/Newsletter.svg"
            alt="News"
            width={20}
            height={20}
            className="opacity-60"
          />
          Latest Crypto News
        </h3>
        
        {newsLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : newsError ? (
          <p className="text-red-400 text-sm">Error loading news: {newsError}</p>
        ) : (
          <div className="space-y-4">
            {newsItems.slice(0, 3).map((item, index) => (
              <div key={index} className="border-b border-gray-800 last:border-b-0 pb-3 last:pb-0">
                <h4 className="text-white text-sm font-medium mb-1 hover:text-[#4ED634] transition-colors cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs">
                  {(() => {
                    try {
                      const date = new Date(item.pubDate);
                      if (isNaN(date.getTime())) {
                        return 'Recently';
                      }
                      
                      const now = new Date();
                      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
                      
                      if (diffInHours < 1) {
                        return 'Just now';
                      } else if (diffInHours < 24) {
                        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
                      } else if (diffInHours < 168) { // Less than a week
                        const days = Math.floor(diffInHours / 24);
                        return `${days} day${days > 1 ? 's' : ''} ago`;
                      } else {
                        return date.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
                        });
                      }
                    } catch (error) {
                      return 'Recently';
                    }
                  })()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketOverview;