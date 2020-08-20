const express = require("express");
const app = express();

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// ROUTES
app.get("/", (req, res) => {
  res.render("index", { token: transactionToken });
});
app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(3000);

const midtransClient = require("midtrans-client");
let snap = new midtransClient.Snap({
  isProduction: true,
  serverKey: "Mid-server-m5rnXnV2muAOFm36oxfulrBN",
});
var randomOverZero = function (pow) {
  return Math.random() * pow;
};
var orderID = Math.floor(randomOverZero(1000000));

let parameter = {
  transaction_details: {
    order_id: `LANDINGPAGE-${orderID}`,
    gross_amount: 100000,
  },
  credit_card: {
    secure: true,
  },
  customer_details: {
    first_name: "",
    last_name: "",
    email: "budi.pra@example.com",
    phone: "08111222333",
  },
};
const transactionToken = snap
  .createTransaction(parameter)
  .then((transaction) => {
    let transactionToken = transaction.token;
    return transactionToken;
  });
