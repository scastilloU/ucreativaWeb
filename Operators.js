const http = require('http');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  // Declaración de variables
  let nombre = 'Juan'; // Variable de tipo string
  let edad = 30; // Variable de tipo number
  let esMayorDeEdad = true; // Variable de tipo boolean

  // Operaciones con variables
  let suma = 10 + 5;
  let resta = 20 - 8;
  let multiplicacion = 6 * 4;
  let division = 15 / 3;
  let modulo = 17 % 4;

  // Configuración de la respuesta HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Envío de los resultados como respuesta
  res.end(`
    Nombre: ${nombre}
    Edad: ${edad}
    Es mayor de edad: ${esMayorDeEdad}
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multiplicacion}
    División: ${division}
    Módulo: ${modulo}
  `);
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
