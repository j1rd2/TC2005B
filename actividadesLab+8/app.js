
console.log("Hello World from Node");

const filesystem = require('fs'); // Require is to get a file
filesystem.writeFileSync('hola.txt', 'Hello');  // writeFileSync is used to write in a syncronic way

console.log("I finished to write the file"); // JS is "blocked until "filesystem" write the file"

function looptest() {
    for (let i = 0; i < 100 ; i++) {
        filesystem.appendFileSync('hola2.txt', 'Hello\n');
    }
}

looptest();


// Imprime a los 7 segundos un mensaje
setTimeout(() => {
    console.error("I hacked You")
}, 7000);

// array
const arreglo = [5000, 60, 50, 100, 43, 2000, 1, 421];

// Measures the time to go through the array
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item)
}

// Create our own server

// Node have a http module

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {

        response.setHeader("Content-Type","text/html");
        response.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Películas</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Películas</h1>
                    <p>
                        <em>Cuando</em> <b>nosotros</b> <i>escribimos</i>  sobre <strong>películas</strong>
                    </p>
                    <br>
                    <p>
                        <label for="favorita">¿Cuál es tu película favorita?</label>
                        <input id="favorita" class="input is-primary" type="text" placeholder="Oppenheimer">
                    </p>
                    <br>
                    <h2 class="subtitle">En cartelera</h2>
                    <button id="boton_cartelera" class="button is-info is-rounded">Ver cartelera</button>
    
                    <div id="posters"></div>
    
                    <table>
                        <tbody>
                            <tr>
                                <td id="Oppenheimer">Oppenheimer</td>
                            </tr>
                            <tr>
                                <td style="color:pink">Barbie</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Película</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>Fecha: 10 de agosto de 2023</td>
                            </tr>
                        </tfoot>
                    </table>
    
                    <h3 class="subtitle">Mis favoritas</h3>
                    <ol class="favorito">
                        <li>Lobo de Wallstreet</li>
                        <li>Django</li>
                        <li>Madagascar</li>
                    </ol>
    
                    <div id="ejercicio_1"></div>
    
                    <button id="boton_cartelera" class="button is-danger is-rounded">Botón en rama</button>
    
                </div>
            </section>
        </main>
        <footer>
    
        </footer>
        </body>
        </html>

    `);
    response.end();
    } else if(request.url == "/new" && request.method == "GET"){
        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Películas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Registro de Peliculas</h1>
                        <form action="/new" method="POST>
                            <label for="nombre> Nombre de la pelicula </label>
                            <input id="nombre" class"input" type="text" placeholder "Oppenheimer>
                            <br>
                            <label for="sinapsis"> Sinapsis </label>
                            <textarea id="sinapsis" name="sinapsis" class="textarea" placeholder="La historia de la bomba atómica"></textarea>
                            <br>
                            <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
                        </form>
                    </div>
            </body>
            </html>
    
        `);
        response.end();
    } else if(request.url == "/new" && request.method == "POST") { 
        
        const datos = [];

        request.on('data', (dato) => {
            // console.log(dato);
            datos.push(dato);
        });

        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const primera_variable = datos_completos.split('&')[0];
            console.log(primera_variable);
            const primer_valor = primera_variable.split('=')[1];
            console.log(primer_valor);
            response.write(`La película fue registrada`);
            return response.end();
        })

        // console.log(dato);
        // response.end();
    }
    else {
        response.statusCode = 404;
    }

});

server.listen(3000); // listen the request