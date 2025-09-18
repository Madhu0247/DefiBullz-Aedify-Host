const { Pool } = require('pg');

console.log('�� Credential Verification Test\n');

// Let's try with different authentication approaches
const configs = [
  {
    name: 'Standard auth',
    config: {
      host: 'l1f1sf6ot2lnhr4y6u0k.aedify.ai',
      port: 11026,
      user: 'admin',
      password: '502e7WbO9n16',
      database: 'postgres',
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 10000,
    }
  },
  {
    name: 'With application_name',
    config: {
      host: 'l1f1sf6ot2lnhr4y6u0k.aedify.ai',
      port: 11026,
      user: 'admin',
      password: '502e7WbO9n16',
      database: 'postgres',
      ssl: { rejectUnauthorized: false },
      application_name: 'nodejs_app',
      connectionTimeoutMillis: 10000,
    }
  },
  {
    name: 'Connection string with SSL params',
    config: {
      connectionString: 'postgresql://admin:502e7WbO9n16@l1f1sf6ot2lnhr4y6u0k.aedify.ai:11026/postgres?sslmode=require&sslcert=&sslkey=&sslrootcert=',
      ssl: { rejectUnauthorized: false }
    }
  }
];

async function testAuth(config) {
  console.log(`\nTesting: ${config.name}`);
  
  const pool = new Pool(config.config);
  
  try {
    const client = await pool.connect();
    console.log('✅ Authentication successful!');
    
    const result = await client.query('SELECT current_user, current_database(), version()');
    console.log('Current user:', result.rows[0].current_user);
    console.log('Current database:', result.rows[0].current_database);
    
    client.release();
    await pool.end();
    return true;
  } catch (error) {
    console.log('❌ Authentication failed');
    console.log('Error:', error.message);
    console.log('Code:', error.code);
    console.log('Severity:', error.severity);
    console.log('File:', error.file);
    console.log('Line:', error.line);
    console.log('Routine:', error.routine);
    await pool.end();
    return false;
  }
}

async function runAuthTests() {
  for (const config of configs) {
    const success = await testAuth(config);
    if (success) {
      console.log('\n🎉 Authentication method found!');
      return;
    }
  }
  
  console.log('\n🤔 All Node.js authentication attempts failed.');
  console.log('This suggests the database server may be configured to:');
  console.log('1. Allow psql connections but restrict programmatic connections');
  console.log('2. Require specific authentication methods for Node.js');
  console.log('3. Have different user permissions for different connection types');
}

runAuthTests().catch(console.error);
