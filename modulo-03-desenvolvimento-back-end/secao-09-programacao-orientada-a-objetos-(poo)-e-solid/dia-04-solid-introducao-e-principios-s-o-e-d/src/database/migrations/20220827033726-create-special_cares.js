/* eslint-disable quote-props */
/* eslint-disable max-lines-per-function */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('special_cares', {
      'id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      'water_frequency': {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      'plant_id': {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'plants',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('special_cares');
  },
};
