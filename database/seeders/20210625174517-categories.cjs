'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'dania glowne'
      },
      {
        id: 2,
        name: 'desery'
      },
      {
        id: 3,
        name: 'pizza'
      },
      {
        id: 4,
        name: 'zimne napoje'
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
