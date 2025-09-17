"use client";

import React from 'react';
import { useRouter, useSearchParams } from "next/navigation";

const LearnSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || "All";

  // Function to update the selected filter
  const handleFilterClick = (filter: string) => {
    // Update the URL with the selected category
    router.push(`/website/learn?category=${filter}`);
  };

  return (
    <div className="bg-black text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* BLOG Heading */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Dynamic Heading with full capital letters */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 uppercase">BLOGS</h1>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
              currentCategory === "All" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
            }`}
            onClick={() => handleFilterClick("All")}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
              currentCategory === "Trading" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
            }`}
            onClick={() => handleFilterClick("Trading")}
          >
            Trading
          </button>
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
              currentCategory === "Strategy" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
            }`}
            onClick={() => handleFilterClick("Strategy")}
          >
            Strategy
          </button>
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
              currentCategory === "AI Trading" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
            }`}
            onClick={() => handleFilterClick("AI Trading")}
          >
            AI Trading
          </button>
          <button
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors ${
              currentCategory === "Journaling" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
            }`}
            onClick={() => handleFilterClick("Journaling")}
          >
            Journaling
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;