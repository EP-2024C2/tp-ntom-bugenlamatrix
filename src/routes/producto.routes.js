const { Router } = require('express')
const {productoSchema} = require('../schema/productos.schema')
const {productosMiddleware} = require('../middlewares')
const schemaValidator = require('../middlewares/schemaValidator')
const productosController = require('../controllers/productos.controllers')

const route = Router()

route.get('/productos', productosController.getAllProducts)

route.get('/productos/:id', productosMiddleware.validateIdProduct, productosController.getProductById )

route.post('/productos', schemaValidator(productoSchema), productosController.createProduct)

route.put('/productos/:id', productosMiddleware.validateIdProduct, productosController.updateProduct)

route.delete('/productos/:id', productosMiddleware.validateIdProduct, productosController.deleteProductById)

route.post('/productos/:id/fabricantes', schemaValidator(productoSchema), productosController.addFabricatorsToProduct)

route.get('/productos/:id/fabricantes', productosMiddleware.validateIdProduct, productosController.getAllFabricatorsOfAProduct)

route.post('/productos/:id/componentes', schemaValidator(productoSchema), productosController.addComponentsToProduct)

route.get('/productos/:id/componentes', productosMiddleware.validateIdProduct, productosController.getAllComponentsOfAProduct)

module.exports = route
