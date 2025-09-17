"use client";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, TooltipItem } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TokenAllocation {
  label: string;
  percentage: number;
  color: string;
  emoji?: string;
  isLocked?: boolean;
}

const tokenAllocations: TokenAllocation[] = [
  { label: 'Presale', percentage: 40, color: '#4ED634' },
  { label: 'Liquidity', percentage: 12, color: '#36A2EB' },
  { label: 'Ecosystem & Growth', percentage: 20, color: '#8A2BE2', emoji: '🚀', isLocked: true },
  { label: 'Team & Advisors', percentage: 8, color: '#9966FF', emoji: '👨‍💼', isLocked: true },
  { label: 'DAO Treasury', percentage: 10, color: '#B266FF', emoji: '🐷', isLocked: true },
  { label: 'Partnerships', percentage: 2, color: '#CC66FF', isLocked: true },
  { label: 'Marketing & Development', percentage: 8, color: '#FF6384' }
];

const TokenomicsDetails = () => {
  const chartData: ChartData<'pie'> = {
    labels: tokenAllocations.map(item => item.label),
    datasets: [
      {
        data: tokenAllocations.map(item => item.percentage),
        backgroundColor: tokenAllocations.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'pie'>) => {
            return ` ${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="bg-[#000000] rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart Section */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto aspect-square">
            <Pie data={chartData} options={chartOptions} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-gray-400">Total</div>
              <div className="text-2xl font-bold">100%</div>
            </div>
          </div>
        </div>

        {/* Allocation List */}
        <div className="space-y-6 mt-8 text-sm">
          {tokenAllocations.map((allocation, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: allocation.color }}
              />
              <span className="text-white">
                {allocation.isLocked ? 'Locked-' : ''} 
                {allocation.emoji && `${allocation.emoji} `}
                {allocation.label}: {allocation.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Cap Information */}
      <div className="mt-8 space-y-4 border-t border-gray-800 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Initial Market Cap:</span>
          <span className="text-white">0 $</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Circulating Market Cap:</span>
          <span className="text-white">0 $</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">FDV Market Cap:</span>
          <span className="text-white">0 $</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Tokenomics Score:</span>
          <span className="text-[#4ED634]">0 - Pending</span>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsDetails; 