const db = require('../util/database');

module.exports = class Usuario {
    constructor(nuevo_usuario){
        this.nombre = nuevo_usuario.nombre || 'Jesus';
        this.username = nuevo_usuario.username || 'username';
        this.password = nuevo_usuario.password || 'hola1234';
    }

    save() {
        return db.execute(
            'INSERT INTO usuarios (username, password, nombre) VALUES (?, ?, ?)',
            [this.username, this.password, this.nombre]);
    }
}