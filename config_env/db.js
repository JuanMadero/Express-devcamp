const mongoose = require('mongoose')

//const uri = 'mongodb+srv://JuanM:Ca1125848211@cluster0.q6xbag7.mongodb.net/Bootcamps-sena?retryWrites=true&w=majority'
const uri = "mongodb://localhost:27017/bootcamps-sena"

//componente de conexion a BD tipo : funcional
const connectDB = async () => {
    const conn = await mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })

    console.log(`MongoBD conectado: ${conn.connection.host}`)
}

connectDB()