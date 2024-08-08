const express = require('express');
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

const orderRoutes = (pool) => {
  const router = express.Router();

  router.get('/', (req, res) => getAllOrders(pool, req, res));
  router.get('/:id', (req, res) => getOrderById(pool, req, res));
  router.post('/', (req, res) => createOrder(pool, req, res));
  router.put('/:id', (req, res) => updateOrder(pool, req, res));
  router.delete('/:id', (req, res) => deleteOrder(pool, req, res));

  return router;
};

module.exports = orderRoutes;