require('isomorphic-fetch');
const express = require('express');
const app = express();
var fs = require("fs");
const http = require('http');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
// declare axios for making http requests
var url = "mongodb://localhost:27017/";
/* GET api listing. */
app.get('/', (req, res) => {
    res.send('api works');
});


app.get('/posts', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    // fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //     .then(posts => {
    //         posts.json().then(data => {
    //                 console.log(data);
    //                 res.send(data);
    //             })
    // console.log(posts);
    // res.status(200).json(posts.data)
    //     .then(res => { console.log(res) }); 
    contents = fs.readFileSync("news.json");
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent);
});

app.post('/posts', (req, res) => {
    console.log('abc');
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("mydb");
        var myobj = {
            author: "Sumit",
            title: "F2 news: Ferrari chi ef Sergio Marchionne offers honest verdict on Kimi Raikkonen ",
            description: "Raikkonen1 linked up with the Italian constructors again three years ago following stints in the World Rally Championship,NASCAR and Lotus F1 team.And this year he ended the season fourth in the drivers’ standings having secured seven podium finishes in 20 races.Raikkonen is yet to win a grand prix since he returned to F1 though and secured just one pole in qualifying in 2017. ",
            url: "In progress1 ",
            urlToImage: ". /Images/f1news1.jpg ",
            publishedAt: "2017-12-21T14:40:11Z1 "
        }

        dbase.collection("news").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    // fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //     .then(posts => {
    //         posts.json().then(data => {
    //                 console.log(data);
    //                 res.send(data);
    //             })
    // console.log(posts);
    // res.status(200).json(posts.data)
    //     .then(res => { console.log(res) }); 
    console.log(req.body.title1);
    contents = fs.readFileSync("news.json");
    var jsonContent = JSON.parse(contents);
    res.send(jsonContent);
});





module.exports = app;