const {Producto, Fabricante, Componente} = require('../models')
//const { Op } = require('sequelize')

controller = {}

const getAllFabricators = async (req, res) => {
    const fabricantes = await Fabricante.findAll({})
    res.status(200).json(fabricantes)
}

controller.getAllFabricators = getAllFabricators

const getFabricatorById = async (req, res) => {
    const {id} = req.params
    const fabricante = await Fabricante.findByPk(id)
    res.status(200).json(fabricante)
}

controller.getFabricatorById = getFabricatorById

const createFabricator = async (req, res) =>{
    const {nombre, direccion, numeroContacto, pathImgPerfil } = req.body
    const fabricante = await Fabricante.create({
        nombre,
        direccion,
        numeroContacto,
        pathImgPerfil
    })
    res.status(201).json(fabricante)
}

controller.createFabricator = createFabricator

const updateFabricator = async (req, res) =>{
    const {nombre, direccion, numeroContacto, pathImgPerfil } = req.body
    const {id} = req.params
    const fabricante = await Fabricante.findByPk(id)
    fabricante.nombre = nombre
    fabricante.direccion = direccion
    fabricante.numeroContacto = numeroContacto
    fabricante.pathImgPerfil = pathImgPerfil
    await fabricante.save()
    res.status(200).json(fabricante)
}

controller.updateFabricator = updateFabricator

const deleteFabricatorById = async (req, res) =>{
    const {id} = req.params
    try{
        const row = await Fabricante.destroy({
        where: {id}
        })
        res.status(200).json({mensaje: `filas afectadas ${row}`})
    }
    catch(error){
        res.status(500).json({mensaje: 'Error al intentar borrar el fabricante', error})
    }
}

controller.deleteFabricatorById = deleteFabricatorById

const getAllProductsOfAFabricator= async (req, res) =>{
   const fabricanteConProductos = await Fabricante.findAll({
        where: { id: req.params.id},
        attributes: ['id','nombre', 'direccion', ['numeroContacto', 'contacto'], 'pathImgPerfil'],
        include: [{
            model: Producto,
            as: 'productos',
            through: { attributes: [] },
            include: [{
                model: Componente,
                //as: 'componentes',
                through: { attributes: [] }
            }]
        }]
   })
   res.status(200).json(fabricanteConProductos)  
}

controller.getAllProductsOfAFabricator = getAllProductsOfAFabricator


module.exports = controller



