'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('botcamps', [
    {
      name: 'PHP Bootcamp',
      description: 'Bootcamp for PHP learning',
      phone: '(57)3237853174',
      average_cost: 4500,
      average_rating: 3,
      user_id: 1
    },
    {
      name: 'Java',
      description: 'Bootcamp for java learning',
      phone: '(57)3237853154',
      average_cost: 4500,
      average_rating: 3,
      user_id: 2
    },
    {
      name: 'JS',
      description: 'Bootcamp for PHP learning',
      phone: '(57)3212416418',
      average_cost: 4500,
      average_rating: 3,
      user_id: 3
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('botcamps', null, {});
     
  }
};
