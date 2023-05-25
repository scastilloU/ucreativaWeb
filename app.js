const http = require('http');

let visitorCount = 0;

const server = http.createServer((req, res) => {
  visitorCount++; // Increment the visitor count

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Visitor Count: ${visitorCount}`);
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
