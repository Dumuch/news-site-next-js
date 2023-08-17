'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('articles', 'categoryId', {
      allowNull: true,
      type: Sequelize.UUID,
      references: {
        model: 'categories',
        key: 'id',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('articles', 'categoryId')
  }
};
