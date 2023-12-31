const Usuario = require("../models/usuario.model");

const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    response.render('users/login.ejs', {
        username: '',
        isLoggedIn: request.session.isLoggedIn || false,
        privilegios: request.session.privilegios || [],
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData]) => {
            // Obtiene primer valor de consulta (La consulta solo devuelve maximo un elemento)
            const user = users[0];
            
            if (users.length > 0) {
                bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        Usuario.getPrivilegios(user.id)
                            .then(([privilegios, fieldData]) => {
                                request.session.privilegios = privilegios;
                                response.redirect('/');
                            }).catch(error => {
                                console.error(error);
                                response.redirect('/users/login');
                            });
                    }
                }).catch(error => {
                    console.log(error);
                    response.redirect('/users/login');
                });
            } else {
                response.redirect('/users/login');
            }
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(()=>{
        response.redirect('users/login'); // Se ejecuta cuando la sesion termina
    });
};

exports.get_add = (request, response, next) => {

    let error = request.session.error || false;

    if (error) {
        request.session.error = false;
    }

    response.render('users/add.ejs',{
        username: '',
        isLoggedIn: request.session.isLoggedIn || false,
        error: error,
        privilegios: request.session.privilegios || [],
    });
};

exports.post_add = (request, response, next) => {
    const usuario = new Usuario ({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });
    usuario.save()
        .then(() => {
            return response.redirect('/users/login');
        }).catch((error) => {
            console.log(error);
            request.session.error = error;
            response.redirect('/users/add');
        });
};