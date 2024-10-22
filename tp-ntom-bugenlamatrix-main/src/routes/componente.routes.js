const { Router } = require('express')
const {componenteSchema} = require('../schema/componentes.schema')
const {componentesMiddleware} = require('../middlewares')
const schemaValidator = require('../middlewares/schemaValidator')
const componentesController = require('../controllers/componentes.controllers')

const route = Router()

route.get('/componentes', componentesController.getAllComponents)

route.get('/componentes/:id', componentesMiddleware.validateIdComponent, componentesController.getComponentById )

route.post('/componentes', schemaValidator(componenteSchema), componentesController.createComponent)

route.put('/componentes/:id', componentesMiddleware.validateIdComponent, componentesController.updateComponent)

route.delete('/componentes/:id', componentesMiddleware.validateIdComponent, componentesController.deleteComponentById)

route.get('/componentes/:id/productos', componentesMiddleware.validateIdComponent, componentesController.getAllProductsWithAComponent)

module.exports = route
