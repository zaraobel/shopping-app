'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 1, // Assumes a user with ID 1 exists
        productId: 1, // Assumes a product with ID 1 exists
        quantity: 2,
        totalPrice: 19.98,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // Assumes a user with ID 2 exists
        productId: 2, // Assumes a product with ID 2 exists
        quantity: 1,
        totalPrice: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more orders here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
