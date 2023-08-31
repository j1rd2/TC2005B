const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
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
                            <li><a href="#" class="text-white">Home</a></li>
                            <li><a href="#" class="text-white">About</a></li>
                            <li><a href="#" class="text-white">Services</a></li>
                            <li><a href="#" class="text-white">Contact</a></li>
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
    } else if (request.url == "/tour") {
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
    } else if (request.url == "/vuelta") {
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
    } else if (request.url == "/giro") {
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