/* eslint-disable quote-props */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('plants', [
      {
        'id': '16372398-b28f-4a39-8e67-3f6a035ee076',
        'breed': 'Bromelia',
        'size': 102,
        'needs_sun': false,
        'origin': 'Argentina',
      },
      {
        'id': 'cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770',
        'breed': 'Orquidea',
        'size': 99,
        'needs_sun': true,
        'origin': 'Brazil',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('plants', null, {});
  },
};
