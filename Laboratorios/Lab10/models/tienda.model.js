const db = require('../util/database'); // Para conectar la base de datos

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
        return db.execute(
            'INSERT INTO productos(marca, modelo, anio, descripcion) VALUES (? ,?, ?, ?)',
            [this.marca, this.modelo, this.anio, this.descripcion]);
    }

    // Metodo para devolver los objetos del objeto
    static fetchAll(){
        return db.execute('SELECT * FROM productos');
    }
}