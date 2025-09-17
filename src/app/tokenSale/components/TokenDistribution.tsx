import Image from 'next/image';

const TokenDistribution = () => {
  const timeUnits = [
    { value: '00', label: 'DAY' },
    { value: '00', label: 'HR' },
    { value: '00', label: 'MIN' },
    { value: '00', label: 'SEC' },
  ];

  const tokenDetails = [
    {
      label: 'Token Address',
      value: 'Coming Soon..',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      valueColor: 'text-[#4ED634]'
    },
    {
      label: 'Listing Dex',
      value: 'Raydium V5',
    //   icon: '/icons/raydium.png'
    },
    {
      label: 'Chart',
      value: 'Dextools',
    //   icon: '/icons/dextools.png'
    },
    {
      label: 'Chart',
      value: 'Geckoterminal',
    //   icon: '/icons/geckoterminal.png'
    },
    {
      label: 'Chart',
      value: 'Dexscreener',
      icon: '/icons/dexscreener.png'
    }
  ];

  const tokenFlags = [
    { label: 'Mintable', value: 'No' },
    { label: 'Freezable', value: 'No' },
    { label: 'Mutable', value: 'No' }
  ];

  return (
    <div className="bg-[#07080C] rounded-lg p-6 mt-4">
      {/* Title Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-md">Estimated Token Distribution</h2>
        <button className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Timer Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold bg-[#0F1218] rounded-lg p-2 mb-1">
              {unit.value}
            </div>
            <div className="text-sm text-gray-400">{unit.label}</div>
          </div>
        ))}
      </div>

      {/* Token Details */}
      <div className="space-y-2">
        {tokenDetails.map((detail, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-[#1a1f2a]">
            <span className="text-gray-400 text-sm">{detail.label}</span>
            <div className="flex items-center text-sm gap-2">
              <span className={detail.valueColor || 'text-white'}>
                {detail.value}
              </span>
              {typeof detail.icon === 'string' ? (
                <Image
                  src={detail.icon}
                  alt={detail.value}
                  width={20}
                  height={20}
                  className="opacity-75"
                />
              ) : (
                detail.icon
              )}
            </div>
          </div>
        ))}

        {/* Token Flags */}
        {tokenFlags.map((flag, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-[#1a1f2a]">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">{flag.label}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#4ED634]">{flag.value}</span>
              <svg className="w-5 h-5 text-[#4ED634]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenDistribution; 