const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// CONNETC TO DB
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose
  .connect(process.env.DB_CONNECTION, options)
  .then(() => console.log("DB connected"));

// How do we start listening to the server
app.listen(3000);
