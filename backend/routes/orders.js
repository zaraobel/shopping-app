const express = require('express');
const pool = require('../db');
const authenticateToken = require('../middleware');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Place a new order
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { user_id, total } = req.body;
    const result = await pool.query(
      'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *',
      [user_id, total]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get the order history of the logged-in user
router.get('/orders/history', authenticateToken, async (req, res) => {
  const userId = req.userId;  // Get userId from the token
  
  try {
    const result = await pool.query('SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching order history:', error);
    res.status(500).json({ message: 'Error fetching order history' });
  }
});


module.exports = router;