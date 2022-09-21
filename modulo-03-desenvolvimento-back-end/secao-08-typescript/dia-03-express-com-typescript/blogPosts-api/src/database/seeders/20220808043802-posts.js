'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Facebook vai dividir departamento de realidade aumentada e virtual',
        author: 'Renan',
        category: 'tecnologia',
        publicationDate: new Date('2021-10-26'),
      },
      {
        title: 'O que é UDP e quais as diferenças com o TCP?',
        author: 'Giulianna',
        category: 'tecnologia',
        publicationDate: new Date('2021-10-26'),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
