const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Hello World 123' );
});
console.log(process.env.PORT);
const port = process.env.PORT || 1337;

server.listen(port);
console.log('server running at port ' , port);
