import { NextRequest, NextResponse } from 'next/server';

// Mock news data for the market page
const mockNews = [
  {
    id: 1,
    title: "Bitcoin Reaches New Monthly High as Institutional Adoption Grows",
    summary: "Bitcoin surged to new monthly highs following increased institutional investment and positive regulatory developments.",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "CryptoNews",
    category: "Bitcoin"
  },
  {
    id: 2,
    title: "Ethereum Network Upgrade Shows Promising Results",
    summary: "The latest Ethereum network improvements have resulted in reduced gas fees and improved transaction speeds.",
    link: "#",
    pubDate: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    source: "DeFi Daily",
    category: "Ethereum"
  },
  {
    id: 3,
    title: "DeFi TVL Reaches New All-Time High of $45B",
    summary: "Total Value Locked in DeFi protocols continues to grow, indicating strong ecosystem health and adoption.",
    link: "#",
    pubDate: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    source: "DeFi Pulse",
    category: "DeFi"
  },
  {
    id: 4,
    title: "Major Exchange Announces Support for New Altcoins",
    summary: "Leading cryptocurrency exchange adds support for several promising altcoins, boosting market confidence.",
    link: "#",
    pubDate: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
    source: "Crypto Exchange News",
    category: "Exchange"
  },
  {
    id: 5,
    title: "Regulatory Clarity Improves Market Sentiment",
    summary: "New regulatory guidelines provide much-needed clarity for cryptocurrency businesses and investors.",
    link: "#",
    pubDate: new Date(Date.now() - 14400000).toISOString(), // 4 hours ago
    source: "Regulatory Watch",
    category: "Regulation"
  }
];

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from a news API
    // For now, we'll return mock data
    
    return NextResponse.json({
      news: mockNews,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}
