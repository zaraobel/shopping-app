const getAllProducts = async (pool, req, res) => {
    try {
      const result = await pool.query('SELECT * FROM products');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getProductById = async (pool, req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createProduct = async (pool, req, res) => {
    const { name, description, price, quantity } = req.body;
    try {
      const result = await pool.query('INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [name, description, price, quantity]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateProduct = async (pool, req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    try {
      const result = await pool.query('UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *', [name, description, price, quantity, id]);
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteProduct = async (pool, req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM products WHERE id = $1', [id]);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
  