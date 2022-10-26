'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      username: 'Camilo',
      email: 'jcmadero1@misena.edu.co',
      password: 'genkidama123',

    },
    {
      username: 'Duvan',
      email: 'jduvan@misena.edu.co',
      password: 'duvis1234',
    },
    {
      username: 'Jack',
      email: 'jack@misena.edu.co',
      password: 'weed1234',
    }]
      , {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
