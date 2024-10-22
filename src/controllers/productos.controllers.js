const {Producto, Fabricante, Componente} = require('../models')
//const { Op } = require('sequelize')

controller = {}

const getAllProducts = async (req, res) => {
    const productos = await Producto.findAll({})
    res.status(200).json(productos)
}

controller.getAllProducts = getAllProducts

const getProductById = async (req, res) => {
    const {id} = req.params
    const producto = await Producto.findByPk(id)
    res.status(200).json(producto)
}

controller.getProductById = getProductById

const createProduct = async (req, res) =>{
    const {nombre, descripcion, precio, pathImg } = req.body
    const producto = await Producto.create({
        nombre,
        descripcion,
        precio,
        pathImg
    })
    res.status(201).json(producto)
}

controller.createProduct = createProduct

const updateProduct = async (req, res) =>{
    const {nombre, descripcion, precio, pathImg } = req.body
    const {id} = req.params
    const producto = await Producto.findByPk(id)
    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.precio = precio
    producto.pathImg = pathImg
    await producto.save()
    res.status(200).json(producto)
}

controller.updateProduct = updateProduct

const deleteProductById = async (req, res) =>{
    const {id} = req.params
    try{
        const row = await Producto.destroy({
        where: {id}
        })
        res.status(200).json({mensaje: `filas afectadas ${row}`})
    }
    catch(error){
        res.status(500).json({mensaje: 'Error al intentar borrar el producto', error})
    }
}

controller.deleteProductById = deleteProductById

const addFabricatorsToProduct = async (req, res) =>{
    const arrayFabricantes = req.body
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    //producto.setFabricantes(arrayFabricantes)
    let fabricantes = []
    arrayFabricantes.forEach(fabricante => {
        fabricantes.push(Fabricante.create(fabricante))
    })
    producto.addFabricantes(fabricantes)
    res.status(201).json({mensaje: 'Los fabricantes han sido agregados al producto con éxito'})    
}

controller.addFabricatorsToProduct = addFabricatorsToProduct

const getAllFabricatorsOfAProduct = async (req, res) =>{
   const productoConFabricantes = await Producto.findAll({
        where: { id: req.params.id},
        include: {
            model: Fabricante,
            attributes: ['id','nombre', 'direccion', ['numeroContacto', 'contacto'], 'pathImgPerfil'],
            through: {attributes: []}
        }
   })
   res.status(200).json(productoConFabricantes)  
}

controller.getAllFabricatorsOfAProduct = getAllFabricatorsOfAProduct

const addComponentsToProduct = async (req, res) =>{
    const arrayFabricantes = req.body
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    let componentes = []
    arrayFabricantes.forEach(componente => {
        componentes.push(Fabricante.create(componentes))
    })
    producto.addComponentes(componentes)
    res.status(201).json({mensaje: 'Los componentes han sido agregados al producto con éxito'})    
}

controller.addComponentsToProduct = addComponentsToProduct

const getAllComponentsOfAProduct = async (req, res) =>{
   const productoConComponentes = Producto.findAll({
        where: { id: req.params.id},
        include: {
            model: Componente,
            through: {attributes: []}
        }
   })
   res.status(200).json(productoConComponentes)  
}

controller.getAllComponentsOfAProduct = getAllComponentsOfAProduct


module.exports = controller


