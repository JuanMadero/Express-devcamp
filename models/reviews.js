'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return Review.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un nombre asi');
              }
            })
          },
          notNull: {
            args: true,
            msg:'Title debe estar presente'
          },
          notEmpty: {
            args: true,
            msg:'Title no debe ser vacio'
          }
        }
    },
    text: {
      type :DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'Text debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'Text no debe ser vacio'
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'Rating debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'Rating no debe ser vacio'
        },
      },
    },
    bootcamp_id :{
      type:DataTypes.INTEGER,
    },
    user_id :{
      type:DataTypes.INTEGER,
    }   
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false
  });
  return Review;
};