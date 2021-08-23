const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    minLength: [3, "Product title should be atleast 3 characters long"],
  },
  price: { type: String, required: true },
  description: { type: String, required: false },
});
module.exports = mongoose.model("Product", ProductSchema);
