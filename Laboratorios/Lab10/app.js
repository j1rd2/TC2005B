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
app.use(bodyParser.json());

// Configurar multer

const multer = require('multer');

// fileStorage es nuestra constante para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        // 'uploads': Directorio donde se almacenaran los archivos
        callback(null, 'public/uploads')
    },
    filename: (request, file, callback) => {
        // Se configura el nombre que tenga el archivo
        callback(null, new Date().getMilliseconds() + file.originalname);
    },
});

// Pasamos la constante de configuracion y se usa single por que es 1 solo archivo
app.use(multer({storage: fileStorage}).single('imagen'));


// Para usar cookie parser 
const cookieParser = require('cookie-parser');

// Para usar express session
const session = require('express-session');

app.use(session({
    secret: 'string secreto', // Guarda un string aleatorio
    resave: false, // La session no se guardara en cada peticion, solo si algo cambia
    saveUninitialized: false, // Asegura que no se guarde una sesion para una peticion que no lo necesita
}));

// Para usar fs
const fs = require('fs');
// Para usar csrf
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

app.use((requst, response, next) =>{
    response.locals.csrfToken = requst.csrfToken();
    next();
});

// Middleware
app.use((request, response, next) => {
    console.log('Middleware');

    // Para crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');

    next(); // Permite a la petición avanzar al siguiente middleware
});


const rutasPrincipal = require('./routes/principal.routes');
app.use('/',rutasPrincipal);

const rutasTienda = require ('./routes/tienda.routes');
app.use('/', rutasTienda);

const rutasUsuarios = require('./routes/users.routes');
app.use('/', rutasUsuarios);

app.use('/users', rutasUsuarios);

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

console.log('-----------------------------------------');

console.log('Beneficios MVC: Considero que tienes un proyecto mas limpio y organizado y a la larga es mas facil de mantener. Igual como es facil reutilizar codigo y separarlo por su proposito');
console.log('Desventajas MVC: Considero tiene una curva de aprendizaje mas larga y complejidad mayor. Igual mantener que los datos se sincronicen es complicado.')

console.log('-----------------------------------------');

console.log('¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?: Las principales ventajas considero que son mantener un codigo mas limpio, oraganizado y con mejor mantenibilidad');
console.log('¿Qué es SQL injection y cómo se puede prevenir?: Un tipo de ataque que aprovecha una vulnerabilidad en el codigo y permite ingresar codigo SQL dando instruccionmes. Puede eliminar tablas, bases de datos, cambiar datos, etc... Hay varias formas pero lo comun es con las propias librerias como mysql2');

console.log('-----------------------------------------');

console.log('¿Qué otras formas de autentificación existen?: Existen muchos tipos de autentificacion, con ventajas, desvemtajas y se adaptan a diferentes necesidades, como Autentificacion 2 o 3 factores, Single Sign-On, OAuth, Certificados de Cliente SSL, Biometria, entre otros,');
console.log('¿En qué consiste el control de acceso basado en roles?: En un sistema para controlar los atributos o privilegios de un usuario de acuerdo a una jerarquia o diferentes necesidades');

console.log('-----------------------------------------');

console.log('Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso.');
console.log(' Sistema con RBAC (Control de Acceso Basado en Roles) - Amazon Web Services (AWS) Identity and Access Management (IAM)');
console.log('Ventajas: flexibilidad, facil de trazar, nivel detallado de permisos');
console.log('Desventajas: es de pago, tiene un grado de compleidad');
console.log('Sistema sin RBAC - Sistema de Archivos de Linux para Usuarios Individuales');
console.log('Ventajas: transparencia y facil de implementar');
console.log('Desventajas: Tiene riesgos de seguridad');
console.log('-----------------------------------------');

app.listen(3000);
