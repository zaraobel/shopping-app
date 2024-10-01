// seed.js
const { Pool } = require('pg');

// Create a connection to the database
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,      // Ensure this is 'db' from docker-compose.yml
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // Adjust this port if needed
});

// Function to seed the database
const seedProducts = async () => {
  try {
    // Check if products table has any data
    const result = await pool.query('SELECT COUNT(*) FROM products');
    const count = parseInt(result.rows[0].count, 10);

    // If the products table is empty, seed it
    if (count === 0) {
      console.log('Seeding database with products...');

      const productData = [
        { name: 'Product 1', price: 10, description: 'First product' },
        { name: 'Product 2', price: 20, description: 'Second product' },
        { name: 'Product 3', price: 30, description: 'Third product' },
      ];

      for (const product of productData) {
        await pool.query(
          'INSERT INTO products (name, price, description) VALUES ($1, $2, $3)',
          [product.name, product.price, product.description]
        );
      }

      console.log('Seeding complete.');
    } else {
      console.log('Products already exist, no need to seed.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    pool.end();
  }
};

// Run the seed function
seedProducts();
