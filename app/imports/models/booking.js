let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookingSchema = new Schema({
  userId: Schema.ObjectId,
  eventType: {
    type: String,
    enum: ['race', 'meetup']
  },
  venue: String,
  time: Date,
  seatNo: String,
});
let Bookings = mongoose.model('Bookings', bookingSchema,'Bookings');
module.exports = Bookings;
