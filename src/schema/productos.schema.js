const Joi = require('joi')
const {validateProductoURL} = require('../utils/validatorPath')

const productoSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(10).max(255).messages( {
            "any.required": "nombre es requerido",
            "string.min": "nombre debe tener como mínimo {#limit} caracteres",
            "string.max": "nombre debe tener como máximo {#limit} caracteres",
            "string.empty": "nombre no puede ser vacio"
        }),
        descripcion: Joi.string().min(20).max(2000).required().messages({
            "any.required": "descripcion es requerida",
            "text.min": "debe tener como mínimo {#limit} caracteres",
            "text.max": "debe tener como máximo {#limit} caracteres",
            "text.empty": "descripcion no puede ser vacio"
        }),
        precio: Joi.number().min(0.01).required().messages({
            "any.required": "precio es requerido",
            "number.min": "el precio mínimo es {#limit}",
        }),
        pathImg: Joi.string().custom(validateProductoURL).required().messages( {
            "any.custom": "Verifica que la url es compatible y la extension corresponde a un formato compatible",
            "any.required": "pathImg es requerido",
            "string.empty": "pathImg no puede ser vacio"
        }),
    }
).unknown(false).messages ({
    'object.unknown': 'El atributo {#label} no está permitido.'
})

module.exports = productoSchema