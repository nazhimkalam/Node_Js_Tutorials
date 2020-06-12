// write JavaScript that emits the HTML you want  ( dynamic population of web pages )
// <% means we are running javascript code in html code
// <%= means we are outputting data to the html code
// extension is .ejs

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
// if you name a folder called 'views' it's like the default folder that it checks for
app.get("/:userQuery", (req, res) => {
  res.render("index", {
    data: {
      userQuery: req.params.userQuery,
      searchResult: ["iphoneX", "iphoneXR", "iphone13", "iphone20"],
      loggedIn: true,
      username: "Nazhimkalam",
    },
  }); // it becomes index.ejs automatically cuz we set it to ejs "app.set("view engine", "ejs");"
});

app.listen(1234);
