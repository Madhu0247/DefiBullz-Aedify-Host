"use client";  // To indicate this is a client-side component

import React from 'react';
import Image from 'next/image';  // Import the Image component
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-[#000000] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
        {/* Column 1: Logo and name */}
        <div className="flex items-center">
          <div className=" text-[#11182B] px-4 py-2">
          <Image
                src="/WebsiteAssets/logo3.png"
                alt="Logo"
                className="w-300 h-200"
                width={300}
                height={200}
                /> {/* Logo */}
          </div>
        </div>

        {/* Column 2: Features */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Features</h3>
          <ul className="space-y-2">
            <li><Link href="/website/feature" className="text-sm opacity-75 hover:opacity-100">Trading Journal</Link></li>
            <li><Link href="/website/feature" className="text-sm opacity-75 hover:opacity-100">AI Insights</Link></li>
            <li><Link href="/website/feature" className="text-sm opacity-75 hover:opacity-100">Custom Strategy</Link></li>
            <li><Link href="/website/feature" className="text-sm opacity-75 hover:opacity-100">Trade Analytics</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/website/market" className="text-sm opacity-75 hover:opacity-100">Market Data</Link></li>
            <li><Link href="/website/market" className="text-sm opacity-75 hover:opacity-100">News</Link></li>
            <li><Link href="/website/blogs" className="text-sm opacity-75 hover:opacity-100">Blogs</Link></li>
            <li><a href="#" className="text-sm opacity-75 hover:opacity-100">FAQ&apos;s</a></li>  {/* Escape apostrophe */}
          </ul>
        </div>

        {/* Column 4: Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="/auth/signup" className="text-sm opacity-75 hover:opacity-100">Sign up</Link></li>
            <li><Link href="/auth/login" className="text-sm opacity-75 hover:opacity-100">Login</Link></li>
          </ul>
        </div>

        {/* Column 5: Learn */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><Link href="/website/learn" className="text-sm opacity-75 hover:opacity-100">What is AI Trading?</Link></li>
            <li><Link href="/website/learn" className="text-sm opacity-75 hover:opacity-100">Why Journal?</Link></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-12">
            <a href="#" className="text-sm opacity-75 hover:opacity-100">
                <Image src="/WebsiteAssets/FB.svg" alt="Facebook" className="w-6 h-6" width={24} height={24} />
            </a>
            <a href="#" className="text-sm opacity-75 hover:opacity-100">
                <Image src="/WebsiteAssets/IG.svg" alt="Instagram" className="w-6 h-6" width={24} height={24} />
            </a>
            <a href="#" className="text-sm opacity-75 hover:opacity-100">
                <Image src="/WebsiteAssets/X.svg" alt="Twitter" className="w-6 h-6" width={24} height={24} />
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;