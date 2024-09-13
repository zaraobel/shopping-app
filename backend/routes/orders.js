const express = require('express');
const pool = require('../db');
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
router.post('/', async (req, res) => {
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

module.exports = router;
