const express = require ('express')

//definir objeto de ruteo
const router = express.Router()

//listar todos los bootcamp
router.get('/' , (req, resp)=>{
    resp
        .status(200)
        .json({
            "success": true,
            "data": "aqui van a salir todos los bootcamp"
        })
})

// listar bootcamp por id
router.get('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

//actualizar bootcamp 
router.put('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})

//eliminar bootcamp 
router.delete('/:id' , (req, resp)=>{
    console.log(req.params.id)
    resp
        .status(200)
        .json({
            "success": true,
            "data": `aqui va a borrarse el bootcamp cuyo id es ${req.params.id}`
        })
})

//crear nuevo bootcamp
router.post('/' , (req, resp)=>{
    resp
        .status(200)
        .json({
            "success": true,
            "data": "aqui vamos a registra un nuevo bootcamp"
        })
})

module.exports = router