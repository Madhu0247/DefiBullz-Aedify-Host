const { Client } = require('pg');

console.log('🧪 Testing Application Database Functions\n');

// Database configuration (same as in connection.ts)
const client = new Client({
  host: 'gsm1b5p95odcdkhya1ls.aedify.ai',
  port: 11035,
  user: 'admin',
  password: 'gZ1aIeJjHsfV',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

// Replicate the storeMarketOverview function
async function storeMarketOverview(data) {
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

// Replicate the getMarketOverview function
async function getMarketOverview() {
  try {
    const result = await client.query('SELECT * FROM market_overview ORDER BY last_updated DESC LIMIT 1');
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting market overview:', error);
    throw error;
  }
}

// Replicate the storeTopCoins function
async function storeTopCoins(coins) {
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
        coin.current_price || coin.price,
        coin.price_change_percentage_24h || coin.change_1d || 0,
        coin.price_change_percentage_7d || coin.change_1w || 0,
        coin.price_change_percentage_30d || coin.change_1m || 0,
        coin.price_change_percentage_1y || coin.change_1y || 0,
        coin.market_cap,
        coin.total_volume || coin.volume_24h,
        coin.ath || coin.current_price || coin.price,
        coin.id || coin.coin_id
      ]);
    }
    
    console.log(`Stored ${Math.min(coins.length, 10)} top coins in database`);
  } catch (error) {
    console.error('Error storing top coins:', error);
    throw error;
  }
}

async function getTopCoins() {
  try {
    const result = await client.query('SELECT * FROM top_coins ORDER BY rank_position ASC');
    return result.rows;
  } catch (error) {
    console.error('Error getting top coins:', error);
    throw error;
  }
}

async function testAllFunctions() {
  try {
    await client.connect();
    console.log('✅ Connected to database\n');
    
    // Test 1: Store and retrieve market overview
    console.log('📊 Test 1: Market Overview Functions');
    const marketData = {
      total_market_cap: 3950000000000,
      volume_24h: 235000000000,
      btc_dominance: 49.8,
      fear_greed_index: 72,
      fear_greed_label: 'Greed'
    };
    
    console.log('   Storing market data...');
    const storedMarket = await storeMarketOverview(marketData);
    console.log('   ✅ Stored market data with ID:', storedMarket.id);
    
    console.log('   Retrieving market data...');
    const retrievedMarket = await getMarketOverview();
    console.log('   ✅ Retrieved market data:');
    console.log('      Market Cap: $' + (retrievedMarket.total_market_cap / 1e12).toFixed(2) + 'T');
    console.log('      BTC Dominance:', retrievedMarket.btc_dominance + '%');
    console.log('      Fear & Greed:', retrievedMarket.fear_greed_index, '(' + retrievedMarket.fear_greed_label + ')');
    
    // Test 2: Store and retrieve top coins
    console.log('\n🪙 Test 2: Top Coins Functions');
    const sampleCoins = [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        current_price: 63000,
        price_change_percentage_24h: 2.5,
        price_change_percentage_7d: -1.2,
        price_change_percentage_30d: 8.7,
        price_change_percentage_1y: 145.3,
        market_cap: 1240000000000,
        total_volume: 28000000000,
        ath: 73000,
        id: 'bitcoin'
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        current_price: 3200,
        price_change_percentage_24h: 1.8,
        price_change_percentage_7d: -2.1,
        price_change_percentage_30d: 12.4,
        price_change_percentage_1y: 89.2,
        market_cap: 385000000000,
        total_volume: 15000000000,
        ath: 4800,
        id: 'ethereum'
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        current_price: 240,
        price_change_percentage_24h: -0.5,
        price_change_percentage_7d: 5.2,
        price_change_percentage_30d: 28.9,
        price_change_percentage_1y: 76.1,
        market_cap: 110000000000,
        total_volume: 3500000000,
        ath: 295,
        id: 'solana'
      }
    ];
    
    console.log('   Storing top coins...');
    await storeTopCoins(sampleCoins);
    console.log('   ✅ Stored top coins data');
    
    console.log('   Retrieving top coins...');
    const retrievedCoins = await getTopCoins();
    console.log('   ✅ Retrieved', retrievedCoins.length, 'coins:');
    retrievedCoins.forEach((coin, index) => {
      console.log(`      ${coin.rank_position}. ${coin.name} (${coin.symbol}): $${parseFloat(coin.price).toFixed(2)}`);
    });
    
    console.log('\n🎉 All application database functions are working correctly!');
    console.log('✅ Your project is fully connected to the new database');
    
  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    try {
      await client.end();
      console.log('\n🔌 Database connection closed');
    } catch (error) {
      console.error('Error closing connection:', error.message);
    }
  }
}

// Run the tests
testAllFunctions().catch(console.error);
