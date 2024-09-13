'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'imageUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Products', 'stock', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'imageUrl');
    await queryInterface.removeColumn('Products', 'stock');
  }
};
