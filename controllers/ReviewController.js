//dependencias
//objeto de conexion
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const ReviewsModel = require('../models/reviews')
const { response } = require('express')
//crear la entidad:
const Review = ReviewsModel(sequelize, DataTypes)
//listar todos los users
exports.getAllReview = async (req, resp) => {
    try {
        //traer todos los usuarios
        const Reviews = await Review.findAll();
        //response con los datos
        resp
            .status(200)
            .json({
                "success": true,
                "data": Reviews
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
exports.getSingleReview = async (req, resp) => {
    //console.log(req.params.id)
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (singleReview) {
            resp
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
                })
        } else {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
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
exports.updateReview = async (req, resp) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            resp
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
                })
        } else {
            // Change everyone without a last name to "Doe"
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            //selecciona usuario actualizado
            const updateReview = await Review.findByPk(req.params.id);

            //console.log(req.params.id)
            resp
                .status(200)
                .json({
                    "success": true,
                    "data": updateReview
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
exports.deleteReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
                })
        } else {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
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
exports.createReview = async (req, resp) => {
    try {
        const newReview = await Review.create(req.body);
        resp
            .status(200)
            .json({
                "success": true,
                "data": newReview
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
