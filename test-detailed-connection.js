const { Pool } = require('pg');

console.log('Testing detailed connection scenarios...\n');

// Test the exact same parameters that work with psql
const testConfigs = [
  {
    name: 'Exact psql parameters',
    config: {
      host: 'l1f1sf6ot2lnhr4y6u0k.aedify.ai',
      port: 11026,
      user: 'admin',
      password: '502e7WbO9n16',
      database: 'postgres',
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  {
    name: 'Connection string format',
    config: {
      connectionString: 'postgresql://admin:502e7WbO9n16@l1f1sf6ot2lnhr4y6u0k.aedify.ai:11026/postgres',
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  {
    name: 'No SSL at all',
    config: {
      host: 'l1f1sf6ot2lnhr4y6u0k.aedify.ai',
      port: 11026,
      user: 'admin',
      password: '502e7WbO9n16',
      database: 'postgres',
      ssl: false
    }
  }
];

async function testConnection(config) {
  console.log(`\n🔍 Testing: ${config.name}`);
  console.log('Config:', JSON.stringify(config.config, null, 2));
  
  const pool = new Pool(config.config);
  
  try {
    console.log('Attempting connection...');
    const client = await pool.connect();
    console.log('✅ Connection successful!');
    
    // Try a simple query
    const result = await client.query('SELECT version()');
    console.log('✅ Query successful:', result.rows[0].version.substring(0, 50) + '...');
    
    client.release();
    await pool.end();
    return true;
  } catch (error) {
    console.log('❌ Connection failed');
    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    console.log('Error details:', error.detail || 'None');
    await pool.end();
    return false;
  }
}

async function runTests() {
  for (const config of testConfigs) {
    const success = await testConnection(config);
    if (success) {
      console.log('\n🎉 Found working configuration!');
      return;
    }
  }
  console.log('\n❌ No working configuration found');
}

runTests().catch(console.error);
