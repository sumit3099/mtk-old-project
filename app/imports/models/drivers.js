let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let driversSchema = new Schema({
  driverId: String,
  url: String,
  givenName: String,
  familyName: String,
  dateOfBirth: Date,
  nationality: String,
  carId: Schema.ObjectId,
})
let Drivers = mongoose.model('Drivers', driversSchema, 'Drivers');
module.exports = Drivers;
