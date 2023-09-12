const fs = require('fs');

const Producto = require('../models/tienda.model');
const modelo = require('../models/tienda.model');

exports.get_vender = (request, response, next) => {
    response.render ('vender.ejs');
};

exports.post_vender = (request, response, next) => {
    console.log(request.body);            

    const producto = new Producto ({
        marca: request.body.marca,
        modelo: request.body.modelo,
        anio: request.body.anio,
        descripcion: request.body.descripcion
    });

    producto.save();

    const texto = JSON.stringify(producto, null, 2);

    fs.writeFile('datos.txt', texto, (err) => {
        if (err) {
    console.error(err);
    res.status(500).send('Error al guardar los datos');
    } else {
        console.log('Datos guardados con éxito');
    }
    });

    response.redirect('/tienda');
};

exports.get_tienda = (request, response, next) => {

    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);

    response.render('tienda.ejs', {productos: Producto.fetchAll() , tiempo_transcurrido: tiempo_transcurrido}
    );
};
