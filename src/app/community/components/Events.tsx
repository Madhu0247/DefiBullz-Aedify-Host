import React from 'react';
import Image from 'next/image';

const Events = () => {
    const upcomingEvents = [
        {
            title: "Crypto Trading Masterclass",
            date: "Coming Soon",
            time: "2:00 PM UTC",
            description: "Learn advanced cryptocurrency trading strategies from industry experts.",
            image: {
                webp: {
                    sm: "/WebsiteAssets/community/event-1-sm.webp",
                    md: "/WebsiteAssets/community/event-1-md.webp",
                    lg: "/WebsiteAssets/community/event-1-lg.webp",
                },
                fallback: "/WebsiteAssets/community/event-1-optimized.png"
            },
            registrationLink: "#"
        },
        {
            title: "Stock Market Outlook 2024",
            date: "Coming Soon",
            time: "3:30 PM UTC",
            description: "Analysis of current market trends and forecasts for the remainder of 2024.",
            image: {
                webp: {
                    sm: "/WebsiteAssets/community/event-2-sm.webp",
                    md: "/WebsiteAssets/community/event-2-md.webp",
                    lg: "/WebsiteAssets/community/event-2-lg.webp",
                },
                fallback: "/WebsiteAssets/community/event-2-optimized.png"
            },
            registrationLink: "#"
        },
        {
            title: "Options Trading Workshop",
            date: "Coming Soon",
            time: "1:00 PM UTC",
            description: "Hands-on workshop covering essential options trading techniques for beginners.",
            image: {
                webp: {
                    sm: "/WebsiteAssets/community/event-3-sm.webp",
                    md: "/WebsiteAssets/community/event-3-md.webp",
                    lg: "/WebsiteAssets/community/event-3-lg.webp",
                },
                fallback: "/WebsiteAssets/community/event-3-optimized.png"
            },
            registrationLink: "#"
        }
    ];

    return (
        <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-[#000000]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-0">Upcoming Events</h2>
                    <button className="bg-transparent border border-[#4ED634] text-[#4ED634] px-4 py-2 rounded-md hover:bg-[#4ED634] hover:text-black transition-all duration-300 text-sm sm:text-base">
                        View All Events
                    </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {upcomingEvents.map((event, index) => (
                        <div 
                            key={index} 
                            className="bg-[#0D0F12] border border-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative h-40 sm:h-44 md:h-48 w-full">
                                <picture>
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet={event.image.webp.lg}
                                        type="image/webp"
                                    />
                                    <source
                                        media="(min-width: 640px)"
                                        srcSet={event.image.webp.md}
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={event.image.webp.sm}
                                        type="image/webp"
                                    />
                                    <Image 
                                        src={event.image.fallback}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        priority={index === 0}
                                    />
                                </picture>
                            </div>
                            <div className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="text-xs sm:text-sm bg-[#1E2128] text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                                        {event.date}
                                    </span>
                                    <span className="text-xs sm:text-sm bg-[#1E2128] text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                                        {event.time}
                                    </span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">{event.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2">{event.description}</p>
                                <a 
                                    href={event.registrationLink} 
                                    className="block w-full text-center bg-[#4ED634] text-black py-2 px-4 rounded-md hover:bg-[#3DB025] transition-all duration-300 text-sm sm:text-base font-medium"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events; 