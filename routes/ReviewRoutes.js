const express = require ('express')
const { 
    getAllReview,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
} = require('../controllers/ReviewController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllReview)
            .post(createReview)

//crear turas con parametro
router.route('/:id')
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)

module.exports = router
