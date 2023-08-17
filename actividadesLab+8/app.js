
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
    response.setHeader('Content-Type', 'text/html')
    response.write("Hola desde node");
    response.end();

});

server.listen(3000); // listen the request