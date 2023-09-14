const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(nuevo_usuario){
        this.nombre = nuevo_usuario.nombre || 'Jesus';
        this.username = nuevo_usuario.username || 'username';
        this.password = nuevo_usuario.password || 'hola1234';
    }h

    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    'INSERT INTO usuarios(username, password, nombre) VALUES (?, ?, ?)',
                    [this.username, password_cifrado, this.nombre]
                );
            }).catch((error) => {console.log(error)});
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?',
        [username]);
    }

    static getPrivilegios(id_usuario) {
        return db.execute(
            `SELECT p.nombre 
            FROM usuarios u, usuario_rol ur, roles r, rol_privilegio rp, 
                privilegios p
            WHERE u.id = ? AND u.id = ur.id_usuario AND ur.id_rol = r.id
                AND rp.id_rol = r.id AND rp.id_privilegio = p.id`, 
            [id_usuario]);
    }
}