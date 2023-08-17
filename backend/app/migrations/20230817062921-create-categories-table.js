'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.createTable('categories', {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    type: Sequelize.UUID,
                    default: Sequelize.UUIDV4
                },
                title: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                deletedAt: {
                    type: Sequelize.DATE
                }
            })
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('categories');
    }
};
