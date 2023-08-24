const express = require('express');
const app = express();

// Middleware
app.use((request, response, next) => {
    console.log('Middleware');
    next(); // Le permite a la peticion avanzar al siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware');
    response.send('Hola mundi'); // Manda la respuesta
});


app.listen(3000);