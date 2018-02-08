var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;

// });

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb");
    //  var myobj = { name: "Company Inc2", address: "Highway 39" };
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }
    ];



    dbase.createCollection("news", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });

    // dbase.collection("customers").insertMany(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });


    // dbase.collection("customers").findOne({}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result.name);
    //     db.close();
    // });

    // dbase.collection("customers").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });


    // problem
    // dbase.collection("customers").find({}, { _id: 1 }).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    dbase.dropCollection("customers", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });


    //console.log(await dbase.collection("customers").find({}, { _id: 1 }).toArray());
    // dbase.collection("customers").find({}, { _id: false, name: false, address: false }).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result[2].address);
    //     db.close();
    // });

    // var query = { address: "Park Lane 38" };
    // dbase.collection("customers").find(query).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });


    // var query = { address: /^S/ };
    // dbase.collection("customers").find(query).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });


    // var mysort = { name: 1 };
    // dbase.collection("customers").find().sort(mysort).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var myquery = { address: 'Mountain 21' };
    // dbase.collection("customers").deleteOne(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted");
    //     db.close();
    // });

    // var myquery = { address: /^O/ };
    // dbase.collection("customers").deleteMany(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log(obj.result.n + " document(s) deleted");
    //     db.close();
    // });

});