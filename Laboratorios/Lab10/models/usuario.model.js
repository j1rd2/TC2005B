const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(nuevo_usuario){
        this.nombre = nuevo_usuario.nombre || 'Jesus';
        this.username = nuevo_usuario.username || 'username';
        this.password = nuevo_usuario.password || 'hola1234';
    }

    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    'INSERT INTO usuarios (username, password, nombre) VALUES (?, ?. ?)',
                    [this.username, this.password_cifrado, this.nombre]
                );
            }).catch((error) => {console.log(error)});
    }
}