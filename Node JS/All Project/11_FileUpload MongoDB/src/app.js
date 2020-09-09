const express = require("express");
const initRoutes = require("./routes/web");
const app = express();

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost: ${port}`);
});
