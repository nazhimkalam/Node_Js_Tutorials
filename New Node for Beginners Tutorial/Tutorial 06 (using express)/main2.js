// SERVING STATIC FILES WITH EXPRESS
const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "staticFolder"))); // we are making an alias for the name 'staticFolder' therefore the client won't be able to see the folder name for security reasons
app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "staticFolder", "html/index.html"));
    // res.sendFile(path.join(__dirname, "staticFolder", "index.jpg"));
    // res.sendFile(path.join(__dirname, "staticFolder", "index.json"));
  })
.listen(3030);
