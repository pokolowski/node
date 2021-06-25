'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('meals', [
            {
                id: 1,
                name: 'kotlet',
                price: 21.2,
                category: 1,
            },
            {
                id: 2,
                name: 'schabowy',
                price: 22.20324,
                category: 2,
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('meals', null, {});
    },
};
