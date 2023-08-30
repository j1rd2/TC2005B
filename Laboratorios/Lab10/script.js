// Creamos un servidor

const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("hola desde node!");
    response.end();
});

server.listen(3000);