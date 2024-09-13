const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes'); // Add the payment routes here

app.use('/api/products', productRoutes(pool));
app.use('/api/users', userRoutes(pool));
app.use('/api/orders', orderRoutes(pool));
app.use('/api/payment', paymentRoutes); // Add this line to use the payment routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
