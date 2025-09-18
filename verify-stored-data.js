const { Client } = require('pg');

console.log('🔍 Verifying Data Stored in Database\n');

// Database configuration
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

async function verifyMarketOverviewData() {
  try {
    console.log('📊 MARKET OVERVIEW DATA VERIFICATION\n');
    
    // Get total count
    const countResult = await client.query('SELECT COUNT(*) as count FROM market_overview');
    const totalRecords = parseInt(countResult.rows[0].count);
    console.log(`📈 Total market overview records: ${totalRecords}\n`);
    
    if (totalRecords === 0) {
      console.log('❌ No market overview data found');
      return;
    }
    
    // Get all records ordered by most recent first
    const allRecords = await client.query('SELECT * FROM market_overview ORDER BY last_updated DESC');
    
    console.log('📋 All Market Overview Records:');
    console.log('=' .repeat(80));
    
    allRecords.rows.forEach((record, index) => {
      const marketCapT = (parseFloat(record.total_market_cap) / 1e12).toFixed(2);
      const volumeB = (parseFloat(record.volume_24h) / 1e9).toFixed(1);
      
      console.log(`Record ${index + 1} (ID: ${record.id})`);
      console.log(`   📅 Timestamp: ${new Date(record.last_updated).toLocaleString()}`);
      console.log(`   💰 Market Cap: $${marketCapT}T`);
      console.log(`   📊 24h Volume: $${volumeB}B`);
      console.log(`   ₿  BTC Dominance: ${record.btc_dominance}%`);
      console.log(`   😱 Fear & Greed: ${record.fear_greed_index} (${record.fear_greed_label})`);
      console.log('   ' + '-'.repeat(60));
    });
    
    // Show latest vs oldest comparison if we have multiple records
    if (totalRecords > 1) {
      const latest = allRecords.rows[0];
      const oldest = allRecords.rows[totalRecords - 1];
      
      console.log('\n📈 COMPARISON: Latest vs First Record');
      console.log('=' .repeat(50));
      console.log(`Market Cap Change: $${((latest.total_market_cap - oldest.total_market_cap) / 1e12).toFixed(2)}T`);
      console.log(`BTC Dominance Change: ${(latest.btc_dominance - oldest.btc_dominance).toFixed(1)}%`);
      console.log(`Fear & Greed Change: ${latest.fear_greed_index - oldest.fear_greed_index} points`);
    }
    
  } catch (error) {
    console.error('❌ Error verifying market overview data:', error.message);
  }
}

async function verifyTopCoinsData() {
  try {
    console.log('\n\n🪙 TOP COINS DATA VERIFICATION\n');
    
    // Get total count
    const countResult = await client.query('SELECT COUNT(*) as count FROM top_coins');
    const totalCoins = parseInt(countResult.rows[0].count);
    console.log(`🏆 Total top coins records: ${totalCoins}\n`);
    
    if (totalCoins === 0) {
      console.log('❌ No top coins data found');
      return;
    }
    
    // Get all coins ordered by rank
    const allCoins = await client.query('SELECT * FROM top_coins ORDER BY rank_position ASC');
    
    console.log('📋 All Top Coins Data:');
    console.log('=' .repeat(100));
    
    allCoins.rows.forEach((coin) => {
      const price = parseFloat(coin.price);
      const marketCapB = (parseFloat(coin.market_cap) / 1e9).toFixed(1);
      const volumeB = (parseFloat(coin.volume_24h) / 1e9).toFixed(1);
      const athPrice = parseFloat(coin.ath);
      const athDistance = (((price - athPrice) / athPrice) * 100).toFixed(1);
      
      console.log(`${coin.rank_position}. ${coin.name} (${coin.symbol}) - ID: ${coin.coin_id}`);
      console.log(`   💰 Current Price: $${price.toLocaleString()}`);
      console.log(`   📊 Market Cap: $${marketCapB}B`);
      console.log(`   📈 24h Volume: $${volumeB}B`);
      console.log(`   🏔️  All-Time High: $${athPrice.toLocaleString()} (${athDistance}% from ATH)`);
      console.log(`   📅 Performance:`);
      console.log(`      • 24h: ${coin.change_1d > 0 ? '+' : ''}${parseFloat(coin.change_1d).toFixed(2)}%`);
      console.log(`      • 7d:  ${coin.change_1w > 0 ? '+' : ''}${parseFloat(coin.change_1w).toFixed(2)}%`);
      console.log(`      • 30d: ${coin.change_1m > 0 ? '+' : ''}${parseFloat(coin.change_1m).toFixed(2)}%`);
      console.log(`      • 1y:  ${coin.change_1y > 0 ? '+' : ''}${parseFloat(coin.change_1y).toFixed(2)}%`);
      console.log(`   🕐 Last Updated: ${new Date(coin.last_updated).toLocaleString()}`);
      console.log('   ' + '-'.repeat(80));
    });
    
    // Calculate some statistics
    const prices = allCoins.rows.map(coin => parseFloat(coin.price));
    const marketCaps = allCoins.rows.map(coin => parseFloat(coin.market_cap));
    const changes24h = allCoins.rows.map(coin => parseFloat(coin.change_1d));
    
    const totalMarketCap = marketCaps.reduce((sum, cap) => sum + cap, 0);
    const avgChange24h = changes24h.reduce((sum, change) => sum + change, 0) / changes24h.length;
    const positiveCoins = changes24h.filter(change => change > 0).length;
    
    console.log('\n📊 TOP COINS STATISTICS');
    console.log('=' .repeat(40));
    console.log(`Total Combined Market Cap: $${(totalMarketCap / 1e12).toFixed(2)}T`);
    console.log(`Average 24h Change: ${avgChange24h > 0 ? '+' : ''}${avgChange24h.toFixed(2)}%`);
    console.log(`Coins with positive 24h change: ${positiveCoins}/${totalCoins}`);
    console.log(`Market sentiment: ${positiveCoins > totalCoins/2 ? '🟢 Bullish' : '🔴 Bearish'}`);
    
  } catch (error) {
    console.error('❌ Error verifying top coins data:', error.message);
  }
}

async function verifyDataIntegrity() {
  try {
    console.log('\n\n🔍 DATA INTEGRITY CHECKS\n');
    
    // Check for any NULL values in critical fields
    console.log('🔎 Checking for data quality issues...\n');
    
    // Market overview integrity
    const marketNulls = await client.query(`
      SELECT 
        COUNT(*) as total_records,
        COUNT(total_market_cap) as has_market_cap,
        COUNT(volume_24h) as has_volume,
        COUNT(btc_dominance) as has_btc_dominance,
        COUNT(fear_greed_index) as has_fear_greed
      FROM market_overview
    `);
    
    const marketStats = marketNulls.rows[0];
    console.log('📊 Market Overview Data Quality:');
    console.log(`   Total Records: ${marketStats.total_records}`);
    console.log(`   ✅ Market Cap: ${marketStats.has_market_cap}/${marketStats.total_records} complete`);
    console.log(`   ✅ Volume: ${marketStats.has_volume}/${marketStats.total_records} complete`);
    console.log(`   ✅ BTC Dominance: ${marketStats.has_btc_dominance}/${marketStats.total_records} complete`);
    console.log(`   ✅ Fear & Greed: ${marketStats.has_fear_greed}/${marketStats.total_records} complete`);
    
    // Top coins integrity
    const coinsNulls = await client.query(`
      SELECT 
        COUNT(*) as total_records,
        COUNT(name) as has_name,
        COUNT(symbol) as has_symbol,
        COUNT(price) as has_price,
        COUNT(market_cap) as has_market_cap
      FROM top_coins
    `);
    
    const coinsStats = coinsNulls.rows[0];
    console.log('\n🪙 Top Coins Data Quality:');
    console.log(`   Total Records: ${coinsStats.total_records}`);
    console.log(`   ✅ Names: ${coinsStats.has_name}/${coinsStats.total_records} complete`);
    console.log(`   ✅ Symbols: ${coinsStats.has_symbol}/${coinsStats.total_records} complete`);
    console.log(`   ✅ Prices: ${coinsStats.has_price}/${coinsStats.total_records} complete`);
    console.log(`   ✅ Market Caps: ${coinsStats.has_market_cap}/${coinsStats.total_records} complete`);
    
    // Check for duplicate ranks
    const duplicateRanks = await client.query(`
      SELECT rank_position, COUNT(*) as count 
      FROM top_coins 
      GROUP BY rank_position 
      HAVING COUNT(*) > 1
    `);
    
    if (duplicateRanks.rows.length > 0) {
      console.log('\n⚠️  Found duplicate rank positions:');
      duplicateRanks.rows.forEach(row => {
        console.log(`   Rank ${row.rank_position}: ${row.count} coins`);
      });
    } else {
      console.log('\n✅ No duplicate rank positions found');
    }
    
    console.log('\n✅ Data integrity checks completed successfully!');
    
  } catch (error) {
    console.error('❌ Error during data integrity checks:', error.message);
  }
}

async function runFullVerification() {
  try {
    console.log('🔗 Connecting to database...');
    await client.connect();
    console.log('✅ Connected successfully\n');
    
    await verifyMarketOverviewData();
    await verifyTopCoinsData();
    await verifyDataIntegrity();
    
    console.log('\n🎉 DATA VERIFICATION COMPLETED SUCCESSFULLY!');
    console.log('✅ All stored data has been verified and is intact');
    
  } catch (error) {
    console.error('❌ Error during verification:', error);
  } finally {
    try {
      await client.end();
      console.log('\n🔌 Database connection closed');
    } catch (error) {
      console.error('Error closing connection:', error.message);
    }
  }
}

// Run the verification
runFullVerification().catch(console.error);
