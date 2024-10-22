const validateProductoURL = (path, modelo) =>{
    const dirs = path.split("/")
    if( dirs.lenght == 3 && dirs[0] == 'imagen' && dirs[1] == 'productos'){
        const nombre = dirs[2].split(".")
    }     
    else
        throw new Error('La dirección no existe')
    const ext = nombre.pop()
    if(ext != 'jpg' && ext != 'png')
        throw new Error('La extensión es inválida')
    return path      
}

const validateFabricanteURL = (path, modelo) =>{
    const dirs = path.split("/")
    if( dirs.lenght == 3 && dirs[0] == 'imagen' && dirs[1] == 'fabricantes'){
        const nombre = dirs[2].split(".")
    }     
    else
        throw new Error('La dirección no existe')
    const ext = nombre.pop()
    if(ext != 'jpg' && ext != 'png')
        throw new Error('La extensión es inválida')
    return path      
}

module.exports = {validateProductoURL, validateFabricanteURL}