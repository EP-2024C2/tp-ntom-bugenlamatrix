const {Producto, Componente} = require('../models')
//const { Op } = require('sequelize')

controller = {}

const getAllComponents = async (req, res) => {
    const componentes = await Componente.findAll({})
    res.status(200).json(componentes)
}

controller.getAllComponents = getAllComponents

const getComponentById = async (req, res) => {
    const {id} = req.params
    const componente = await Componente.findByPk(id)
    res.status(200).json(componente)
}

controller.getComponentById = getComponentById

const createComponent = async (req, res) =>{
    const {nombre, descripcion} = req.body
    const componente = await Componente.create({
        nombre,
        descripcion
    })
    res.status(201).json(componente)
}

controller.createComponent = createComponent

const updateComponent = async (req, res) =>{
    const {nombre, descripcion} = req.body
    const {id} = req.params
    const componente = await Componente.findByPk(id)
    componente.nombre = nombre
    componente.descripcion = descripcion
    await componente.save()
    res.status(200).json(componente)
}

controller.updateComponent = updateComponent

const deleteComponentById = async (req, res) =>{
    const {id} = req.params
    try{
        const row = await Componente.destroy({
        where: {id}
        })
        res.status(200).json({mensaje: `filas afectadas ${row}`})
    }
    catch(error){
        res.status(500).json({mensaje: 'Error al intentar borrar el componente', error})
    }
}

controller.deleteComponentById = deleteComponentById

const getAllProductsWithAComponent= async (req, res) =>{
   const componenteDeProductos = await Componente.findAll({
        where: { id: req.params.id},
        include: {
            model: Producto,
            through: { attributes: []}
        }
   })
   res.status(200).json(componenteDeProductos)  
}

controller.getAllProductsWithAComponent = getAllProductsWithAComponent


module.exports = controller
