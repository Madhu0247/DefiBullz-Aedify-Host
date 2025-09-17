import { useState, useEffect } from 'react';

const SaleBoard = () => {
  const [amount, setAmount] = useState<string>('0');
  const [timeLeft, setTimeLeft] = useState({
    days: 100,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the launch date to 100 days from now when the component mounts
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 100);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const percentageButtons = [
    { label: '10%', value: 10 },
    { label: '25%', value: 25 },
    { label: '50%', value: 50 },
    { label: '75%', value: 75 },
    { label: '100%', value: 100 },
  ];

  const saleInfo = [
    { label: 'Minimum Buy', value: '0.02 BNB' },
    { label: 'Maximum Buy', value: '20 BNB' },
    { label: 'Presale Rate', value: '0 DBJ' },
    { label: 'Listing Rate', value: '0 DBJ' },
    { label: 'Total Contributors', value: '0' },
    { label: 'AVG Contribution', value: '0 BNB' },
    { label: 'My Contribution', value: '0 BNB' },
    { label: 'My Reserved Tokens', value: '0 DBJ' },
  ];

  return (
    <div className="bg-[#07080C] rounded-lg p-6">
      {/* Sale Timer */}
      <div className="mb-8">
        <h2 className="text-xl text-center mb-4">Sale Starts In</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { value: timeLeft.days.toString().padStart(2, '0'), label: 'DAY' },
            { value: timeLeft.hours.toString().padStart(2, '0'), label: 'HR' },
            { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'MIN' },
            { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'SEC' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold bg-[#0F1218] rounded-lg p-2 mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>0 BNB</span>
          <span>1,500 BNB</span>
        </div>
        <div className="w-full bg-[#0F1218] rounded-full h-2">
          <div className="bg-[#4ED634] h-2 rounded-full" style={{ width: '1%' }}></div>
        </div>
      </div>

      {/* Contribution Form */}
      <div className="mb-8">
        <h3 className="text-lg mb-4">Contribute</h3>
        <div className="relative mb-4">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#0F1218] rounded-lg p-3 pr-16 text-white"
            placeholder="0"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            BNB
          </span>
        </div>

        {/* Percentage Buttons */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {percentageButtons.map((btn, index) => (
            <button
              key={index}
              className="bg-[#0F1218] hover:bg-[#1a1f2a] rounded-lg py-2 text-sm transition-colors"
            >
              {btn.label}
            </button>
          ))}
        </div>

        <button 
          className="w-full bg-[#4ED634] text-black py-3 rounded-lg font-semibold hover:bg-[#3bc522] transition-colors mb-8"
          disabled={timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0}
        >
          {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 
            ? 'Sale Not Started' 
            : 'Buy DBJ'}
        </button>

        {/* Sale Information */}
        <div>
          {saleInfo.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between py-3 text-sm">
                <span className="text-gray-400">{item.label}</span>
                <span>{item.value}</span>
              </div>
              {index < saleInfo.length - 1 && (
                <div className="border-t border-[#1a1f2a]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleBoard; 