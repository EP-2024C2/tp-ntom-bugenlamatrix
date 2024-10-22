const { Router } = require('express')
const {fabricanteSchema} = require('../schema/fabricantes.schema')
const {fabricantesMiddleware} = require('../middlewares')
const schemaValidator = require('../middlewares/schemaValidator')
const fabricantesController = require('../controllers/fabricantes.controllers')

const route = Router()

route.get('/fabricantes', fabricantesController.getAllFabricators)

route.get('/fabricantes/:id', fabricantesMiddleware.validateIdFabricator, fabricantesController.getFabricatorById )

route.post('/fabricantes', schemaValidator(fabricanteSchema), fabricantesController.createFabricator)

route.put('/fabricantes/:id', fabricantesMiddleware.validateIdFabricator, fabricantesController.updateFabricator)

route.delete('/fabricantes/:id', fabricantesMiddleware.validateIdFabricator, fabricantesController.deleteFabricatorById)

route.get('/fabricantes/:id/productos', fabricantesMiddleware.validateIdFabricator, fabricantesController.getAllProductsOfAFabricator)

module.exports = route
