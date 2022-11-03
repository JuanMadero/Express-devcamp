//dependencias
//objeto de conexion
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel = require('../models/user')
const user = require('../models/user')

//crear la entidad:
const User = UserModel(sequelize, DataTypes)
//listar todos los users
exports.getAllUsers = async (req, resp) => {
    try {
        //traer todos los usuarios
        const users = await User.findAll();
        //response con los datos
        resp
            .status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        resp
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }

}

// listar user por id
exports.getSingleUser = async (req, resp) => {
    //console.log(req.params.id)
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (singleUser) {
            resp
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "usuario no existente"
                })
        }

    } catch (error) {
        resp
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
    }

}

//actualizar user 
exports.updateUser = async (req, resp) => {
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "usuario no existente"
                })
        } else {
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }})

                const updateUser = await User.findByPk(req.params.id);

            resp
                .status(200)
                .json({
                    "success": true,
                    "data": updateUser
                })
        }

    } catch (error) {
        resp
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
    }

}

//Borrar users
exports.deleteUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
            await User.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
    
}
//crear nuevo user
exports.createUser = async (req, resp) => {
    try {
        const newUser = await User.create(req.body);
        resp
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })
    } catch (error) {
        if (error instanceof ValidationError) {
            //recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento) => elemento.message)
            resp
                .status(400)
                .json({
                    "success": false,
                    "errors": errores
                })
        } else {
            resp
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}