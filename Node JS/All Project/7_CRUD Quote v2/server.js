const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://rest:Alhamdulillah29%23@cluster0.6ddyk.mongodb.net/<dbname>?retryWrites=true&w=majority";
const db = mongoose.connection;

const indexRouter = require("./routes/quoteRoute");

// Connect to Database
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("listening on 3000");
});

module.exports = app;
