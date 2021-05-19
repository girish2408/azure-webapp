const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Hello World');
});
console.log(process.env.port);
const port = process.env.port || 1337;

server.listen(port);
console.log('server running at port ' , port);
