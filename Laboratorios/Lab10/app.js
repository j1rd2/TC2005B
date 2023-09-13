const express = require('express');
const app = express();

// Para usar templates
app.set('view.engine', 'ejs');
app.set('views', 'views');


const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para los elementos de carpeta public

//Para usar body parser

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Para usar cookie parser 
const cookieParser = require('cookie-parser');

const fs = require('fs');

// Middleware
app.use((request, response, next) => {
    console.log('Middleware');

    // Para acceder a la información de las cookies
    const cookies = request.get('Cookie');
    // String con toda la información de las cookies
    console.log(cookies);
    
    // Comprueba si cookies está definido antes de intentar usar 'split' (Me lanzaba error por undefined)

        console.log(cookies, request.cookies);
    
    
    // Para crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');

    next(); // Permite a la petición avanzar al siguiente middleware
});


const rutasPrincipal = require('./routes/principal.routes');
app.use('/',rutasPrincipal);

const rutasTienda = require ('./routes/tienda.routes');
app.use('/', rutasTienda);

app.use((request, response, next) => {
    response.statusCode = 404;
    let html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-black p-4">
                    <div class="container mx-auto flex justify-between items-center">
                        <img class="justify-items-start w-20 h-20" src="logo.png"> 
                        <h1 class="font-mono text-center text-2xl text-stone-50">LOVE BIKES</h1>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-white">Home</a></li>
                            <li><a href="#" class="text-white">About</a></li>
                            <li><a href="#" class="text-white">Services</a></li>
                            <li><a href="#" class="text-white">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <h1 class="font-mono text-center text-4xl text-black">Page not found</h1>
            </main>
            <footer>
            </footer>
        </body>
        </html>
    `;
    response.send(html);
});

console.log('Describe el archivo package JSON: Un archvio que mantiene la configuracion de los proyectos de NodeJs. Incluye dependencias, metadatos, scripts, etc...');

console.log('¿Que otros templating engines existen para node: Existen varios que se adaptan a diferentes necesidades o prioridades como pug que tiene una sintaxis muy limpia, handlebars que es muy facil de aprender o mustache que es extremadamente facil de aprender y compatible con otros lenguajes');

console.log('Beneficios MVC: Considero que tienes un proyecto mas limpio y organizado y a la larga es mas facil de mantener. Igual como es facil reutilizar codigo y separarlo por su proposito');

console.log('Desventajas MVC: Considero tiene una curva de aprendizaje mas larga y complejidad mayor. Igual mantener que los datos se sincronicen es complicado.')

app.listen(3000);
