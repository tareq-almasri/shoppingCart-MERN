const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    img: String,
    quantity: Number,
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

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
