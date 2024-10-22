const Producto = require('./producto')
const Fabricante = require('./fabricante')
const Componente = require('./componente')

Producto.belongsToMany(Fabricante, { through: 'ProductoFabricante' });
Fabricante.belongsToMany(Producto, { through: 'ProductoFabricante' });

Producto.belongsToMany(Componente, { through: 'ProductoComponente' });
Componente.belongsToMany(Producto, { through: 'ProductoComponente' });

module.exports = { Producto, Fabricante, Componente }