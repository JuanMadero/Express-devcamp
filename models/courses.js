'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return Course.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un nombre asi');
              }
            })
        },
        isAlpha: {
          args: true,
          msg:'Title debe tener solo letras'
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'Description debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'Description no debe ser vacio'
        }
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'Weeks debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'Weeks no debe ser vacio'
        },
      },
    },
    enroll_cost: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'Enroll_Cost debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'Enroll_Cost no debe ser vacio'
        },
      },
    }, 
    minimun_skill: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg:'minimum_skill debe estar presente'
        },
        notEmpty: {
          args: true,
          msg:'minimum_skill no debe ser vacio'
        },
      },
    } 
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false
  });
  return Course;
};