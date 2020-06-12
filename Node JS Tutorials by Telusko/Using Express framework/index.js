const express = require("express");
const app = express();

// NOTE: (req = request, res = resolve)
//      we use req from client to server data transfer
//      we use res from server to client data transfer

// I am creating a localhost of port 9000
//since the user is searching for localhost:9000 url data "res" is used to send data to client

app.get("/", (req, res) => {
  res.send("Hello World");
}); // the "/" refers to the current URL in the with no parameters or queries

// // lets check how paramter URL works in order to send data to user
// // if user searches for localhost:9000/Nazhim
// // I will display that this is Nazhim here
app.get("/nazhim", (req, res) => {
  res.send("Hello Nazhim Kalam");
});

// app.get("/nazhim/01", (req, res) => {
//   res.send("This is the one and only Nazhim");
// });

// // working with a multiple number of parameters such as (10,11,12,13,14...)
// // we can use dynamic url using id and use if conditions
// // Say if 10 belongs to 'Nazhim' and 11 belongs 'Hashim' etc..

app.get("/nazhim/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hey Nazhim" + id);
});

// How queries URL works in order to send data to the user
// example: localhost:9000?id=20
app.get("/nazhim", (req, res) => {
  const iid = req.query.id;
  res.send("We are using Query method in the url now " + iid);
});

app.listen(8080,"localhost",()=>{
    console.log('Running')
});
