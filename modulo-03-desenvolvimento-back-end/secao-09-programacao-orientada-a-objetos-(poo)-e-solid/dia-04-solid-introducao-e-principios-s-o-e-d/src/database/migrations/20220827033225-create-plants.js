/* eslint-disable quote-props */
/* eslint-disable max-lines-per-function */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plants', {
      'id': {
        type: Sequelize.CHAR(36),
        primaryKey: true,
        allowNull: false,
      },
      'breed': {
        type: Sequelize.STRING,
        allowNull: false,
      },
      'size': {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      'needs_sun': {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      'origin': {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('plants');
  },
};
