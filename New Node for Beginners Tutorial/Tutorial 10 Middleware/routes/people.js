// This is the route
const express = require("express");
const route = express.Router();
// this is my own middle ware which runs first
route.use((req, res, next) => {
  console.log(" this is my middle ware ");
  next();
});

route.get("/", (req, res) => {
  res.send("this is inside / ");
});

route.get("/example", (req, res) => {
  res.send("this is inside /example ");
});
module.exports = route;
