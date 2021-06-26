'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('meals', [
            {
                id: 1,
                name: 'kotlet schabowy z frytkami',
                price: 21.2,
                category: 1,
            },
            {
                id: 2,
                name: 'Ryba filet z dorsza z frytkami i surowka',
                price: 34.89,
                category: 1,
            },
            {
                id: 3,
                name: 'Ryba łosoś z frytkami i surowka',
                price: 41.99,
                category: 1,
            },
            {
                id: 4,
                name: 'Nuggetsy z frytkami',
                price: 18,
                category: 1,
            },
            {
                id: 5,
                name: 'Margherita',
                price: 15,
                category: 3,
            },
            {
                id: 6,
                name: 'Peperoni',
                price: 18.90,
                category: 3,
            },
            {
                id: 7,
                name: 'Prosciutto',
                price: 18,
                category: 3,
            },
            {
                id: 8,
                name: 'Chorizo',
                price: 26.90,
                category: 3,
            },
            {
                id: 9,
                name: 'Italiana',
                price: 26.90,
                category: 3,
            },
            {
                id: 10,
                name: 'Vegana',
                price: 20.90,
                category: 3,
            },
            {
                id: 11,
                name: 'Carbonara',
                price: 25.90,
                category: 3,
            },
            {
                id: 12,
                name: 'Brownie',
                price: 15.90,
                category: 2,
            },
            {
                id: 13,
                name: 'Lody z szarlotka',
                price: 14,
                category: 2,
            },
            {
                id: 13,
                name: 'Tiramisu',
                price: 15.90,
                category: 2,
            },
            {
                id: 14,
                name: 'Piwo z kija',
                price: 7,
                category: 4,
            },
            {
                id: 15,
                name: 'Coca Cola',
                price: 5,
                category: 4,
            },
            {
                id: 16,
                name: 'Pepsi',
                price: 5,
                category: 4,
            },
            {
                id: 16,
                name: 'Ice Tea',
                price: 5,
                category: 4,
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('meals', null, {});
    },
};
