const { Producto, Fabricante, Componente } = require('../models')

async function initialProdFabComp(){
    try {
        const fabri1 = await Fabricante.create({nombre: 'TechCorp', direccion: '1234 Elm St, Ciudad', numeroContacto: "+123456789", pathImgPerfil: "/images/fabricantes/techcorp.jpg"})
        const fabri2 = await Fabricante.create({nombre: "Innovatech", direccion: "4567 Oak Ave, Ciudad", numeroContacto: "+987654321", pathImgPerfil: "/images/fabricantes/innovatech.jpg"})

        const prod1 = await Producto.create({ nombre: "Laptop X200", descripcion: "Una laptop de alto rendimiento", precio: 1200.99, pathImg: "/images/productos/laptop-x200.jpg"})
        const prod2 = await Producto.create({ nombre: "Smartphone S5", descripcion: "Teléfono inteligente con pantalla OLED", precio: 799.99, pathImg: "/images/productos/smartphone-s5.jpg"})
    
        const comp1 = await Componente.create({nombre: "Procesador Intel i7", descripcion: "Procesador de octava generación"})
        const comp2 = await Componente.create({nombre: "SSD 1TB", descripcion: "Disco sólido de 1TB de capacidad"})
        const comp3 = await Componente.create({nombre: "Pantalla OLED 6.5 pulgadas", descripcion: "Pantalla de alta definición"})
        const comp4 = await Componente.create({nombre: "Batería 4000mAh", descripcion: "Batería de larga duración"})
       
        await fabri1.addProductos([prod1, prod2])
        await fabri2.addProducto(prod1)
        await prod1.addComponentes([comp1, comp2])
        await prod2.addComponentes([comp3, comp4])


    console.log('Los datos y las relaciones fueron creados exitosamente')
    } catch (error) {
        console.log('Error al crear los datos: ', error)
    }
}

module.exports = initialProdFabComp
