const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const productRoutes = (pool) => {
  const router = express.Router();

  router.get('/', (req, res) => getAllProducts(pool, req, res));
  router.get('/:id', (req, res) => getProductById(pool, req, res));
  router.post('/', (req, res) => createProduct(pool, req, res));
  router.put('/:id', (req, res) => updateProduct(pool, req, res));
  router.delete('/:id', (req, res) => deleteProduct(pool, req, res));

  return router;
};

module.exports = productRoutes;