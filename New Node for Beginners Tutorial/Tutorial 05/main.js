// Creating( HTTP server using HTTP module)
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Nazhim Kalam");
  } else if (req.url === "/Nazhim") {
    res.write("You are inside... a param");
  } else {
    res.write("else part");
  }
  res.end();
});
server.listen("1234");
