const express = require ('express')
const { 
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
} = require ('../controllers/CoursesController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllCourse)
            .post(createCourse)

//crear rutas con parametro
router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourse)
            .delete(deleteCourse)

module.exports = router