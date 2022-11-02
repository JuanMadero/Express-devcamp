'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reviews', 
    [
      {
       title: 'PHP Bootcamp',
       Text: 'review 1 for PHP learning',
       rating: 3,
       bootcamp_id: 1,
       user_id: 1
      },
      {
       title: 'PHP Bootcamp',
       Text: 'review 2 for PHP learning',
       rating: 3,
       bootcamp_id: 2,
       user_id: 2
      },
      {
       title: 'PHP Bootcamp',
       Text: 'review 3 for PHP learning',
       rating: 3,
       bootcamp_id: 3,
       user_id: 3
      },
      {
        title: 'PHP Bootcamp',
        Text: 'review 3 for PHP learning',
        rating: 3,
        bootcamp_id: 4,
        user_id: 4
       },
    ], {});

  },
  async down (queryInterface, Sequelize) 
  {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};