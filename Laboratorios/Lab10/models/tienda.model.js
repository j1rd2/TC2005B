<<<<<<< HEAD

const db = require('../util/database');

let productos = [];
=======
const db = require('../util/database'); // Para conectar la base de datos

let productos = []; // Arreglo de productos
>>>>>>> lab17

module.exports = class Productos {
    constructor(nuevoProducto) { // Constructor para construir el objeto y en que prioridad
        this.marca = nuevoProducto.marca;
        this.modelo = nuevoProducto.modelo;
        this.anio = nuevoProducto.anio;
        this.descripcion = nuevoProducto.descripcion;
    }

    // Metodo para guardarlo en el objeto

    save() {
<<<<<<< HEAD
        return db.execute('INSERT INTO productos(marca, modelo, anio, descripcion) VALUES (?, ?, ?, ?)',
        [this.marca, this.modelo, this.anio, this.descripcion]);
=======
        return db.execute(
            'INSERT INTO productos(marca, modelo, anio, descripcion) VALUES (? ,?, ?, ?)',
            [this.marca, this.modelo, this.anio, this.descripcion]);
>>>>>>> lab17
    }

    // Metodo para devolver los objetos del objeto
    static fetchAll(){
<<<<<<< HEAD
        return db.execute ('SELECT * FROM productos');

    }

    static fetch(idProducto) {
        if (idProducto) {
            return db.execute('SELECT * FROM productos WHERE idProducto = ?',
            [idProducto]);
=======
        return db.execute('SELECT * FROM productos');
    }

    static fetch(id) {
        if (id) {
            return db.execute('SELECT * FROM productos WHERE id = ?',
            [id]);
>>>>>>> lab17
        } else {
            return this.fetchAll();
        }
    }
}
