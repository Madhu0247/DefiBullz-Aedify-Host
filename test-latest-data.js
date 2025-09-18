const { Client } = require('pg');

console.log('🔍 Testing Database Connection and Retrieving Latest Data\n');

// Database configuration
const client = new Client({
  host: 'l1f1sf6ot2lnhr4y6u0k.aedify.ai',
  port: 11026,
  user: 'admin',
  password: '5O2e7WbO9n16', // Using the password from your connection.ts
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    console.log('🔗 Attempting to connect to database...');
    await client.connect();
    console.log('✅ Database connection successful!');
    
    // Test basic query
    const versionResult = await client.query('SELECT version()');
    console.log('📊 Database version:', versionResult.rows[0].version.substring(0, 50) + '...\n');
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error details:', error.detail || 'None');
    return false;
  }
}

async function checkDatabaseStructure() {
  try {
    console.log('🏗️  Checking database structure...\n');
    
    // Get all tables
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    console.log('📋 Available tables:');
    tablesResult.rows.forEach((row, index) => {
      console.log(`   ${index + 1}. ${row.table_name}`);
    });
    console.log('');
    
    return tablesResult.rows.map(row => row.table_name);
  } catch (error) {
    console.error('❌ Error checking database structure:', error.message);
    return [];
  }
}

async function getTableSchema(tableName) {
  try {
    const schemaResult = await client.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_name = $1 
      ORDER BY ordinal_position;
    `, [tableName]);
    
    return schemaResult.rows;
  } catch (error) {
    console.error(`❌ Error getting schema for table ${tableName}:`, error.message);
    return [];
  }
}

async function getLatestDataFromTable(tableName) {
  try {
    // First, get the table schema to understand the structure
    const schema = await getTableSchema(tableName);
    
    if (schema.length === 0) {
      console.log(`   ⚠️  No schema found for table: ${tableName}`);
      return;
    }
    
    console.log(`📊 Table: ${tableName}`);
    console.log('   Schema:');
    schema.forEach(col => {
      console.log(`     - ${col.column_name}: ${col.data_type}${col.is_nullable === 'NO' ? ' (NOT NULL)' : ''}`);
    });
    
    // Get row count
    const countResult = await client.query(`SELECT COUNT(*) as count FROM ${tableName}`);
    const rowCount = parseInt(countResult.rows[0].count);
    console.log(`   📈 Total rows: ${rowCount}`);
    
    if (rowCount === 0) {
      console.log('   📭 No data found in this table\n');
      return;
    }
    
    // Try to get latest data - look for common timestamp columns
    const timestampColumns = schema.filter(col => 
      col.column_name.includes('created') || 
      col.column_name.includes('updated') || 
      col.column_name.includes('timestamp') ||
      col.column_name.includes('date') ||
      col.data_type.includes('timestamp')
    );
    
    let orderByClause = '';
    if (timestampColumns.length > 0) {
      orderByClause = `ORDER BY ${timestampColumns[0].column_name} DESC`;
    } else {
      // If no timestamp column, just get some recent data
      orderByClause = 'ORDER BY 1 DESC';
    }
    
    // Get latest 5 records
    const dataResult = await client.query(`SELECT * FROM ${tableName} ${orderByClause} LIMIT 5`);
    
    console.log(`   📋 Latest ${Math.min(5, dataResult.rows.length)} records:`);
    dataResult.rows.forEach((row, index) => {
      console.log(`     Record ${index + 1}:`);
      Object.entries(row).forEach(([key, value]) => {
        const displayValue = value === null ? 'NULL' : 
                           typeof value === 'string' && value.length > 50 ? 
                           value.substring(0, 50) + '...' : value;
        console.log(`       ${key}: ${displayValue}`);
      });
      console.log('');
    });
    
  } catch (error) {
    console.error(`❌ Error getting data from table ${tableName}:`, error.message);
  }
}

async function checkSpecificTables() {
  console.log('🎯 Checking specific application tables...\n');
  
  const expectedTables = ['market_overview', 'top_coins'];
  
  for (const tableName of expectedTables) {
    try {
      // Check if table exists
      const existsResult = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = $1
        );
      `, [tableName]);
      
      if (existsResult.rows[0].exists) {
        console.log(`✅ Table '${tableName}' exists`);
        await getLatestDataFromTable(tableName);
      } else {
        console.log(`❌ Table '${tableName}' does not exist`);
        console.log(`   💡 You may need to create this table first\n`);
      }
    } catch (error) {
      console.error(`❌ Error checking table ${tableName}:`, error.message);
    }
  }
}

async function runDatabaseTest() {
  try {
    // Test connection
    const connected = await testConnection();
    if (!connected) {
      console.log('❌ Cannot proceed without database connection');
      return;
    }
    
    // Check database structure
    const tables = await checkDatabaseStructure();
    
    if (tables.length === 0) {
      console.log('⚠️  No tables found in the database');
    } else {
      // Check specific application tables
      await checkSpecificTables();
      
      // Check all other tables
      const otherTables = tables.filter(table => 
        !['market_overview', 'top_coins'].includes(table)
      );
      
      if (otherTables.length > 0) {
        console.log('🔍 Checking other tables in database...\n');
        for (const tableName of otherTables.slice(0, 3)) { // Limit to first 3 tables
          await getLatestDataFromTable(tableName);
        }
        
        if (otherTables.length > 3) {
          console.log(`   ... and ${otherTables.length - 3} more tables\n`);
        }
      }
    }
    
    console.log('✅ Database test completed successfully!');
    
  } catch (error) {
    console.error('❌ Unexpected error during database test:', error);
  } finally {
    try {
      await client.end();
      console.log('🔌 Database connection closed');
    } catch (error) {
      console.error('Error closing connection:', error.message);
    }
  }
}

// Run the test
runDatabaseTest().catch(console.error);
