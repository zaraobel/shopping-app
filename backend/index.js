const express = require('express');
const cors = require('cors');
const router = express();
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cart');
const loginRoutes = require('./routes/login');
const orderRoutes = require('./routes/orders');
const payRoutes = require('./routes/pay');
const productRoutes = require('./routes/products');
const registerRoutes = require('./routes/register');
const userRoutes = require('./routes/users');

// Middleware
router.use(express.json());
router.use(cors());
router.use(bodyParser.json()); // Use for parsing JSON data in request bodies

// Mount routes
router.use('/cart', cartRoutes);        // Mount cart-related routes
router.use('/login', loginRoutes);      // Mount login-related routes
router.use('/orders', orderRoutes);     // Mount order-related routes
router.use('/pay', payRoutes);          // Mount payment-related routes (Stripe will be used here)
router.use('/products', productRoutes); // Mount product-related routes
router.use('/register', registerRoutes);// Mount registration-related routes
router.use('/users', userRoutes);       // Mount user-related routes

// Set up the default route
router.get('/', (req, res) => {
  res.send('Welcome to the Shopping App Backend');
});

// Start the server
const PORT = process.env.PORT || 5000;
router.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});