'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      publicationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
