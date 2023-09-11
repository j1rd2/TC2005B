let productos = []; // Arreglo de productos

module.exports = class Productos {
    constructor(nuevoProducto) { // Constructor para construir el objeto y en que prioridad
        this.marca = nuevoProducto.marca;
        this.modelo = nuevoProducto.modelo;
        this.anio = nuevoProducto.anio;
        this.descripcion = nuevoProducto.descripcion;
    }

    // Metodo para guardarlo en el objeto

    save() {
        productos.push(this);
    }

    // Metodo para devolver los objetos del objeto
    static fetchAll(){
        return productos;
    }
}