const Usuario = require("../models/usuario.model");

exports.get_login = (request, response, next) => {
    response.render('users/login.ejs', {
        username: '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    response.redirect('/');
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