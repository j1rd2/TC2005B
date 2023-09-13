

const db = require('../util/database');

module.exports = class Productos {
    constructor(nuevoProducto) { // Constructor para construir el objeto y en que prioridad
        this.marca = nuevoProducto.marca;
        this.modelo = nuevoProducto.modelo;
        this.anio = nuevoProducto.anio;
        this.descripcion = nuevoProducto.descripcion;
    }

    // Metodo para guardarlo en el objeto

    save() {
        return db.execute('INSERT INTO producto (marca, modelo, anio, descripcion) VALUES (?, ?, ?, ?)',
        [this.marca, this.modelo, this.anio, this.descripcion]);
    }

    // Metodo para devolver los objetos del objeto
    static fetchAll(){
        return db.execute ('SELECT * FROM producto');

    }

    static fetch(id) {
        if (id) {
            return db.execute('SELECT * FROM producto WHERE idProducto = ?',
            [idProducto]);
        } else {
            return this.fetchAll();
        }
    }
}
