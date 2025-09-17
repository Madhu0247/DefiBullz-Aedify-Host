"use client";

const MarketDisclaimer = () => {
  return (
    <div className="mt-8 bg-[#4ED634] w-[100vw] relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="container mx-auto">
        <div className="p-6">
          <h2 className="text-white text-2xl font-medium mb-4">Today's Cryptocurrency Prices by Live Coin Watch</h2>
          <p className="text-black text-sm mb-2">
            The global crypto market cap is <span className="text-white">$3.34T</span>, a <span className="text-red-500">1.65%</span> decrease over the last day. 
            <span className="text-[#4ED634] hover:underline cursor-pointer ml-1">Read More</span>
          </p>
          <p className="text-black text-sm">
            Find out how we work by clicking here. 
            <span className="text-[#4ED634] hover:underline cursor-pointer ml-1">Read More</span>
          </p>
          <p>The data displayed here shouldn&apos;t be considered as financial advice.</p>
        </div>
      </div>
    </div>
  );
};

export default MarketDisclaimer; 