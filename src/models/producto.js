const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Producto extends Model {}

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: DataTypes.TEXT,
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pathImg: DataTypes.STRING
}, {
    sequelize,
    modelName: 'producto',
    timestamps: false
})

module.exports = Producto