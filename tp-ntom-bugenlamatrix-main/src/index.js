const express = require('express')
const routes  = require('./routes')
const sequelize = require('../config/database')
const initialProdFabComp = require('./seeders/initialSeeders')

console.log(`Trabajo Practico de Estrategias de Persistencia.....`)

const app = express()

app.use(express.json())

//app.use(routes)

app.use(routes.productosRoutes)
app.use(routes.fabricantesRoutes)
app.use(routes.componentesRoutes)

async function startDatabase(){
    try {
        await sequelize.sync({force: true})
        console.log('Base de datos sincronizada')

        await initialProdFabComp()
        console.log('Datos de inicialización cargados correctamente')
    } catch (error) {
        console.log('Error al sicronizar o inicializar los datos')
    }
} 

startDatabase()


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Ejecutando servidor en puerto ${PORT}`)
})