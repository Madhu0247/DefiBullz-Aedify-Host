"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import CryptoTable from "./components/CryptoTable";
import MarketOverview from "./components/MarketOverview";
import MarketDisclaimer from "./components/MarketDisclaimer";
import NewsletterSubscribe from "./components/NewsletterSubscribe";
import Footer from "../components/Footer";
import { CryptoData, ApiResponse, ApiCoinData } from "./types";

export default function MarketPage() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true); // True for initial load
  const [isRefreshing, setIsRefreshing] = useState(false); // True for background refreshes
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const refreshInterval = 60000; // 1 minute refresh interval for all components

  useEffect(() => {
    const fetchMarketData = async (isInitialLoad = false) => {
      if (!isInitialLoad) {
        setIsRefreshing(true);
      }
      // setIsLoading(true) is handled by initial state for the first load

      try {
        const response = await fetch("/api/market/all");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        const transformedData = data.coins.map((coin: ApiCoinData) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          image: coin.image,
          current_price: coin.current_price,
          market_cap: coin.market_cap,
          total_volume: coin.total_volume,
          price_change_percentage_24h: coin.price_change_percentage_24h ?? null,
          price_change_percentage_7d: coin.price_change_percentage_7d ?? null,
          price_change_percentage_30d: coin.price_change_percentage_30d ?? null,
          price_change_percentage_1y: coin.price_change_percentage_1y ?? null,
          ath: coin.ath || 0,
          rank: coin.rank || 0,
          sparkline_in_7d: {
            price: coin.sparkline_in_7d?.price || []
          }
        }));
        
        setCryptoData(transformedData);
        setError("");
      } catch (err) {
        console.error("Error fetching crypto data:", err);
        setError(`Failed to load crypto data: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        if (isInitialLoad) {
          setIsLoading(false);
        }
        setIsRefreshing(false);
      }
    };

    fetchMarketData(true); // Initial data load
    
    const intervalId = setInterval(() => fetchMarketData(false), refreshInterval); // Subsequent refreshes
    
    return () => clearInterval(intervalId);
  }, [refreshInterval]); // refreshInterval is a constant, so effect runs once on mount

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "all") {
      return cryptoData;
    } else if (activeTab === "gainers") {
      return [...cryptoData]
        .filter(coin => (coin.price_change_percentage_24h ?? 0) > 0)
        .sort((a, b) => ((b.price_change_percentage_24h ?? 0) - (a.price_change_percentage_24h ?? 0)));
    } else if (activeTab === "losers") {
      return [...cryptoData]
        .filter(coin => (coin.price_change_percentage_24h ?? 0) < 0)
        .sort((a, b) => ((a.price_change_percentage_24h ?? 0) - (b.price_change_percentage_24h ?? 0)));
    } else if (activeTab === "volume") {
      return [...cryptoData].sort((a, b) => (b.total_volume ?? 0) - (a.total_volume ?? 0));
    }
    return cryptoData;
  };

  return (
    <>
      <Header />
      <div className="bg-[#0F0F0F] min-h-screen overflow-x-hidden">
        <div className="container mx-auto px-6 py-8">
          {/* Market Overview Section */}
          <MarketOverview 
            isLoading={isLoading} 
            error={error} 
            refreshInterval={refreshInterval}
          />
          
          {/* Main Content - Two Column Layout */}
          <div className="mt-8 flex flex-col lg:flex-row gap-2">
            {/* Left Column - Crypto Table Section - Wider */}
            <div className="lg:w-full">
              <div className="bg-[#0D0F12] rounded-t-lg p-3">
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      activeTab === "all"
                        ? "bg-[#4ED634] text-black"
                        : "bg-[#171C2C] text-white hover:bg-[#1E2434]"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveTab("gainers")}
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      activeTab === "gainers"
                        ? "bg-[#4ED634] text-black"
                        : "bg-[#171C2C] text-white hover:bg-[#1E2434]"
                    }`}
                  >
                    Top Gainers
                  </button>
                  <button
                    onClick={() => setActiveTab("losers")}
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      activeTab === "losers"
                        ? "bg-[#4ED634] text-black"
                        : "bg-[#171C2C] text-white hover:bg-[#1E2434]"
                    }`}
                  >
                    Top Losers
                  </button>
                  <button
                    onClick={() => setActiveTab("volume")}
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      activeTab === "volume"
                        ? "bg-[#4ED634] text-black"
                        : "bg-[#171C2C] text-white hover:bg-[#1E2434]"
                    }`}
                  >
                    Highest Volume
                  </button>
                  
                  <div className="ml-auto flex items-center">
                    <span className="text-xs text-gray-400 mr-1">Sort by:</span>
                    <select 
                      className="bg-[#171C2C] text-white text-xs rounded-md border border-gray-700 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#4ED634]"
                    >
                      <option value="market_cap">Market Cap</option>
                      <option value="volume">Volume</option>
                      <option value="price">Price</option>
                      <option value="change">24h Change</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <CryptoTable 
                data={getFilteredData()} 
                isLoading={isLoading} 
                error={error} 
              />
            </div>
            
            {/* Right Column - AI Picked Tokens */}
            {/*
            <div className="lg:w-1/4">
              <div className="bg-[#0D0F12] rounded-t-lg p-3">
                <h2 className="text-white text-sm font-semibold">AI Picked Tokens</h2>
              </div>
              
              <div className="bg-[#171C2C] rounded-b-lg h-[800px]">
                {/* Empty placeholder - no content as requested * / }
              </div>
            </div>
            */}
          </div>

          {/* Market Disclaimer - Full Width */}
          <MarketDisclaimer />
        </div>

        {/* Newsletter Subscribe Section - Full Width */}
        <NewsletterSubscribe />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
} 