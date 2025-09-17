import { NextRequest, NextResponse } from 'next/server';

// This endpoint is used by market-client.tsx
export async function GET(request: NextRequest) {
  try {
    // Mock response for coins endpoint
    const mockCoins = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        current_price: 43250.50,
        market_cap: 847000000000,
        total_volume: 25000000000,
        price_change_percentage_24h: 2.5,
        rank: 1
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        current_price: 2650.75,
        market_cap: 318000000000,
        total_volume: 15000000000,
        price_change_percentage_24h: 1.8,
        rank: 2
      }
    ];

    return NextResponse.json({ coins: mockCoins });
  } catch (error) {
    console.error('Error fetching coins data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch coins data' },
      { status: 500 }
    );
  }
}
