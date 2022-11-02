'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('courses', [
    {
      title: 'PHP',
      description: 'Course for PHP learning',
      weeks: '2',
      enroll_cost: 4500,
      minimun_skill: 'basic',
      bootcamp_id: 1
    },
    {
      title: 'SQL',
      description: 'Course for SQL learning',
      weeks: '4',
      enroll_cost: 4500,
      minimun_skill: 'basic',
      bootcamp_id: 2
    },
    {
      title: 'Java',
      description: 'Course for Java learning',
      weeks: '4',
      enroll_cost: 4500,
      minimun_skill: 'basic',
      bootcamp_id: 3
    },
    {
      title: 'Js',
      description: 'Course for Js learning',
      weeks: '5',
      enroll_cost: 4500,
      minimun_skill: 'basic',
      bootcamp_id: 1
    },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('courses', null, {});
     
  }
};
