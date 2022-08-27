/* eslint-disable quote-props */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('special_cares', [
      {
        'id': 1,
        'water_frequency': 3,
        'plant_id': '16372398-b28f-4a39-8e67-3f6a035ee076',
      },
      {
        'id': 2,
        'water_frequency': 4,
        'plant_id': 'cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('special_cares', null, {});
  },
};
