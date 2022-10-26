'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Botcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Botcamps.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    average_cost: DataTypes.FLOAT,
    average_rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Botcamps',
  });
  return Botcamps;
};