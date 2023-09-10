const fs = require('fs');

let productos = []; // Arreglo de productos

exports.get_vender = (request, response, next) => {
    response.render ('vender.ejs');
};

exports.post_vender = (request, response, next) => {
    console.log(request.body);            

    productos.push ({
        marca: request.body.marca,
        modelo: request.body.modelo,
        anio: request.body.anio,
        descripcion: request.body.descripcion
    });

    const texto = JSON.stringify(productos, null, 2);

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
    response.render('tienda.ejs', {productos: productos}
    );
};
