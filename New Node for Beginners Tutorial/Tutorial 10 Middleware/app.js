// Middle ware is the code which gets executed in between the user request and the server response.
// Previously we have used the bodyparser which is a "Middle-ware"

//Middleware functions are functions that have access to the request object ( req ), the response object ( res ),
//and the next function in the application's request-response cycle.

//The next function is a function in the Express router which, when invoked, executes the
// middleware succeeding the current middleware

// this is a middle ware function (req, res, next) due to the "next" attribute which is a callback function

//  The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.

const express = require("express");

const app = express();

app.use((req, res, next) => {       // app.use('/example',(req, res, next))
  console.log(req.url, req.method);
  req.banana = "banana";
  next();                           // this is used because this middle ware runs first and then to run the others such as get() we have to say next()
});

app.get("/", (req, res) => {
  res.send("Middleware");
  console.log(req.banana);
});
app.listen(1000);
