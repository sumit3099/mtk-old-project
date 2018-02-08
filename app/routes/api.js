const express = require('express');
const app = express();
var fs = require("fs");
const Users = require('../imports/models/users');
const UpcomingEvents = require('../imports/models/upcomingEvents');
const upRaces = require("../imports/models/upcomingRaces");
const circuits = require('../imports/models/circuits');
const DriverStandings = require('../imports/models/driverStandings');
const TeamStandings = require('../imports/models/teamStandings');
const Drivers = require("../imports/models/drivers");
const Races = require("../imports/models/races");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('api works');
});
app.get('/posts', (req, res) => {
    contents = fs.readFileSync("app/files/news.json");
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent);
});
app.get('/races', (req, res) => {
    contents = fs.readFileSync("app/files/races.json");
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent);
});
app.post('/login', (req, res) => {
    let result = Users.findOne({
        "email": req.body.data.email
    }, {
        '_id': false,
        name: true,
        'points': true,
        profilePicUrl: true,
        country: true,
        gender: true,
        dob: true,
        email: true
    }, (err, resp) => {
        console.log(resp);
        if (err) {
            res.send({
                data: ""
            });
        }

        res.send({
            data: resp
        })
    })
});
app.get('/leaderboard', (req, res) => {
    let result = Users.find({}, {
        '_id': false,
        name: true,
        'points': true,
        profilePicUrl: true,
        country: true,
        gender: true,
        dob: true,
        email: true
    }).sort({
        'points': -1
    }).limit(10);
    result.exec((err, resp) => {
        if (err) {
            res.send({
                data: ""
            });
        }
        res.send({
            data: resp
        })
    })
});

app.get('/drivers', (req, res) => {
    let result = Drivers.find({}, {});
    result.exec((err, resp) => {
        if (err) {
            res.send({
                data: ""
            });
        }
        res.send({
            data: resp
        })
    })
});

app.get('/upcoming_races', (req, res) => {
    upRaces.find({}, (err, response) => {
        res.send(response);
    })
});

app.get('/upcoming-events', (req, res) => {
    UpcomingEvents.find({}, (err, data) => {
        res.send({
            data: data
        });
    })
});


app.get('/circuits', (req, res) => {
    circuits.find({}, (err, data) => {
        res.send({
            data: data
        });
    })
});

app.get('/driver-standings', (req, res) => {
    DriverStandings.find({}, (err, data) => {
        res.send({
            data: data
        });
    })
});

app.get('/team-standings', (req, res) => {
    TeamStandings.find({}, (err, data) => {
        res.send({
            data: data
        });
    })
});

app.get('/circuits/circuit-details', (req, res) => {
    let circuitId = req.param('circuitId');

    circuits.find({ "circuitId": circuitId }, (err, data) => {
        res.send({
            data: data
        });
    })
});

app.get('/driver_detail', (req, res) => {


    Races.find({}, (err, data) => {

        res.send({
            data: data
        });
    })
});
module.exports = app;