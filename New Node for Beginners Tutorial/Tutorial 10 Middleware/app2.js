// Working with express route

// The use of route makes the code cleaner and easier to understand
const express = require("express");
const app = express();
const people = require("./routes/people");
app.use("/people", people);   // we are using the router
app.listen(1122);

// accessing using people 
// localhost:1122/people
// localhost:1122/people/example

// use() means to use without getting the url from the client and get() is the other way around