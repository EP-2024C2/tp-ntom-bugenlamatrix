const { Componente } = require('../models')
const middleware = {}

const validateIdComponent = async (req, res, next)=>{
    const {id} = req.params
    const componente = await Componente.findByPk(id)
    console.log(componente)
    if (!componente)
        return res.status(404).json({mensaje: `El componente con id ${id} no existe.`})
    next()
}

middleware.validateIdComponent = validateIdComponent



module.exports = middleware