// User input validation with Express using JOI
// JOI is basically a blueprint for validating the input from the client/user/req side

// Handling an http post request using express
// This is typically used for forms

const express = require("express");
const path = require("path");
const joi = require("joi");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static"))); // we are making an alias for the name 'staticFolder' therefore the client won't be able to see the folder name for security reasons
app.use(bodyParser.urlencoded({ extended: false }));   // this is function is the "Middle ware"

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/SignForm", (req, res) => {
  // the '/SignForm' url is the action route present in the html page
  console.log(req.body);

  // Validations
  const schema = joi.object().keys({
    // this 'schema' is the validation to be checked
    email: joi.string().trim().email().required(),
    password: joi.string().min(5).max(15).required(),
  });

  joi.validate(req.body, schema, (err, result) => {
    if (err) {
      res.send("Error Occurred ! :-/ ");
      console.log(err); // displays what the error is in the terminal or console of the web browser
    } else {
      res.send("Successfully send !!! :-) ");
      console.log(result);
    }
  });
  // You can have some database work here to store the data or further validation with the database emails and passwords
});
app.listen(1001);
