const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
var mongoDB =
  "mongodb+srv://rest:Alhamdulillah29%23@cluster0.6ddyk.mongodb.net/<dbname>?retryWrites=true&w=majority";

var db = mongoose.connection;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connection Successful!");
});

var schema = mongoose.Schema({
  name: String,
  quote: String,
});

var Model = mongoose.model("model", schema, "star-wars-quotes");

schema.virtual("url").get(function () {
  return "/" + this._id;
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("listening on 3000");
});

// GET all quotes
app.get("/", function (req, res) {
  var cursor = db.collection("star-wars-quotes").find().toArray();
  cursor.then((result) => {
    res.render("index.ejs", { quotes: result });
  });
});

// create post
app.post("/quotes", (req, res) => {
  var newQuote = new Model({
    name: req.body.name,
    quote: req.body.quote,
  });
  newQuote.save((err, doc) => {
    if (err) return err;
    res.redirect("/");
  });
});

// update GET
app.get("/:id/update", (req, res) => {
  var cursor = db
    .collection("star-wars-quotes")
    .findOne({ _id: ObjectID(req.params.id) });
  cursor.then((result) => {
    res.render("update.ejs", { quotes: result });
  });
});

// update POST
app.post("/:id/update", (req, res) => {
  var myquery = { _id: ObjectID(req.params.id) };
  var newvalues = {
    $set: { name: req.body.name, quote: req.body.quote },
  };

  db.collection("star-wars-quotes").findOneAndUpdate(
    myquery,
    newvalues,
    { upsert: true },
    function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    }
  );
  res.redirect("/");
});

// delete GET
app.get("/:id/delete", (req, res) => {
  var cursor = db
    .collection("star-wars-quotes")
    .findOne({ _id: ObjectID(req.params.id) });
  cursor.then((result) => {
    res.render("delete.ejs", { quotes: result });
  });
});

// delete POST
app.post("/:id/delete", (req, res) => {
  var myquery = { _id: ObjectID(req.params.id) };
  db.collection("star-wars-quotes").remove(myquery, function (err, res) {
    if (err) return err;
    console.log("Deleted " + req.body.name + " quote");
  });
  res.redirect("/");
});
