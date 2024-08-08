const getAllOrders = async (pool, req, res) => {
    try {
      const result = await pool.query('SELECT * FROM orders');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getOrderById = async (pool, req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createOrder = async (pool, req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;
    try {
      const result = await pool.query('INSERT INTO orders (userId, productId, quantity, totalPrice) VALUES ($1, $2, $3, $4) RETURNING *', [userId, productId, quantity, totalPrice]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateOrder = async (pool, req, res) => {
    const { id } = req.params;
    const { userId, productId, quantity, totalPrice } = req.body;
    try {
      const result = await pool.query('UPDATE orders SET userId = $1, productId = $2, quantity = $3, totalPrice = $4 WHERE id = $5 RETURNING *', [userId, productId, quantity, totalPrice, id]);
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteOrder = async (pool, req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM orders WHERE id = $1', [id]);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };
  