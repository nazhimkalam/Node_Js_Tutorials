// SERVING STATIC FILES WITH HTTP AND FILE SYSTEM MODULES
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/image") {
    const readStream = fs.createReadStream("./static/index.JPG");
    res.writeHead(200, { "Content-type": "image/jpg" });
    readStream.pipe(res);
  } else if (req.url === "/html") {
    const readStream = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    readStream.pipe(res);
  } else if (req.url === "/json") {
    const readStream = fs.createReadStream("./static/index.json");
    res.writeHead(200, { "Content-type": "application/json" });
    readStream.pipe(res);
  }
});

server.listen(8800);
