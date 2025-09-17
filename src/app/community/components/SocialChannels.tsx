import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialChannels = () => {
  const socialChannels = [
    {
      name: 'Discord',
      members: '15.2K Members',
      icon: '/WebsiteAssets/community/discord-icon.svg',
      url: 'https://discord.gg/bullzai',
      color: 'bg-[#5865F2]',
    },
    {
      name: 'Telegram',
      members: '12.8K Members',
      icon: '/WebsiteAssets/community/telegram-icon.svg',
      url: 'https://t.me/bullzai',
      color: 'bg-[#28A8EA]',
    },
    {
      name: 'WhatsApp',
      members: '8.5K Members',
      icon: '/WebsiteAssets/community/whatsapp-icon.svg',
      url: 'https://whatsapp.com/channel/bullzai',
      color: 'bg-[#25D366]',
    },
    {
      name: 'X',
      members: '21.3K Members',
      icon: '/WebsiteAssets/community/x-icon.svg',
      url: 'https://x.com/bullzai',
      color: 'bg-black border border-gray-700',
    }
  ];

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
          Join Our Community
        </h2>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Connect with fellow traders, share insights, and stay updated with the latest trading strategies and market trends.
        </p>
        
        <div className="flex flex-col space-y-4 sm:space-y-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto">
          {socialChannels.map((channel, index) => (
            <Link 
              href={channel.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className={`${channel.color} rounded-2xl hover:opacity-90 transition-opacity duration-300 overflow-hidden`}
            >
              <div className="relative flex items-center justify-between p-4 sm:p-6 w-full">
                <div className="flex items-center">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-3 sm:mr-4">
                    <Image
                      src={channel.icon}
                      alt={channel.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                      {channel.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {channel.members}
                    </p>
                  </div>
                </div>
                <div className="text-white text-xl sm:text-2xl">
                  &gt;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialChannels; 