'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("meals", {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      price: Sequelize.FLOAT,
      category: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("meals");
  }
};
