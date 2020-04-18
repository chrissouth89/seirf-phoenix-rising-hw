const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
  name: { type: String, required: true },
  species: String,
  breed: String,
  image: { type: String, default: "https://loremflickr.com/240/120" },
  age: Number,
  adopted: { type: Boolean, default: false },
  personalityTraits: [{ type: String }],
});

module.exports = mongoose.model("Animal", animalSchema);