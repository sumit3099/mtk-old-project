let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let usersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: Number,
  dob: Date,
  profilePicUrl: String,
  country: String,
  gender: String,
  password: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  security: {
    question: {
      type: String,
    },
    answer: {
      type: String,
    }
  },
  subscribed: Boolean,
});
let Users = mongoose.model('Users', usersSchema, 'Users');
module.exports = Users;
