"use client";

import Header from "../components/Header";
import Profile from './components/Profile';
import SaleBoard from './components/SaleBoard';
import TokenDistribution from './components/TokenDistribution';

const TokenSalePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Profile />
            </div>
            <div className="lg:col-span-4 space-y-4">
              <SaleBoard />
              <TokenDistribution />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TokenSalePage; 