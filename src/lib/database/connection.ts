import { Client } from 'pg';

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

// Connect the client
client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
  });

export default client;
