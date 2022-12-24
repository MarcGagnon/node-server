const http = require('http')
const fs = require('fs')

const reqListener = (req, res) => {
    const url = req.url;

    if (url === "/"){
      res.writeHead(200, { 'content-type': 'text/html' });
      fs.createReadStream('index.html').pipe(res);
      console.log(`Current path : ${url}`);
    } else if (url === "/about") {
      res.writeHead(200, { 'content-type': 'text/html' })
      fs.createReadStream('about.html').pipe(res)
      console.log(`Current path : ${url}`);
    } else {
      res.writeHead(404, { 'content-type': 'text/html' })
      fs.createReadStream('404.html').pipe(res)
      console.log(`Current path : ${url} (404)`);
    }
  }

const server = http.createServer(reqListener);

const PORT = 3021;
server.listen(PORT);
console.log(`The server is listening on port ${PORT}... Ctrl+C to stop.`);