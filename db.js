const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '22194770',
  port: 5432,
  database: 'bookdb',
  authentication_timeout: 10000, // Optional: Set a timeout for authentication
  connectionTimeoutMillis: 2000, // Optional: Set a timeout for the connection
});

module.exports = pool;
