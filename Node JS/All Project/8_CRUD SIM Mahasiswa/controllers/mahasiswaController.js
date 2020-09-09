const Mahasiswa = require("../models/mahasiswa");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const db = mongoose.connection;

// Tampilkan semua data Mahasiswa
exports.index = function (req, res) {
  var mahasiswa = db.collection("mahasiswas").find().toArray();
  mahasiswa.then((result) => {
    res.render("homepage.ejs", { mahasiswa: result });
  });
};

// Request POST pada mahasiswa untuk _create_
exports.mahasiswa_create_post = function (req, res) {
  var newMahasiswa = new Mahasiswa({
    nama: req.body.nama,
    email: req.body.email,
    telpon: req.body.telpon,
    kota: req.body.kota,
  });
  newMahasiswa.save((err, doc) => {
    if (err) throw err;
    res.redirect("/");
  });
};

// Request POST pada mahasiswa untuk _update_
exports.mahasiswa_update_post = function (req, res) {
  var target = { _id: ObjectID(req.params.id) };
  var newValues = {
    $set: {
      nama: req.body.nama,
      email: req.body.email,
      telpon: req.body.telpon,
      kota: req.body.kota,
    },
  };

  db.collection("mahasiswas").findOneAndUpdate(
    target,
    newValues,
    { upsert: true },
    function (err, res) {
      if (err) throw err;
    }
  );
  res.redirect("/");
};

// Request POST pada mahasiswa untuk _delete_
exports.mahasiswa_delete_post = function (req, res) {
  var target = { _id: ObjectID(req.params.id) };
  db.collection("mahasiswas").deleteOne(target);
  res.redirect("/");
};
