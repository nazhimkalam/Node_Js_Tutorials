// In node we have a module called 'http' to build a web server by listening on a given port
// Depending on the request given by the Client / User we can send the response

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("HelloWorld");
    res.end();
  }

  if (req.url === "/IIT/Student/Nazhim") {
    res.write("Name: Nazhim Kalam");
    res.write("\n");
    res.write("Scores:" + JSON.stringify([90, 91, 96, 100]));
    res.end();
  }
});

server.listen(6969); // port number
console.log("running......");

// in this lecture we have use the parameter way not the query way
// for the query way check teluskos tutorials by Me
