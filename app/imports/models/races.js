let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let racesSchema = new Schema({
  season: Number,
  round: Number,
  url: String,
  circuitId: Schema.ObjectId,
  date: Date,
  time: Date,
  result: [{
    number: {
      type: Number
    },
    position: {
      type: Number,
    },
    points: {
      type: Number,
    },
    driverId: {
      type: Schema.ObjectId
    },
    teamId: {
      type: Schema.ObjectId
    },
    grid: {
      type: String,
    },
    laps: {
      type: Number,
    },
    timeTaken: {
      type: Date,
    },
    avgSpeed: {
      type: Number
    }
  }]
})
let Races = mongoose.model('Races', racesSchema,'Races');
module.exports = Races;