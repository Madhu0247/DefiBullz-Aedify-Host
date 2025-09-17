import React from 'react';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';

const Header = () => {
    const socialGroups = [
        {
            name: 'Discord',
            icon: '/WebsiteAssets/community/discord.svg',
            members: '15.2K',
            link: '#',
            bgColor: 'bg-[#5865F2]'
        },
        {
            name: 'Telegram',
            icon: '/WebsiteAssets/community/telegram.svg',
            members: '12.8K',
            link: '#',
            bgColor: 'bg-[#229ED9]'
        },
        {
            name: 'WhatsApp',
            icon: '/WebsiteAssets/community/whatsapp.svg',
            members: '8.5K',
            link: '#',
            bgColor: 'bg-[#25D366]'
        },
        {
            name: 'X',
            icon: '/WebsiteAssets/community/x.svg',
            members: '21.3K',
            link: '#',
            bgColor: 'bg-black border border-gray-700'
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-20 pb-10 px-4 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">Join Our Trading Community</h1>
            <p className="text-lg md:text-sm text-center max-w-3xl mb-10 text-gray-300">
                Connect with fellow traders, share insights, participate in events, and grow together in our vibrant community.
            </p>
            
            {/* Social Media Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 w-full max-w-6xl">
                {socialGroups.map((group, index) => (
                    <a 
                        key={index}
                        href={group.link}
                        className={`${group.bgColor} rounded-xl p-6 flex items-center justify-between hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                        <div className="flex items-center">
                            <div className="w-10 h-10 relative mr-4">
                                <Image
                                    src={group.icon}
                                    alt={group.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{group.name}</h3>
                                <p className="text-sm opacity-90">{group.members} Members</p>
                            </div>
                        </div>
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </a>
                ))}
            </div>

            {/* Lottie Animation */}
            <div className="relative w-full max-w-6xl flex justify-center">
                <Player
                    src="https://lottie.host/8eb3592d-41a8-4c89-8287-c00a5007a6ef/7OnUCXq9Xt.lottie"
                    className="w-full max-w-3xl"
                    loop
                    autoplay
                    style={{ maxHeight: '600px' }}
                />
            </div>
        </div>
    );
};

export default Header; 