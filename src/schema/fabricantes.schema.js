const Joi = require('joi')
const {validateFabricanteURL} = require('../utils/validatorPath')

const fabricanteSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(10).max(255).messages( {
            "any.required": "nombre es requerido",
            "string.min": "nombre debe tener como mínimo {#limit} caracteres",
            "string.max": "nombre debe tener como máximo {#limit} caracteres",
            "string.empty": "nombre no puede ser vacio"
        }),
        direccion: Joi.string().min(10).max(255).required().messages({
            "any.required": "descripcion es requerida",
            "string.min": "debe tener como mínimo {#limit} caracteres",
            "string.max": "debe tener como máximo {#limit} caracteres",
            "string.empty": "descripcion no puede ser vacio"
        }),
        numeroContacto: Joi.string().min(10).max(255).required().messages({
            "any.required": "el numero de contacto es requerido",
            "string.min": "debe tener como mínimo {#limit} caracteres",
            "string.max": "debe tener como máximo {#limit} caracteres",
            "string.empty": "no puede ser vacio"
        }),
        pathImgPerfil: Joi.string().custom(validateFabricanteURL).required().messages( {
            "any.custom": "Verifica que la url es compatible y la extension corresponde a un formato compatible",
            "any.required": "pathImg es requerido",
            "string.empty": "pathImg no puede ser vacio"
        }),
    }
).unknown(false).messages ({
    'object.unknown': 'El atributo {#label} no está permitido.'
})

module.exports = fabricanteSchema