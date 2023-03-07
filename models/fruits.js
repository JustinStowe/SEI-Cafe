const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: { type: Boolean, default: false },
  username: { type: String },
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
