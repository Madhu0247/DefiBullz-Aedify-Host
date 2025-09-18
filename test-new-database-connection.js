const { Client } = require('pg');

console.log('🔍 Testing New Database Connection\n');

// Updated database configuration from the new credentials
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

async function testNewConnection() {
  try {
    console.log('🔗 Attempting to connect to new database...');
    console.log('   Host: gsm1b5p95odcdkhya1ls.aedify.ai:11035');
    console.log('   User: admin');
    console.log('   Database: postgres\n');
    
    await client.connect();
    console.log('✅ Database connection successful!');
    
    // Test basic query
    const versionResult = await client.query('SELECT version()');
    console.log('📊 Database version:', versionResult.rows[0].version.substring(0, 50) + '...');
    
    // Check current user and database
    const userResult = await client.query('SELECT current_user, current_database()');
    console.log('👤 Current user:', userResult.rows[0].current_user);
    console.log('🗄️  Current database:', userResult.rows[0].current_database);
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error details:', error.detail || 'None');
    return false;
  }
}

async function checkExistingTables() {
  try {
    console.log('\n🏗️  Checking existing tables...');
    
    // Get all tables
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    if (tablesResult.rows.length === 0) {
      console.log('📋 No tables found in the database');
      console.log('💡 This appears to be a fresh database - you may need to create tables');
      return [];
    }
    
    console.log('📋 Found tables:');
    tablesResult.rows.forEach((row, index) => {
      console.log(`   ${index + 1}. ${row.table_name}`);
    });
    
    return tablesResult.rows.map(row => row.table_name);
  } catch (error) {
    console.error('❌ Error checking tables:', error.message);
    return [];
  }
}

async function createRequiredTables() {
  try {
    console.log('\n🔧 Creating required tables for the application...');
    
    // Create market_overview table
    await client.query(`
      CREATE TABLE IF NOT EXISTS market_overview (
        id SERIAL PRIMARY KEY,
        total_market_cap NUMERIC,
        volume_24h NUMERIC,
        btc_dominance NUMERIC,
        fear_greed_index INTEGER,
        fear_greed_label VARCHAR(50),
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Created/verified market_overview table');
    
    // Create top_coins table
    await client.query(`
      CREATE TABLE IF NOT EXISTS top_coins (
        id SERIAL PRIMARY KEY,
        rank_position INTEGER,
        name VARCHAR(100),
        symbol VARCHAR(20),
        price NUMERIC,
        change_1d NUMERIC,
        change_1w NUMERIC,
        change_1m NUMERIC,
        change_1y NUMERIC,
        market_cap NUMERIC,
        volume_24h NUMERIC,
        ath NUMERIC,
        coin_id VARCHAR(50),
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Created/verified top_coins table');
    
    console.log('🎉 All required tables are ready!');
    
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
    throw error;
  }
}

async function testApplicationFunctions() {
  try {
    console.log('\n🧪 Testing application database functions...');
    
    // Test inserting sample data into market_overview
    const sampleMarketData = {
      total_market_cap: 3800000000000,
      volume_24h: 200000000000,
      btc_dominance: 48.5,
      fear_greed_index: 65,
      fear_greed_label: 'Greed'
    };
    
    const insertResult = await client.query(`
      INSERT INTO market_overview (total_market_cap, volume_24h, btc_dominance, fear_greed_index, fear_greed_label)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, last_updated;
    `, [
      sampleMarketData.total_market_cap,
      sampleMarketData.volume_24h,
      sampleMarketData.btc_dominance,
      sampleMarketData.fear_greed_index,
      sampleMarketData.fear_greed_label
    ]);
    
    console.log('✅ Successfully inserted test market data');
    console.log('   Record ID:', insertResult.rows[0].id);
    console.log('   Timestamp:', insertResult.rows[0].last_updated);
    
    // Test retrieving the data
    const selectResult = await client.query('SELECT * FROM market_overview ORDER BY last_updated DESC LIMIT 1');
    console.log('✅ Successfully retrieved market data');
    console.log('   Total Market Cap: $' + (selectResult.rows[0].total_market_cap / 1e12).toFixed(2) + 'T');
    console.log('   BTC Dominance:', selectResult.rows[0].btc_dominance + '%');
    
  } catch (error) {
    console.error('❌ Error testing application functions:', error.message);
    throw error;
  }
}

async function runFullTest() {
  try {
    // Test connection
    const connected = await testNewConnection();
    if (!connected) {
      console.log('❌ Cannot proceed without database connection');
      return;
    }
    
    // Check existing tables
    const existingTables = await checkExistingTables();
    
    // Create required tables if they don't exist
    await createRequiredTables();
    
    // Test application functions
    await testApplicationFunctions();
    
    console.log('\n🎉 Database setup and connection test completed successfully!');
    console.log('✅ Your project is now connected to the new database');
    console.log('✅ All required tables are created and functional');
    
  } catch (error) {
    console.error('❌ Unexpected error during database test:', error);
  } finally {
    try {
      await client.end();
      console.log('\n🔌 Database connection closed');
    } catch (error) {
      console.error('Error closing connection:', error.message);
    }
  }
}

// Run the test
runFullTest().catch(console.error);
