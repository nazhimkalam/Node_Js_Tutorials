// Handling an http post request using express
// This is typically used for forms

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static"))); // we are making an alias for the name 'staticFolder' therefore the client won't be able to see the folder name for security reasons
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "html/index.html"));
});

app.post("/SignForm", (req, res) => {   // the '/SignForm' url is the action route present in the html page
  console.log(req.body);
  // database work here to be done
  res.send(`
    Successfully data sent <br> 
    Your email is ${req.body.email} <br>
    Your password is ${req.body.password} <br>
  `);
});
app.listen(9999);
