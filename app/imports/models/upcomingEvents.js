let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let upcomingEventsSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    time: Date,
    location: {
        locality: {
            type: String
        },
        country: {
            type: String,
        },
        lat: {
            type: String
        },
        long: {
            type: String
        }
    }
});
let UpcomingEvents = mongoose.model('UpcomingEvents', upcomingEventsSchema, 'UpcomingEvents');
module.exports = UpcomingEvents;