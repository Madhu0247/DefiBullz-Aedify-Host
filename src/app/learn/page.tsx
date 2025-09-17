"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from "../components/Header";

// Dynamically import the component with SSR disabled
const LearnPageContent = dynamic(
  () => import('./components/LearnPageContent'),
  { ssr: false }
);

export default function LearnPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <div className="w-16 h-16 border-t-4 border-b-4 border-[#4ED634] rounded-full animate-spin mb-4"></div>
          <p className="text-gray-700 text-center">Loading learn page content...</p>
        </div>
      }>
        <LearnPageContent />
      </Suspense>
    </>
  );
}