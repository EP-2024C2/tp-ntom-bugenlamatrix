const { Model, DataTypes } = require("sequelize")
const sequelize = require("../../config/database")

class Componente extends Model {}

Componente.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'componente',
  timestamps: false
})

module.exports = Componente