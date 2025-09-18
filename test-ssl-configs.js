const { Pool } = require('pg');

console.log('Testing different SSL configurations...\n');

const configs = [
  {
    name: 'No SSL',
    config: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: false
    }
  },
  {
    name: 'SSL with rejectUnauthorized: false',
    config: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: false }
    }
  },
  {
    name: 'SSL disable mode',
    config: {
      connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`
    }
  }
];

async function testConfig(config) {
  console.log(`Testing: ${config.name}`);
  const pool = new Pool(config.config);
  
  try {
    const client = await pool.connect();
    console.log(`✅ SUCCESS: ${config.name} works!`);
    client.release();
    await pool.end();
    return config;
  } catch (error) {
    console.log(`❌ FAILED: ${config.name} - ${error.message}`);
    await pool.end();
    return null;
  }
}

async function findWorkingConfig() {
  for (const config of configs) {
    const result = await testConfig(config);
    if (result) {
      console.log(`\n🎉 Found working configuration: ${result.name}`);
      console.log('Config:', JSON.stringify(result.config, null, 2));
      return result;
    }
    console.log('');
  }
  console.log('❌ No working configuration found');
}

findWorkingConfig().then(() => process.exit(0)).catch(console.error);
