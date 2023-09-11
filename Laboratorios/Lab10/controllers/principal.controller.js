
exports.get_main = (request, response, next) => {
    response.render('main.ejs');
};

exports.get_noticias = (request, response, next) => {
    response.render('noticias.ejs');
};

exports.get_tour = (request, response, next) => {
    response.render('tour.ejs');
};

exports.get_vuelta = (request, response, next) => {
    response.render('vuelta.ejs');
};

exports.get_giro = (request, response, next) => {
    response.render('giro.ejs');
};
