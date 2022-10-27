//Dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes } = require('sequelize')
//El modelo
const UserModel = require('../models/user')

//crear la entidad
const User = UserModel(sequelize, DataTypes)


//listar todos los users
exports.getAllUsers = async (req, resp) => {
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    resp
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// listar user por id
exports.getSingleUser = async (req, resp) => {
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    resp
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//actualizar user 
exports.updateUser = async (req, resp) => {
    // Change everyone without a last name to "Doe"
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id);

    //console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//eliminar user 
exports.deleteUser = async (req, resp) => {
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    //console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//crear nuevo user
exports.createUser = async (req, resp) => {
    resp
    const newUser = await User.create(req.body)
    resp
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}