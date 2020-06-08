// console.log("Hello world");
// const a = 4;
// const b = 5;
// const tot = a + b;
// console.log(tot);
let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome Back Alien!!!");
  })
  .listen(8080);

  // 8080 is the port number of my local host