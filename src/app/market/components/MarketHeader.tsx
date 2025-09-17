"use client";

import { useState } from "react";

const MarketHeader = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("market_cap");
  
  const filters = [
    { id: "all", label: "All" },
    { id: "gainers", label: "Top Gainers" },
    { id: "losers", label: "Top Losers" },
    { id: "volume", label: "Highest Volume" },
  ];
  
  const sortOptions = [
    { id: "market_cap", label: "Market Cap" },
    { id: "price", label: "Price" },
    { id: "volume_24h", label: "24h Volume" },
    { id: "change_24h", label: "24h Change" },
  ];
  
  return (
    <div className="bg-[#171C2C] rounded-t-lg p-4 mb-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-md text-sm ${
                activeFilter === filter.id
                  ? "bg-[#4ED634] text-black font-medium"
                  : "bg-[#0D0F12] text-gray-300"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#0D0F12] text-white text-sm rounded-md px-3 py-2 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#4ED634]"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader; 