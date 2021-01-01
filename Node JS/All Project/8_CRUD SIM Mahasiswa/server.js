const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://rest:Alhamdulillah29%23@cluster0.6ddyk.mongodb.net/<dbname>?retryWrites=true&w=majority";
const db = mongoose.connection;

const indexRouter = require("./routes/mahasiswaRoute");

const app = express();

// Connect to Database
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(5000, () => {
  console.log("listen on http://localhost:5000");
});
