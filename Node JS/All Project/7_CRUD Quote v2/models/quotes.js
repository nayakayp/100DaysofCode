const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true },
});

module.exports = mongoose.model("Quote", QuoteSchema);
