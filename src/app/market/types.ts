// Shared types for the market page and components

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  price_change_percentage_30d: number | null;
  price_change_percentage_1y: number | null;
  ath: number | null;
  rank: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface ApiCoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  price_change_percentage_30d: number | null;
  price_change_percentage_1y: number | null;
  ath: number | null;
  rank: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

export interface ApiResponse {
  coins: ApiCoinData[];
} 