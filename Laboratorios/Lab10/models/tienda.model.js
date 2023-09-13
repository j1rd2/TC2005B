let productos = []; // Arreglo de productos

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
        productos.push(this);
    }

    // Metodo para devolver los objetos del objeto
    static fetchAll(){
        return db.execute ('SELECT * FROM lovebikes')
        .then (([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
