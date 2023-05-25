const http = require('http');

const server = http.createServer((req, res) => {
  // Manejar las solicitudes entrantes
  if (req.url === '/') {
    // Si la URL es "/", responder con "¡Hola, mundo!"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, mundo!');
  } else if (req.url === '/about') {
    // Si la URL es "/about", responder con información sobre el servidor
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Este es un servidor Node.js.');
  } else {
    // Si la URL no coincide con ninguna ruta definida, responder con un código de estado 404 (No encontrado)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 8989;

server.listen(port, () => {
  console.log(`El servidor está en funcionamiento en http://localhost:${port}/`);
});
