const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

const userRoutes = (pool) => {
  const router = express.Router();

  router.get('/', (req, res) => getAllUsers(pool, req, res));
  router.get('/:id', (req, res) => getUserById(pool, req, res));
  router.post('/', (req, res) => createUser(pool, req, res));
  router.put('/:id', (req, res) => updateUser(pool, req, res));
  router.delete('/:id', (req, res) => deleteUser(pool, req, res));

  return router;
};

module.exports = userRoutes;
