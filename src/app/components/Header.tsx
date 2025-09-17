"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/feature", label: "Features" },
    { href: "/market", label: "Market" },
    { href: "/pricing", label: "Pricing" },
    { href: "/community", label: "Community" },
    // { href: "/store", label: "Store" },
    { href: "/learn", label: "Learn" },
    { href: "/exchanges", label: "Exchanges" },
  ];

  return (
    <header className="bg-black text-white py-3 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section - Clickable */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/WebsiteAssets/logo3.png"
              alt="Logo"
              className="cursor-pointer"
              width={500}
              height={80}
              style={{ 
                height: 'auto',
                width: 'auto',
                maxHeight: '100px',
                maxWidth: '200px'
              }}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button
          className="lg:hidden z-50 p-2 hover:bg-gray-800 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-0.5 bg-white mb-2"></div>
          <div className="w-7 h-0.5 bg-white mb-2"></div>
          <div className="w-7 h-0.5 bg-white"></div>
        </button>

        {/* Navigation Links Section - Hidden on mobile unless menu is open */}
        <nav className={`
          fixed lg:relative top-0 right-0 h-[100vh] lg:h-auto w-72 lg:w-auto
          bg-black lg:bg-transparent
          transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0
          transition-transform duration-200 ease-in-out
          lg:flex lg:items-center
          ${isMenuOpen ? 'flex' : 'hidden'} lg:block
          z-40 px-8 py-20 lg:p-0
          flex-col justify-start
        `}>
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-[#4ED634] font-bold" : ""
                } hover:text-[#4ED634] transition-colors text-base lg:text-xs tracking-wide`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons - Inside nav for mobile */}
          <div className="lg:hidden mt-auto pt-8 flex flex-col space-y-4">
            <Link href="/tokenSale" className="w-full">
              <button className="w-full bg-[#4ED634] text-black py-3 px-4 rounded-md hover:bg-[#3bc522] transition-colors text-sm font-medium">
                Buy DefiBullz (DBJ)
              </button>
            </Link>
            <Link href="/auth/signup" className="w-full">
              <button className="w-full border border-[#4ED634] text-[#4ED634] py-3 px-4 rounded-md hover:bg-[#4ED634] hover:text-black transition-colors text-sm font-medium">
                Sign Up
              </button>
            </Link>
            <Link href="/auth/signin" className="w-full">
              <button className="w-full border border-white text-white py-3 px-4 rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium">
                Log In
              </button>
            </Link>
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex space-x-3 text-xs">
          <Link 
            href="/tokenSale" 
            className="inline-block"
          >
            <button className="bg-[#4ED634] text-black py-1.5 px-3 rounded-md hover:bg-[#3bc522] transition-colors font-medium">
              Buy DefiBullz (DBJ)
            </button>
          </Link>
          <Link 
            href="/auth/signup" 
            className="inline-block"
          >
            <button className="border border-[#4ED634] text-[#4ED634] py-1.5 px-3 rounded-md hover:bg-[#4ED634] hover:text-black transition-colors font-medium">
              Sign Up
            </button>
          </Link>
          <Link 
            href="/auth/signin"
            className="inline-block"
          >
            <button className="border border-[#4ED634] text-[#4ED634] py-1.5 px-3 rounded-md hover:bg-white hover:text-black transition-colors font-medium">
              Log In
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;