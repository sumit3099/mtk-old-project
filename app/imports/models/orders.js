let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ordersSchema = new Schema({
  userId: Schema.ObjectId,
  productId: Schema.ObjectId,
  quantity: Number,
  sellingPrice: Number,
  deliveryAddress: String
})
let Orders = mongoose.model('Orders', ordersSchema,'Orders');
module.exports = Orders;
