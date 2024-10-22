const Joi = require('joi')

const componenteSchema = Joi.object().keys(
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
        })
    }
).unknown(false).messages ({
    'object.unknown': 'El atributo {#label} no está permitido.'
})

module.exports = componenteSchema