const { Producto } = require('../models')
const middleware = {}

const validateIdProduct = async (req, res, next)=>{
    const {id} = req.params
    const producto = await Producto.findByPk(id)
    console.log(producto)
    if (!producto)
        return res.status(404).json({mensaje: `El producto con id ${id} no existe.`})
    next()
}

middleware.validateIdProduct = validateIdProduct



module.exports = middleware