exports.get_login = (request, response, next) => {
    response.render('users/login.ejs');
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(()=>{
        response.redirect('users/login'); // Se ejecuta cuando la sesion termina
    })
};