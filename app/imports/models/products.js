let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  price: Number,
  size: [String],
  imageUrl: String,
  description: String,
})
let Products = mongoose.model('Products', productSchema,'Products');
module.exports = Products;
