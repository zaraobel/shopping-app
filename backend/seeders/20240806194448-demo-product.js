'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('products', [
        {
          name: 'Product 1',
          description: 'This is the first product',
          price: 19.99,
          quantity: 100,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Product 2',
          description: 'This is the second product',
          price: 29.99,
          quantity: 200,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('products', null, {});
    } catch (error) {
      console.error('Error reverting seed:', error);
    }
  }
};
