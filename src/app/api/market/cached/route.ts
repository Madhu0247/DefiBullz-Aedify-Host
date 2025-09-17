import { NextResponse } from 'next/server';
import { getMarketOverview, getTopCoins } from '@/lib/database/marketService';

export async function GET() {
  try {
    // Get data from database
    const [marketOverview, topCoins] = await Promise.all([
      getMarketOverview(),
      getTopCoins()
    ]);

    // If no data in database, return error asking to fetch fresh data first
    if (!marketOverview || !topCoins || topCoins.length === 0) {
      return NextResponse.json(
        { 
          error: 'No cached data available. Please fetch fresh data first.',
          message: 'Call /api/market/all to populate the database with fresh data.'
        },
        { status: 404 }
      );
    }

    // Transform database data to match frontend format
    const coins = topCoins.map(coin => ({
      id: coin.coin_id,
      name: coin.name,
      symbol: coin.symbol,
      image: `https://cryptologos.cc/logos/${coin.symbol.toLowerCase()}-${coin.name.toLowerCase().replace(/\s+/g, '-')}-logo.png`,
      current_price: parseFloat(coin.price),
      market_cap: parseFloat(coin.market_cap),
      total_volume: parseFloat(coin.volume_24h),
      ath: parseFloat(coin.ath),
      price_change_percentage_24h: parseFloat(coin.change_1d),
      price_change_percentage_7d: parseFloat(coin.change_1w),
      price_change_percentage_30d: parseFloat(coin.change_1m),
      price_change_percentage_1y: parseFloat(coin.change_1y),
      sparkline_in_7d: { price: [] }, // Empty for cached data
      rank: coin.rank_position
    }));

    const marketStats = {
      cap: parseFloat(marketOverview.total_market_cap),
      volume: parseFloat(marketOverview.volume_24h),
      btcDominance: parseFloat(marketOverview.btc_dominance),
      ethDominance: 18.2, // Calculate this later
      defiTvl: 45000000000, // Mock for now
      liquidity: 85000000000 // Mock for now
    };

    const response = {
      coins,
      marketStats,
      timestamp: marketOverview.last_updated,
      source: 'database_cache',
      cached: true
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      }
    });

  } catch (error) {
    console.error('Error fetching cached market data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cached market data' },
      { status: 500 }
    );
  }
}
