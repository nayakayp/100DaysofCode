const Quote = require("../models/quotes");
const mongoose = require("mongoose");
const { ObjectID, ReplSet } = require("mongodb");
const db = mongoose.connection;

// Display all quotes in Homepage
exports.index = function (req, res) {
  var quotes = db.collection("quotes").find().toArray();
  quotes.then((result) => {
    res.render("home.ejs", { quotes: result });
  });
};

// Display Quote _ceate_ form on GET
exports.quote_create_get = function (req, res) {
  res.render("create.ejs");
};

// Handle Quote _create_ on POST
exports.quote_create_post = function (req, res) {
  var newQuote = new Quote({
    name: req.body.name,
    quote: req.body.quote,
  });
  newQuote.save((err, doc) => {
    if (err) return err;
    res.redirect("/");
  });
};

// Display Quote _update_ form on GET
exports.quote_update_get = function (req, res) {
  var quotes = db
    .collection("quotes")
    .findOne({ _id: ObjectID(req.params.id) });
  quotes.then((result) => {
    res.render("update.ejs", { quote: result });
  });
};

// Handle Quote _update_ on POST
exports.quote_update_post = function (req, res) {
  var target = { _id: ObjectID(req.params.id) };
  var newValues = { $set: { name: req.body.name, quote: req.body.quote } };

  db.collection("quotes").findOneAndUpdate(
    target,
    newValues,
    { upsert: true },
    function (err, res) {
      if (err) return err;
      console.log("Document updated");
    }
  );
  res.redirect("/");
};

// Display Quote delete_ form on GET (Not using this because we're using modal)
exports.quote_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Product delete GET");
};

// Handle Quote delete_ on POST
exports.quote_delete_post = function (req, res) {
  var target = { _id: ObjectID(req.params.id) };
  db.collection("quotes").deleteOne(target);
  res.redirect("/");
};
