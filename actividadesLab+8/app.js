const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasPeliculas = require('./routes/peliculas.routes');

app.use('/peliculas', rutasPeliculas);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.statusCode = 404;

    response.send('Es película es muuuy independiente'); //Manda la respuesta
});

app.listen(3000);