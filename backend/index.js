const express = require('express');
const cors = require('cors');
const app = express();
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Use the products route
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
