"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '../../components/Footer';

interface IntegrationStep {
  title: string;
  description: string;
}

interface ExchangeDetails {
  name: string;
  logo: string;
  apiDocs: string;
  steps: IntegrationStep[];
}

interface ExchangeMap {
  [key: string]: ExchangeDetails;
}

const exchanges: ExchangeMap = {
  'binance': {
    name: 'Binance',
    logo: '/WebsiteAssets/exchanges/binance.png',
    apiDocs: 'https://binance-docs.github.io/apidocs/',
    steps: [
      {
        title: 'Create API Keys',
        description: 'Log in to your Binance account and navigate to API Management under your user settings.'
      },
      {
        title: 'Configure API Permissions',
        description: 'Enable read permissions for your trading data. Write permissions are not required.'
      },
      {
        title: 'Copy API Credentials',
        description: 'Securely copy your API key and secret. Never share these credentials with anyone.'
      },
      {
        title: 'Enter API Details',
        description: 'Paste your API credentials in the Trade Journal integration page.'
      }
    ]
  },
  // Add other exchanges here
};

export default function ExchangePage() {
  const params = useParams();
  const exchangeId = params.exchangeId as string;
  const exchange = exchanges[exchangeId];

  if (!exchange) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-10 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Exchange Not Found</h1>
            <p className="mt-4 text-gray-600">The requested exchange could not be found.</p>
            <Link
              href="/exchanges"
              className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Return to Exchanges
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Exchange Header */}
      <div className="bg-black text-white py-6 sm:py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Back Button */}
          <Link 
            href="/exchanges"
            className="inline-flex items-center text-white hover:text-gray-300 mb-4 sm:mb-6 transition-colors"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Exchanges
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
              <Image
                src={exchange.logo}
                alt={`${exchange.name} logo`}
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{exchange.name} Integration Guide</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Steps */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 flex-grow">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {exchange.steps.map((step: IntegrationStep, index: number) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4 sm:mr-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black text-white rounded-full flex items-center justify-center text-sm sm:text-base">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* API Documentation Link */}
        <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Additional Resources</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            For more detailed information about the API integration, please refer to the official documentation:
          </p>
          <a
            href={exchange.apiDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Official API Documentation →
          </a>
        </div>
      </div>

      {/* Get Started Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full py-10 sm:py-12 md:py-16 mt-6 sm:mt-8 md:mt-10 relative overflow-hidden">
        {/* Abstract graphic elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#4ED634]/20 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-[#4ED634]/10 to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">Ready to integrate with {exchange.name}?</h2>
          <Link 
            href="/get-started" 
            className="inline-block bg-[#4ED634] hover:bg-[#45a049] text-black font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 