//dependencias
//objeto de conexion
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const CoursesModel = require('../models/courses')
const { response } = require('express')
//crear la entidad:
const Course = CoursesModel(sequelize, DataTypes)
//listar todos los users
exports.getAllCourse = async (req, resp) => {
    try {
        //traer todos los usuarios
        const Courses = await Course.findAll();
        //response con los datos
        resp
            .status(200)
            .json({
                "success": true,
                "data": Courses
            })
    } catch (error) {
        resp
            .status(200)
            .json({
                "success": false,
                "errors": error
            })
    }

}

// listar user por id
exports.getSingleCourse = async (req, resp) => {
    //console.log(req.params.id)
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (singleCourse) {
            resp
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
                })
        } else {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "Curso no existente"
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
exports.updateCourse = async (req, resp) => {
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (!singleCourse) {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "Curso no existente"
                })
        } else {
            // Change everyone without a last name to "Doe"
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            //selecciona usuario actualizado
            const updateCourse = await Course.findByPk(req.params.id);

            //console.log(req.params.id)
            resp
                .status(200)
                .json({
                    "success": true,
                    "data": updateCourse
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
exports.deleteCourse = async (req, res) => {
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (!singleCourse) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Course no existente"
                })
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
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
exports.createCourse = async (req, resp) => {
    try {
        const newCourse = await Course.create(req.body);
        resp
            .status(200)
            .json({
                "success": true,
                "data": newCourse
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
