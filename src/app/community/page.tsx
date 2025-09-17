"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from "../components/Header";

// Dynamically import the component with SSR disabled
const CommunityPageContent = dynamic(
  () => import('./components/CommunityPageContent'),
  { ssr: false }
);

export default function CommunityPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="bg-[#000000] min-h-screen flex items-center justify-center text-white">Loading community page...</div>}>
        <CommunityPageContent />
      </Suspense>
    </>
  );
} 