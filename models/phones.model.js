const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
  {
    img: String,
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

const Phone = mongoose.model("phone", phoneSchema);

module.exports = Phone;
