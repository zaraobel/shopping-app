const express = require('express');
const router = express.Router(); // Create an Express router
const authenticateToken = require('../middleware');
const pool = require('../db');

// Add product to cart (protected route)
router.post('/cart', authenticateToken, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.userId; // Get the userId from the token

  try {
    await pool.query(
      'INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3)',
      [userId, productId, quantity]
    );
    res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product to cart' });
  }
});

// Get user's cart (protected route)
router.get('/cart', authenticateToken, async (req, res) => {
  const userId = req.userId;

  try {
    const result = await pool.query('SELECT * FROM cart_items WHERE user_id = $1', [userId]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cart' });
  }
});

module.exports = router;