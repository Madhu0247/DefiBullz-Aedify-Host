import client from './connection';

// Store market overview data (BTC dominance, fear & greed, etc.)
export async function storeMarketOverview(data: {
  total_market_cap: number;
  volume_24h: number;
  btc_dominance: number;
  fear_greed_index: number;
  fear_greed_label: string;
}) {
  try {
    const query = `
      INSERT INTO market_overview (total_market_cap, volume_24h, btc_dominance, fear_greed_index, fear_greed_label)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    
    const result = await client.query(query, [
      data.total_market_cap,
      data.volume_24h,
      data.btc_dominance,
      data.fear_greed_index,
      data.fear_greed_label
    ]);
    
    return result.rows[0];
  } catch (error) {
    console.error('Error storing market overview:', error);
    throw error;
  }
}

// Store top 10 coins data
export async function storeTopCoins(coins: any[]) {
  try {
    // First, clear existing data
    await client.query('DELETE FROM top_coins');
    
    // Insert new data
    for (let i = 0; i < coins.length && i < 10; i++) {
      const coin = coins[i];
      const query = `
        INSERT INTO top_coins (
          rank_position, name, symbol, price, change_1d, change_1w, 
          change_1m, change_1y, market_cap, volume_24h, ath, coin_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `;
      
      await client.query(query, [
        i + 1,
        coin.name,
        coin.symbol,
        coin.current_price,
        coin.price_change_percentage_24h || 0,
        coin.price_change_percentage_7d || 0,
        coin.price_change_percentage_30d || 0,
        coin.price_change_percentage_1y || 0,
        coin.market_cap,
        coin.total_volume,
        coin.ath || coin.current_price,
        coin.id
      ]);
    }
    
    console.log(`Stored ${Math.min(coins.length, 10)} top coins in database`);
  } catch (error) {
    console.error('Error storing top coins:', error);
    throw error;
  }
}

// Get market overview from database
export async function getMarketOverview() {
  try {
    const result = await client.query('SELECT * FROM market_overview ORDER BY last_updated DESC LIMIT 1');
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting market overview:', error);
    throw error;
  }
}

// Get top coins from database
export async function getTopCoins() {
  try {
    const result = await client.query('SELECT * FROM top_coins ORDER BY rank_position ASC');
    return result.rows;
  } catch (error) {
    console.error('Error getting top coins:', error);
    throw error;
  }
}
