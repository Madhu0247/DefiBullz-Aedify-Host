"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from "../components/Header";

// Dynamically import components for better performance
const ExchangesHero = dynamic(() => import('./components/ExchangesHero'));
const ExchangesList = dynamic(() => import('./components/ExchangesList'));

export default function ExchangesPage() {
  const [selectedType, setSelectedType] = React.useState("Centralized Exchanges");

  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 border-t-4 border-b-4 border-[#4ED634] rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400 text-center">Loading exchanges...</p>
        </div>
      }>
        <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
          <ExchangesHero selectedType={selectedType} onTypeChange={setSelectedType} />
          <ExchangesList selectedType={selectedType} />
        </div>
      </Suspense>
    </>
  );
} 