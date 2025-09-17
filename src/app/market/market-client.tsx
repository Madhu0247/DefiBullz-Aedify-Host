"use client";

import { useEffect, useState } from "react";
import MarketHeader from "./components/MarketHeader";
import CryptoTable from "./components/CryptoTable";
import MarketOverview from "./components/MarketOverview";
import { CryptoData } from "./types";

interface RawCryptoData {
  id?: string;
  name?: string;
  symbol?: string;
  image?: string;
  current_price?: number;
  market_cap?: number;
  total_volume?: number;
  price_change_percentage_24h?: number | null;
  price_change_percentage_7d?: number | null;
  price_change_percentage_30d?: number | null;
  price_change_percentage_1y?: number | null;
  ath?: number | null;
  rank?: number;
  sparkline_in_7d?: {
    price?: number[];
  };
}

export default function MarketClient() {
  const [marketData, setMarketData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/market/coins");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch market data: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Add detailed logging
        console.log("Raw API Response for first coin:", {
          first_coin: data[0],
          fields_check: {
            "24h_change": data[0]?.price_change_percentage_24h,
            "7d_change": data[0]?.price_change_percentage_7d,
            "30d_change": data[0]?.price_change_percentage_30d,
            "1y_change": data[0]?.price_change_percentage_1y,
            "ath": data[0]?.ath
          }
        });

        // Log percentage changes for all coins
        console.log("Percentage changes for all coins:", data.map((coin: RawCryptoData) => ({
          name: coin.name,
          "24h": coin.price_change_percentage_24h,
          "7d": coin.price_change_percentage_7d,
          "30d": coin.price_change_percentage_30d,
          "1y": coin.price_change_percentage_1y,
          "ath": coin.ath
        })));

        // Add validation logging
        const missingFields = data.map((coin: RawCryptoData) => ({
          name: coin.name,
          missing: {
            "24h": coin.price_change_percentage_24h === undefined || coin.price_change_percentage_24h === null,
            "7d": coin.price_change_percentage_7d === undefined || coin.price_change_percentage_7d === null,
            "30d": coin.price_change_percentage_30d === undefined || coin.price_change_percentage_30d === null,
            "1y": coin.price_change_percentage_1y === undefined || coin.price_change_percentage_1y === null,
            "ath": coin.ath === undefined || coin.ath === null
          }
        })).filter((coin: { name: string; missing: { [key: string]: boolean } }) => Object.values(coin.missing).some(v => v));
        
        if (missingFields.length > 0) {
          console.warn("Coins with missing fields:", missingFields);
        }

        // Format the data
        const formattedData = data.map((coin: RawCryptoData): CryptoData => ({
          id: coin.id || "",
          name: coin.name || "",
          symbol: coin.symbol || "",
          image: coin.image || "",
          current_price: coin.current_price || 0,
          market_cap: coin.market_cap || 0,
          total_volume: coin.total_volume || 0,
          price_change_percentage_24h: coin.price_change_percentage_24h || null,
          price_change_percentage_7d: coin.price_change_percentage_7d || null,
          price_change_percentage_30d: coin.price_change_percentage_30d || null,
          price_change_percentage_1y: coin.price_change_percentage_1y || null,
          ath: coin.ath || null,
          rank: coin.rank || 0,
          sparkline_in_7d: {
            price: coin.sparkline_in_7d?.price || []
          }
        }));
        
        setMarketData(formattedData);
        setError("");
      } catch (err) {
        console.error("Error fetching market data:", err);
        setError(`Failed to load market data: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-2 py-4">
        <MarketOverview 
          isLoading={isLoading} 
          error={error} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <MarketHeader />
            <CryptoTable 
              data={marketData} 
              isLoading={isLoading} 
              error={error} 
            />
          </div>
        </div>
      </div>
    </main>
  );
} 