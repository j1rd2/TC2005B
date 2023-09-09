const http = require('http');
const querystring = require('querystring'); // Modulo de Node para analizar cadenas de consulta URL
const fs = require('fs'); // Manejo de archivos

const guardarDatosEnArchivo = (datos) => {
    const texto = JSON.stringify(datos, null, 2); // Convertir el objeto en una cadena con formato
    fs.writeFileSync('datos.txt', texto); // Guardar en archivo
};

// Objetos 
// En el futuro se puede agregar imagen
let productos = [];


const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-red-600 p-4">
                    <div class="container mx-auto flex justify-between items-center">
                        <img class="justify-items-start w-20 h-20" src="logo.png"> 
                        <h1 class="font-mono text-center text-2xl text-stone-50">LOVE BIKES</h1>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-white">Noticias</a></li>
                            <li><a href="#" class="text-white">Tienda</a></li>
                            <li><a href="#" class="text-white">Taller</a></li>
                            <li><a href="#" class="text-white">¿Quienes somos?</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <h1 class="font-mono text-center text-4xl text-black">Tienda</h1>
                <div class="relative bg-cover" style="background-image: url('tienda.png'); height: 800px;">
                    <h1 class="absolute inset-x-0 bottom-0 h-48 font-mono text-center text-5xl font-semibold text-white">Compra y vende productos, bicicletas, etc...</h1>
                    <div class="absolute inset-x-0 bottom-0 h-48 font-mono text-center flex justify-center text-white font-semibold">
                        <button type="button">Saber mas</button>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/noticias") {
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-red-600 p-4">
                    <div class="container mx-auto flex justify-between items-center">
                        <img class="justify-items-start w-20 h-20" src="logo.png"> 
                        <h1 class="font-mono text-center text-2xl text-stone-50">LOVE BIKES</h1>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-white">Noticias</a></li>
                            <li><a href="#" class="text-white">Tienda</a></li>
                            <li><a href="#" class="text-white">Taller</a></li>
                            <li><a href="#" class="text-white">¿Quienes somos?</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <h1 class="font-mono text-center text-4xl text-black">Eventos mas Importantes</h1>
                <div class="relative bg-cover" style="background-image: url('tourfondo.png'); height: 800px;">
                    <h1 class="absolute inset-x-0 bottom-0 h-48 font-mono text-center text-5xl font-semibold text-white">El mayor exponente del ciclismo</h1>
                    <div class="absolute inset-x-0 bottom-0 h-48 font-mono text-center flex justify-center text-white font-semibold">
                        <button type="button">Saber mas</button>
                    </div>
                </div>
                <div class="relative bg-cover" style="background-image: url('vueltafondo.png'); height: 1000px;">
                    <h1 class="absolute inset-x-0 bottom-0 h-48 font-mono text-center text-5xl font-semibold text-white">La belleza de Espana</h1>
                    <div class="absolute inset-x-0 bottom-0 h-48 font-mono text-center flex justify-center text-white font-semibold">
                        <button type="button">Saber mas</button>
                    </div>
                </div>
                <div class="relative bg-cover" style="background-image: url('girofondo.png'); height: 800px;">
                    <h1 class="absolute inset-x-0 bottom-0 h-48 font-mono text-center text-5xl font-semibold text-white">La dureza de Italia</h1>
                    <div class="absolute inset-x-0 bottom-0 h-48 font-mono text-center flex justify-center text-white font-semibold">
                        <button type="button">Saber mas</button>
                    </div>
                </div> 
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/noticias/tour") {
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-amber-400 p-4">
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
                <h1 class="font-mono text-center text-4xl text-black">Tour de France</h1>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/noticias/vuelta") {
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-red-600 p-4">
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
                <h1 class="font-mono text-center text-4xl text-black">la Vuelta</h1>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/noticias/giro") {
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-pink-500 p-4">
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
                <h1 class="font-mono text-center text-4xl text-black">Giro di Italia</h1>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/tienda") {
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
                <nav class="bg-sky-900 p-4">
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
                <h1 class="font-mono text-center text-4xl text-black">Tienda</h1>
                <div class="grid grid-cols-4 justify-items-center gap-4"> `;
                for (let producto of productos) {
                    html+=
                    `<div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">${producto.marca}</div>
                        <br>
                        <div class="px-6 py-4">${producto.modelo}</div>
                        <br>
                        <div class="px-6 py-4">${producto.anio}</div>
                        <br>
                        <div class="px-6 py-4">
                            ${producto.descripcion}
                        </div>
                        <button class="bg-sky-900 hover:bg-blue-700 text-stone-50 py-2 px-4 rounded cursor-pointer mx-auto">Comprar</button>
                    </div>`;
                }
    html += `   </div>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `;
        response.write(html);
    } else if (request.url == "/tienda/vender" && request.method == "GET") {
        response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Laboratorio</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <header>
                <nav class="bg-sky-900 p-4">
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
                <h1 class="font-mono text-center text-4xl text-black"> Quiero vender mi bici </h1>
                <br>
                <div class="flex justify-center">
                    <div>
                        <form action="/tienda/vender" method="POST">
                            <label for="marca">Marca: </label>
                            <input id="marca" name="marca" class="input" type="text" placeholder="Marca">
                            <br><br>
                            <label for="modelo">Modelo: </label>
                            <input id="modelo" name-"modelo" class="input" type="text" placeholder="Modelo">
                            <br><br>
                            <label for="anio">Año: </label>
                            <input id="anio" name="anio" class="input" type="text" placeholder="Año aqui">
                            <br><br>
                            <label for="descripcion"> Descripcion: </label>
                            <textarea id=descripcion" name="descripcion" class="textarea resize" placeholder="Escribe una breve descripcion aqui"></textarea>
                            <br><br>
                            <div class="text-center">
                                <input class="bg-sky-900 hover:bg-blue-700 text-stone-50 py-2 px-4 rounded cursor-pointer mx-auto" id="registrar" name="registrar" type="submit" value="registrar">
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </body>
        </html>
        `);
        response.end();
    } else if (request.url == "/tienda/vender" && request.method == "POST") {

        const datos = [];

        request.on('data', (dato) => {
            // console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(`Datos Completos: ${datos_completos}`);

            const parsedData = querystring.parse(datos_completos);
            console.log('Datos Parseados:', parsedData);
            
            // Guardar datos en un archivo
            guardarDatosEnArchivo(parsedData);
            
            const marca = parsedData['marca'];
            const modelo = parsedData['modelo'];
            const anio = parsedData['anio'];
            const descripcion = parsedData['descripcion'];
            const registrar = parsedData['registrar'];
        
            console.log(`Marca: ${marca}`);
            console.log(`Año: ${anio}`);
            console.log(`Descripción: ${descripcion}`);
            console.log(`Registrar: ${registrar}`);
        
            response.write(`La bicicleta ${marca} del año ${anio} fue registrada con la descripción: ${descripcion}`);

            productos.push ({
                marca: marca,
                modelo: modelo,
                anio: anio,
                descripcion: descripcion
            });

            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.write(`
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
        `);
    }
});

server.listen(3000);