import Image from 'next/image';
import Link from 'next/link';
import TokenNav from './TokenNav';
import { useState } from 'react';
import TokenomicsDetails from './TokenomicsDetails';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-[#07080C] rounded-lg p-6">
      {/* Profile Header with Image */}
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden mb-4">
        <Image
          src="/WebsiteAssets/Token/Tokenbanner.svg"
          alt="DefiBullz Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-2 right-2 bg-[#4ED634] text-black px-3 py-1 rounded-full text-sm font-medium">
          SALE LIVE
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 relative">
            <Image
              src="/WebsiteAssets/Token/tokenimg1.png"
              alt="DefiBullz Logo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">DefiBullz</h1>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com/defibullz" target="_blank" className="text-gray-400 hover:text-[#4ED634] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
          <Link href="https://t.me/defibullz" target="_blank" className="text-gray-400 hover:text-[#4ED634] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.26-2.06-.48-.83-.27-1.49-.42-1.43-.89.03-.25.39-.51 1.08-.78 4.24-1.84 7.07-3.06 8.49-3.64 4.04-1.66 4.88-1.95 5.42-1.96.12 0 .39.03.56.18.13.12.17.28.19.45-.02.07-.02.2-.03.25z"/>
            </svg>
          </Link>
          <Link href="https://discord.gg/defibullz" target="_blank" className="text-gray-400 hover:text-[#4ED634] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <TokenNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Section - Show either About or Sale content */}
      {activeTab === 'about' && (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🚀 Platform Launching Soon</h2>
            <h3 className="text-lg mb-4">Building the Future of Smart Crypto Trading</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              We're developing an intelligent crypto trading platform that will revolutionize how traders analyze and improve their performance. Our AI-powered journaling system, advanced analytics dashboard, and strategy builder are currently under construction. Stay tuned for the launch of tools that will help you log trades, unlock insights, and fine-tune your trading edge with cutting-edge technology.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🔑 What Makes $BULLZ Special?</h2>
            <ul className="space-y-4 text-[13px] text-gray-400">
              <li>• Access Premium AI Features Use $BULLZ to unlock advanced insights, strategy simulations, and in-depth trade analysis.</li>
              <li>• Stake for Rewards & Upgrades Stake $BULLZ to gain platform perks, early access to new features, and tiered insights.</li>
              <li>• Participate in DAO Voting Shape the future of DefiBullz. $BULLZ holders help decide platform upgrades and ecosystem direction.</li>
              <li>• Reduced Fees Across the Board Use $BULLZ to pay for journal upgrades, marketplace purchases, and even subscription tiers — all at discounted rates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">🔮 Vision-Backed, Community-Driven</h2>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              We&apos;re building the first AI-powered crypto journaling ecosystem with real-time sync, personalized analytics, and adaptive trading intelligence. The $BULLZ token will grow in utility as our product evolves, with phases of expansion into mobile apps, trading strategy automation, and data marketplace integrations.
            </p>
            <p className="text-gray-400 text-sm mt-4">Join us early. Help shape the tools that define smarter trading.</p>
          </div>
        </>
      )}

      {activeTab === 'sale' && (
        <div className="mt-8">
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold mb-4">Sale Information</h2>
            <p className="text-gray-400">Sale details will be available soon.</p>
          </div>
        </div>
      )}

      {activeTab === 'tokenomics' && (
        <div className="mt-8">
          <TokenomicsDetails />
        </div>
      )}
    </div>
  );
};

export default Profile; 