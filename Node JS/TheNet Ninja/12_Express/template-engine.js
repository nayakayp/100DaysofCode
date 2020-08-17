// // PART 1
// var express = require("express");
// var app = express();

// app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/contact", function (req, res) {
//   res.sendFile(__dirname + "/contact.html");
// });
// app.get("/profile/:name", function (req, res) {
//   var data = {
//     age: 29,
//     job: "ninja",
//   };
//   res.render("profile", { person: req.params.name, data: data });
// });
// app.listen(3000);

// // PART 2
// var express = require("express");
// var app = express();

// app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/contact", function (req, res) {
//   res.sendFile(__dirname + "/contact.html");
// });
// app.get("/profile/:name", function (req, res) {
//   var data = {
//     age: 29,
//     job: "ninja",
//     hobbies: ["eating", "fighting", "fishing"],
//   };
//   res.render("profile", { person: req.params.name, data: data });
// });
// app.listen(3000);

// // USING PARTIAL TEMPLATES
// var express = require("express");
// var app = express();

// app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   res.render("index");
// });
// app.get("/contact", function (req, res) {
//   res.render("contact");
// });
// app.get("/profile/:name", function (req, res) {
//   var data = {
//     age: 29,
//     job: "ninja",
//     hobbies: ["eating", "fighting", "fishing"],
//   };
//   res.render("profile", { person: req.params.name, data: data });
// });
// app.listen(3000);

// Middleware & Static Files
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("stuff"));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/profile/:name", function (req, res) {
  var data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data: data });
});
app.listen(3000);
