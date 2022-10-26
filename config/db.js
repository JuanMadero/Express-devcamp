const sequelize = require('./seq')
const colors = require('colors')
const {DataTypes} = require('sequelize')

//crear instancia de el modelo User
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes) 

//definir la funcion de conexion a la base de datos


const connectDB = async () => {
    try {
        //conectarse a la base de datos 
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgGreen.green)
        const jane = await User.create({ username: "Cristiano", email: "Cr7@gmailcom", password:"Siuu123" });
        console.log("Jane's auto-generated ID:", jane.id);

    } catch (error) {
        console.log(error)
    }
}

connectDB()