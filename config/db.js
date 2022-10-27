const sequelize = require('./seq')
const colors = require('colors')

const connectDB = async () => {
    try {
        //conectarse a la base de datos 
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgGreen.red)

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB