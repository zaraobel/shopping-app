const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'db',  // service name from docker-compose.yml
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

module.exports = pool;
