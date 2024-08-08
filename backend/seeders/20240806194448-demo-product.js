'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Product 1',
        description: 'Description for product 1',
        price: 9.99,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 2',
        description: 'Description for product 2',
        price: 19.99,
        quantity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more products here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
