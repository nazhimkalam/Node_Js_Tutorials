//   GETTING STARTED WITH EXPRESS WEB FRAMEWORKS... ( ''express'' is a frame-work used in java ).
const express = require("express"); // this returns an ''express()'' object which has methods to be implemented
const app = express();

// using the '/' means that the default localhost:portNumber address
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/example", (req, res) => {
  res.send("You are inside the example");
});

// Parameters are of 2 types:
//      > ROUTE PARAMS: this is used when its mandatory to fill a parameter.
//      > QUERY PARAMS: this is used to get optional data from client as parameters which is not compulsory.

// // getting data from user using 'route params' ( using :paramterName )
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params); //use this to get the data from the user or client
  res.send(`Name: ${req.params.name} <br/> Age: ${req.params.age}`);
});

// 'Query String Parameters'  (use name value pair ''name = value'' )
// Syntax "?name=value&name=value"  use '&' sign for more than one query paramter
// Note that all the values in query are converted to a STRING directly.

app.get("/example/:name/:age", (req, res) => {
  // req is used to get the data from the client or user
  console.log(req.params);
  console.log(req.query);
  res.send(
    `Name: ${req.params.name} <br/> Age: ${req.params.age}<br/> Optional data entered: ${req.query.lastName}, ${req.query.stdID}`
  );
});

app.listen(1212);
