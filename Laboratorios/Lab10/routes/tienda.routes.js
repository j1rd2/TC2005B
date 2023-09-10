const express = require('express');

const router = express.Router();

const fs = require('fs');

let productos = []; // Arreglo de productos

router.get('/tienda', (request, response, next) => {
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
    response.send(html);
})

router.get('/tienda/vender', (request, response, next) => {
    const html = `
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
                            <input id="modelo" name="modelo" class="input" type="text" placeholder="Modelo">
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
        `;
    response.send(html);
});

router.post('/tienda/vender', (request, response, next) => {
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
});

module.exports = router;