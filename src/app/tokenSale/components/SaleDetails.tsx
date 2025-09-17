import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const SaleDetails = () => {
  const [copied, setCopied] = useState(false);
  const presaleAddress = "Coming Soon...";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saleInfo = [
    { label: 'Token Name', value: 'DEFIBULLZ' },
    { label: 'Token Symbol', value: 'DBJ' },
    { label: 'Total Supply', value: '100,000,000' },
    { label: 'Tokens For Presale', value: '35,000,000' },
    { label: 'Tokens For Liquidity', value: '10,000,000' },
    { label: 'Soft Cap', value: '150 BNB' },
    { label: 'Hard Cap', value: '1,500 BNB' },
    { label: 'Presale Start Time (UTC)', value: '2025-07-19 00:00' },
    { label: 'Presale End Time (UTC)', value: '2025-08-10 00:00' },
    { label: 'Liquidity', value: '60 %' },
    { label: 'First Vesting Release', value: '40 %' },
    { label: 'Vesting Delay (Cliff)', value: '2 days' },
    { label: 'Vesting Time Period', value: '30 days' },
    { label: 'Vesting Release per Time Period', value: '15 %' },
  ];

  return (
    <div className="bg-[#000000] rounded-lg p-6">
      {/* Presale Address Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Presale Address</h3>
          <CopyToClipboard text={presaleAddress} onCopy={handleCopy}>
            <button className="text-[#4ED634] hover:text-[#3bc522] transition-colors">
              {copied ? 'Copied!' : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <div className="bg-[#0F1218] p-3 rounded-lg flex justify-between items-center">
          <code className="text-[#4ED634] text-sm break-all">{presaleAddress}</code>
        </div>
        <p className="text-red-500 text-xs mt-2">Do not send SOL directly to the presale address!</p>
      </div>

      {/* Sale Information Grid */}
      <div className="space-y-4">
        {saleInfo.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-400 text-sm">{item.label}</span>
            <span className="text-white font-medium text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleDetails; 