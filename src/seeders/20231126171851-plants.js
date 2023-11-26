'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert({ tableName: 'plant', schema: 'plants' }, [{
      name: "Rose",
      updatedAt: '2023-11-26 16:25:36.471 +00:00',
      createdAt: '2023-11-26 16:25:36.471 +00:00'
    }, {
      name: "Aloe Vera",
      updatedAt: '2023-11-26 16:25:36.471 +00:00',
      createdAt: '2023-11-26 16:25:36.471 +00:00'
    }, {
      name: "Camelia",
      updatedAt: '2023-11-26 16:25:36.471 +00:00',
      createdAt: '2023-11-26 16:25:36.471 +00:00'
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete({ tableName: 'plant', schema: 'plants' }, null, {});
  }
};
