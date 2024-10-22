const { Fabricante } = require('../models')
const middleware = {}

const validateIdFabricator = async (req, res, next)=>{
    const {id} = req.params
    const fabricante = await Fabricante.findByPk(id)
    console.log(fabricante)
    if (!fabricante)
        return res.status(404).json({mensaje: `El fabricante con id ${id} no existe.`})
    next()
}

middleware.validateIdFabricator = validateIdFabricator



module.exports = middleware