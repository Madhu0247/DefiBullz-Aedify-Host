const { Pool } = require('pg');

console.log('🔍 Testing developer-provided connection string\n');

// Exact connection string from the developer
const connectionString = 'postgresql://admin:502e7WbO9n16@l1f1sf6ot2lnhr4y6u0k.aedify.ai:11026/postgres';

const configs = [
  {
    name: 'Developer connection string (no SSL)',
    config: {
      connectionString: connectionString
    }
  },
  {
    name: 'Developer connection string (with SSL)',
    config: {
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  {
    name: 'Developer connection string (SSL required)',
    config: {
      connectionString: connectionString + '?sslmode=require',
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
];

async function testConnection(config) {
  console.log(`Testing: ${config.name}`);
  console.log(`Connection string: ${config.config.connectionString}`);
  
  const pool = new Pool(config.config);
  
  try {
    const client = await pool.connect();
    console.log('✅ SUCCESS! Connection established');
    
    const result = await client.query('SELECT current_user, current_database(), version()');
    console.log('Connected as:', result.rows[0].current_user);
    console.log('Database:', result.rows[0].current_database);
    console.log('Version:', result.rows[0].version.substring(0, 50) + '...');
    
    client.release();
    await pool.end();
    return config;
  } catch (error) {
    console.log('❌ Failed');
    console.log('Error:', error.message);
    console.log('Code:', error.code);
    await pool.end();
    return null;
  }
}

async function runTest() {
  for (const config of configs) {
    console.log('\n' + '='.repeat(60));
    const success = await testConnection(config);
    if (success) {
      console.log('\n🎉 FOUND WORKING CONFIGURATION!');
      console.log('Use this in your connection.ts:');
      console.log(JSON.stringify(success.config, null, 2));
      return success;
    }
  }
  
  console.log('\n❌ None of the connection string formats worked');
}

runTest().catch(console.error);
