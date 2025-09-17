import { NextResponse } from 'next/server';
import { storeMarketOverview, storeTopCoins, getMarketOverview, getTopCoins } from '@/lib/database/marketService';

interface LiveCoinWatchCoin {
  code: string;
  name: string;
  webp64?: string;
  rate: number;
  cap: number;
  volume: number;
  allTimeHighUSD: number;
  delta: {
    day: number;
    week: number;
    month: number;
    year: number;
  };
  history?: number[];
}

interface TransformedCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  ath: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_1y: number;
  sparkline_in_7d: {
    price: number[];
  };
  rank: number;
}

// Mock data that matches LiveCoinWatch structure
const mockLiveCoinWatchData: LiveCoinWatchCoin[] = [
  {
    code: "BTC",
    name: "Bitcoin",
    webp64: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp",
    rate: 43250.50,
    cap: 847000000000,
    volume: 25000000000,
    allTimeHighUSD: 69045,
    delta: {
      day: 1.025, // 2.5% increase
      week: 0.988, // 1.2% decrease
      month: 1.087, // 8.7% increase
      year: 2.254  // 125.4% increase
    },
    history: [42000, 42500, 43000, 42800, 43200, 43100, 43250]
  },
  {
    code: "ETH",
    name: "Ethereum",
    webp64: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/eth.webp",
    rate: 2650.75,
    cap: 318000000000,
    volume: 15000000000,
    allTimeHighUSD: 4878,
    delta: {
      day: 1.018,
      week: 0.979,
      month: 1.123,
      year: 1.892
    },
    history: [2600, 2620, 2640, 2630, 2650, 2645, 2651]
  },
  {
    code: "BNB",
    name: "BNB",
    webp64: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/bnb.webp",
    rate: 315.20,
    cap: 47000000000,
    volume: 1200000000,
    allTimeHighUSD: 686.31,
    delta: {
      day: 1.005,
      week: 1.032,
      month: 1.058,
      year: 1.456
    },
    history: [310, 312, 314, 313, 315, 314, 315]
  },
  {
    code: "SOL",
    name: "Solana",
    webp64: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/sol.webp",
    rate: 98.45,
    cap: 42000000000,
    volume: 2100000000,
    allTimeHighUSD: 259.96,
    delta: {
      day: 1.042,
      week: 1.085,
      month: 1.157,
      year: 3.348
    },
    history: [92, 94, 96, 95, 98, 97, 98]
  },
  {
    code: "ADA",
    name: "Cardano",
    webp64: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/ada.webp",
    rate: 0.485,
    cap: 17000000000,
    volume: 450000000,
    allTimeHighUSD: 3.09,
    delta: {
      day: 0.992,
      week: 1.021,
      month: 1.074,
      year: 1.123
    },
    history: [0.47, 0.48, 0.49, 0.48, 0.485, 0.484, 0.485]
  }
];

// Ensure the API key is being fetched from the environment
const API_KEY = process.env.LIVECOINWATCH_API_KEY;

export async function GET() {
  try {
    let data: LiveCoinWatchCoin[] = mockLiveCoinWatchData;

    // Try to fetch real data if API key is available
    if (API_KEY) {
      try {
        const response = await fetch('https://api.livecoinwatch.com/coins/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
          body: JSON.stringify({
            currency: 'USD',
            sort: 'rank',
            order: 'ascending',
            offset: 0,
            limit: 100,
            meta: true,
          }),
        });

        if (response.ok) {
          data = await response.json();
          console.log('Using real LiveCoinWatch data');
        } else {
          console.log('LiveCoinWatch API failed, using mock data');
        }
      } catch (apiError) {
        console.log('LiveCoinWatch API error, using mock data:', apiError);
      }
    } else {
      console.log('No LiveCoinWatch API key, using mock data');
    }

    // Transform the data to match our frontend requirements
    const transformedData = data.map((coin: LiveCoinWatchCoin, index: number): TransformedCoin => ({
      id: coin.code.toLowerCase(),
      name: coin.name,
      symbol: coin.code,
      image: coin.webp64 || `https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/${coin.code.toLowerCase()}.webp`,
      current_price: coin.rate,
      market_cap: coin.cap,
      total_volume: coin.volume,
      ath: coin.allTimeHighUSD,
      price_change_percentage_24h: (coin.delta.day - 1) * 100,
      price_change_percentage_7d: (coin.delta.week - 1) * 100,
      price_change_percentage_30d: (coin.delta.month - 1) * 100,
      price_change_percentage_1y: (coin.delta.year - 1) * 100,
      sparkline_in_7d: {
        price: coin.history || [],
      },
      rank: index + 1
    }));

    // Calculate market stats
    const totalMarketCap = transformedData.reduce((sum, coin) => sum + coin.market_cap, 0);
    const totalVolume = transformedData.reduce((sum, coin) => sum + coin.total_volume, 0);
    
    const marketStats = {
      cap: totalMarketCap,
      volume: totalVolume,
      btcDominance: 48.5,
      ethDominance: 18.2,
      defiTvl: 45000000000,
      liquidity: 85000000000
    };

    // Store data in database
    try {
      // Store market overview
      await storeMarketOverview({
        total_market_cap: totalMarketCap,
        volume_24h: totalVolume,
        btc_dominance: 48.5,
        fear_greed_index: 65, // Mock value for now
        fear_greed_label: 'Greed'
      });

      // Store top 10 coins
      await storeTopCoins(transformedData.slice(0, 10));
      
      console.log('✅ Data successfully stored in database');
    } catch (dbError) {
      console.error('❌ Database storage failed:', dbError);
      // Continue without failing the API call
    }

    const response = {
      coins: transformedData,
      marketStats: marketStats,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching market data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}
