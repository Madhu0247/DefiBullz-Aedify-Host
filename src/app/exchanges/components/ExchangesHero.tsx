"use client";

import React from "react";

interface ExchangesHeroProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const ExchangesHero = ({ selectedType, onTypeChange }: ExchangesHeroProps) => {
  return (
    <div className="bg-black text-white py-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Static Heading */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Exchanges Supported</h1>
        </div>
      </div>

      {/* Exchange Type Filters */}
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
        <button
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
            selectedType === "Centralized Exchanges" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
          }`}
          onClick={() => onTypeChange("Centralized Exchanges")}
        >
          Centralized
        </button>
        <button
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
            selectedType === "Decentralized Exchanges" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
          }`}
          onClick={() => onTypeChange("Decentralized Exchanges")}
        >
          Decentralized
        </button>
        <button
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
            selectedType === "Multi-Exchange" ? "bg-[#4ED634] text-white" : "bg-[#1C1C1C] text-white hover:bg-gray-800"
          }`}
          onClick={() => onTypeChange("Multi-Exchange")}
        >
          Multi-Exchange
        </button>
      </div>
    </div>
  );
};

export default ExchangesHero; 