'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' FK con users
    //addColumn: parametros: 
    //    1.la tabla en la cual poner la columna
    //    2.Nombre de la nueva columna
    //    3.opciones de la nueva columna
    queryInterface.addColumn('reviews',
                            'bootcamp_id', 
                            {
                              type: Sequelize.INTEGER,
                              references:{
                                model:'botcamps',
                                key: 'id'
                              },
                              onUpdate: 'CASCADE',
                              onDelete: 'SET NULL'
                            })
  },

  async down (queryInterface, Sequelize) {
    //Metodo remove column
    //parametros: 
    //1.la tabla donde vas a remover
    //2.la columna a eliminar
    await queryInterface.removeColumn('reviews', 'bootcamp_id')
  }
};