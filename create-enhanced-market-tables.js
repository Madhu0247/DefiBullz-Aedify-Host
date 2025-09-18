const { Client } = require('pg');

console.log('🏗️  Creating Enhanced Market Tables Based on API Response Structure\n');

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

async function createEnhancedMarketTables() {
  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    // Drop existing tables to recreate with enhanced structure
    console.log('🗑️  Dropping existing tables (if they exist)...');
    await client.query('DROP TABLE IF EXISTS market_overview CASCADE');
    await client.query('DROP TABLE IF EXISTS top_coins CASCADE');
    await client.query('DROP TABLE IF EXISTS coin_price_history CASCADE');
    await client.query('DROP TABLE IF EXISTS market_news CASCADE');
    await client.query('DROP TABLE IF EXISTS fear_greed_index CASCADE');
    console.log('✅ Existing tables dropped\n');

    // 1. Enhanced Market Overview Table
    console.log('📊 Creating enhanced market_overview table...');
    await client.query(`
      CREATE TABLE market_overview (
        id SERIAL PRIMARY KEY,
        total_market_cap NUMERIC(20, 2) NOT NULL,
        volume_24h NUMERIC(20, 2) NOT NULL,
        btc_dominance NUMERIC(5, 2) NOT NULL,
        eth_dominance NUMERIC(5, 2) DEFAULT 0,
        fear_greed_index INTEGER CHECK (fear_greed_index >= 0 AND fear_greed_index <= 100),
        fear_greed_label VARCHAR(50),
        defi_tvl NUMERIC(20, 2) DEFAULT 0,
        liquidity NUMERIC(20, 2) DEFAULT 0,
        active_cryptocurrencies INTEGER DEFAULT 0,
        total_exchanges INTEGER DEFAULT 0,
        market_cap_change_24h NUMERIC(5, 2) DEFAULT 0,
        volume_change_24h NUMERIC(5, 2) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        data_source VARCHAR(50) DEFAULT 'livecoinwatch',
        is_active BOOLEAN DEFAULT true
      );
    `);

    // Add indexes for better performance
    await client.query(`
      CREATE INDEX idx_market_overview_created_at ON market_overview(created_at DESC);
      CREATE INDEX idx_market_overview_active ON market_overview(is_active, created_at DESC);
    `);
    console.log('✅ market_overview table created with indexes\n');

    // 2. Enhanced Cryptocurrency Table
    console.log('🪙 Creating enhanced cryptocurrencies table...');
    await client.query(`
      CREATE TABLE cryptocurrencies (
        id SERIAL PRIMARY KEY,
        coin_id VARCHAR(100) UNIQUE NOT NULL, -- e.g., 'bitcoin', 'ethereum'
        name VARCHAR(200) NOT NULL,
        symbol VARCHAR(20) NOT NULL,
        image_url TEXT,
        website_url TEXT,
        description TEXT,
        category VARCHAR(100), -- e.g., 'Layer 1', 'DeFi', 'NFT'
        blockchain VARCHAR(100), -- e.g., 'Bitcoin', 'Ethereum', 'Solana'
        consensus_mechanism VARCHAR(50), -- e.g., 'Proof of Work', 'Proof of Stake'
        max_supply NUMERIC(30, 8),
        circulating_supply NUMERIC(30, 8),
        total_supply NUMERIC(30, 8),
        genesis_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      );
    `);

    await client.query(`
      CREATE INDEX idx_cryptocurrencies_coin_id ON cryptocurrencies(coin_id);
      CREATE INDEX idx_cryptocurrencies_symbol ON cryptocurrencies(symbol);
      CREATE INDEX idx_cryptocurrencies_active ON cryptocurrencies(is_active);
    `);
    console.log('✅ cryptocurrencies table created with indexes\n');

    // 3. Enhanced Coin Prices Table (replaces top_coins)
    console.log('💰 Creating enhanced coin_prices table...');
    await client.query(`
      CREATE TABLE coin_prices (
        id SERIAL PRIMARY KEY,
        coin_id VARCHAR(100) NOT NULL REFERENCES cryptocurrencies(coin_id) ON DELETE CASCADE,
        rank_position INTEGER,
        current_price NUMERIC(20, 8) NOT NULL,
        market_cap NUMERIC(25, 2),
        fully_diluted_valuation NUMERIC(25, 2),
        total_volume NUMERIC(25, 2),
        volume_24h NUMERIC(25, 2),
        volume_change_24h NUMERIC(10, 4),
        
        -- Price changes
        price_change_24h NUMERIC(20, 8),
        price_change_percentage_1h NUMERIC(10, 4),
        price_change_percentage_24h NUMERIC(10, 4),
        price_change_percentage_7d NUMERIC(10, 4),
        price_change_percentage_30d NUMERIC(10, 4),
        price_change_percentage_1y NUMERIC(10, 4),
        
        -- Market cap changes
        market_cap_change_24h NUMERIC(25, 2),
        market_cap_change_percentage_24h NUMERIC(10, 4),
        
        -- All-time high/low data
        ath NUMERIC(20, 8),
        ath_change_percentage NUMERIC(10, 4),
        ath_date TIMESTAMP,
        atl NUMERIC(20, 8),
        atl_change_percentage NUMERIC(10, 4),
        atl_date TIMESTAMP,
        
        -- Additional metrics
        roi NUMERIC(10, 4), -- Return on investment
        circulating_supply NUMERIC(30, 8),
        total_supply NUMERIC(30, 8),
        max_supply NUMERIC(30, 8),
        
        -- Sparkline data (7-day price history)
        sparkline_7d JSON, -- Array of prices
        
        -- Metadata
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        data_source VARCHAR(50) DEFAULT 'livecoinwatch',
        is_current BOOLEAN DEFAULT true -- Flag to mark current/latest data
      );
    `);

    await client.query(`
      CREATE INDEX idx_coin_prices_coin_id ON coin_prices(coin_id);
      CREATE INDEX idx_coin_prices_rank ON coin_prices(rank_position);
      CREATE INDEX idx_coin_prices_current ON coin_prices(is_current, last_updated DESC);
      CREATE INDEX idx_coin_prices_updated ON coin_prices(last_updated DESC);
      CREATE UNIQUE INDEX idx_coin_prices_current_unique ON coin_prices(coin_id) WHERE is_current = true;
    `);
    console.log('✅ coin_prices table created with indexes\n');

    // 4. Price History Table for detailed historical data
    console.log('📈 Creating coin_price_history table...');
    await client.query(`
      CREATE TABLE coin_price_history (
        id SERIAL PRIMARY KEY,
        coin_id VARCHAR(100) NOT NULL REFERENCES cryptocurrencies(coin_id) ON DELETE CASCADE,
        price NUMERIC(20, 8) NOT NULL,
        market_cap NUMERIC(25, 2),
        volume NUMERIC(25, 2),
        timestamp TIMESTAMP NOT NULL,
        interval_type VARCHAR(20) NOT NULL, -- '1h', '1d', '1w', '1m'
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE INDEX idx_price_history_coin_timestamp ON coin_price_history(coin_id, timestamp DESC);
      CREATE INDEX idx_price_history_interval ON coin_price_history(interval_type, timestamp DESC);
      CREATE UNIQUE INDEX idx_price_history_unique ON coin_price_history(coin_id, timestamp, interval_type);
    `);
    console.log('✅ coin_price_history table created with indexes\n');

    // 5. Market News Table
    console.log('📰 Creating market_news table...');
    await client.query(`
      CREATE TABLE market_news (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        description TEXT,
        content TEXT,
        url TEXT UNIQUE,
        image_url TEXT,
        source VARCHAR(200),
        author VARCHAR(200),
        published_at TIMESTAMP,
        sentiment VARCHAR(20), -- 'positive', 'negative', 'neutral'
        category VARCHAR(100), -- 'bitcoin', 'ethereum', 'defi', 'regulation', etc.
        tags JSON, -- Array of tags
        relevance_score NUMERIC(3, 2), -- 0.00 to 1.00
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      );
    `);

    await client.query(`
      CREATE INDEX idx_market_news_published ON market_news(published_at DESC);
      CREATE INDEX idx_market_news_category ON market_news(category);
      CREATE INDEX idx_market_news_sentiment ON market_news(sentiment);
      CREATE INDEX idx_market_news_active ON market_news(is_active, published_at DESC);
    `);
    console.log('✅ market_news table created with indexes\n');

    // 6. Fear and Greed Index History
    console.log('😱 Creating fear_greed_history table...');
    await client.query(`
      CREATE TABLE fear_greed_history (
        id SERIAL PRIMARY KEY,
        value INTEGER NOT NULL CHECK (value >= 0 AND value <= 100),
        classification VARCHAR(50) NOT NULL, -- 'Extreme Fear', 'Fear', 'Neutral', 'Greed', 'Extreme Greed'
        timestamp TIMESTAMP NOT NULL,
        value_change_24h INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE INDEX idx_fear_greed_timestamp ON fear_greed_history(timestamp DESC);
      CREATE UNIQUE INDEX idx_fear_greed_unique ON fear_greed_history(timestamp);
    `);
    console.log('✅ fear_greed_history table created with indexes\n');

    // 7. Exchange Data Table
    console.log('🏦 Creating exchanges table...');
    await client.query(`
      CREATE TABLE exchanges (
        id SERIAL PRIMARY KEY,
        exchange_id VARCHAR(100) UNIQUE NOT NULL,
        name VARCHAR(200) NOT NULL,
        country VARCHAR(100),
        description TEXT,
        url TEXT,
        image_url TEXT,
        has_trading_incentive BOOLEAN DEFAULT false,
        centralized BOOLEAN DEFAULT true,
        public_notice TEXT,
        alert_notice TEXT,
        trust_score INTEGER CHECK (trust_score >= 0 AND trust_score <= 10),
        trust_score_rank INTEGER,
        trade_volume_24h_btc NUMERIC(20, 8),
        trade_volume_24h_normalized NUMERIC(20, 8),
        year_established INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      );
    `);

    await client.query(`
      CREATE INDEX idx_exchanges_id ON exchanges(exchange_id);
      CREATE INDEX idx_exchanges_trust ON exchanges(trust_score DESC);
      CREATE INDEX idx_exchanges_volume ON exchanges(trade_volume_24h_btc DESC);
    `);
    console.log('✅ exchanges table created with indexes\n');

    console.log('🎉 All enhanced market tables created successfully!\n');

    // Insert some initial cryptocurrency data
    console.log('📝 Inserting initial cryptocurrency data...');
    const initialCoins = [
      { coin_id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', category: 'Layer 1', blockchain: 'Bitcoin', consensus: 'Proof of Work' },
      { coin_id: 'ethereum', name: 'Ethereum', symbol: 'ETH', category: 'Layer 1', blockchain: 'Ethereum', consensus: 'Proof of Stake' },
      { coin_id: 'bnb', name: 'BNB', symbol: 'BNB', category: 'Exchange Token', blockchain: 'BNB Chain', consensus: 'Proof of Stake' },
      { coin_id: 'solana', name: 'Solana', symbol: 'SOL', category: 'Layer 1', blockchain: 'Solana', consensus: 'Proof of History' },
      { coin_id: 'cardano', name: 'Cardano', symbol: 'ADA', category: 'Layer 1', blockchain: 'Cardano', consensus: 'Proof of Stake' },
      { coin_id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', category: 'Layer 1', blockchain: 'Avalanche', consensus: 'Proof of Stake' },
      { coin_id: 'chainlink', name: 'Chainlink', symbol: 'LINK', category: 'Oracle', blockchain: 'Ethereum', consensus: 'Proof of Stake' },
      { coin_id: 'polygon', name: 'Polygon', symbol: 'MATIC', category: 'Layer 2', blockchain: 'Ethereum', consensus: 'Proof of Stake' },
      { coin_id: 'litecoin', name: 'Litecoin', symbol: 'LTC', category: 'Layer 1', blockchain: 'Litecoin', consensus: 'Proof of Work' },
      { coin_id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', category: 'Meme', blockchain: 'Dogecoin', consensus: 'Proof of Work' }
    ];

    for (const coin of initialCoins) {
      await client.query(`
        INSERT INTO cryptocurrencies (coin_id, name, symbol, category, blockchain, consensus_mechanism)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (coin_id) DO UPDATE SET
          name = EXCLUDED.name,
          symbol = EXCLUDED.symbol,
          category = EXCLUDED.category,
          blockchain = EXCLUDED.blockchain,
          consensus_mechanism = EXCLUDED.consensus_mechanism,
          updated_at = CURRENT_TIMESTAMP
      `, [coin.coin_id, coin.name, coin.symbol, coin.category, coin.blockchain, coin.consensus]);
    }
    console.log('✅ Initial cryptocurrency data inserted\n');

    // Show table summary
    console.log('📋 DATABASE TABLES SUMMARY:');
    console.log('=' .repeat(60));
    
    const tables = [
      'market_overview',
      'cryptocurrencies', 
      'coin_prices',
      'coin_price_history',
      'market_news',
      'fear_greed_history',
      'exchanges'
    ];

    for (const table of tables) {
      const result = await client.query(`
        SELECT COUNT(*) as count 
        FROM information_schema.columns 
        WHERE table_name = $1
      `, [table]);
      
      const countResult = await client.query(`SELECT COUNT(*) as records FROM ${table}`);
      
      console.log(`📊 ${table}:`);
      console.log(`   • ${result.rows[0].count} columns`);
      console.log(`   • ${countResult.rows[0].records} records`);
      console.log('');
    }

  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  } finally {
    await client.end();
    console.log('🔌 Database connection closed');
  }
}

// Run the table creation
runTableCreation().catch(console.error);

async function runTableCreation() {
  try {
    await createEnhancedMarketTables();
    console.log('\n🎉 ENHANCED MARKET DATABASE SETUP COMPLETED!');
    console.log('✅ All tables created with proper indexes and relationships');
    console.log('✅ Initial cryptocurrency data populated');
    console.log('✅ Ready for production use with your market API');
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
  }
}
