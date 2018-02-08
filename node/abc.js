// console.log("heelo");
// var http = require("http");
// http.createServer(function(request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

//read//
// var fs = require("fs");
// console.log("\n *START* \n");
// var content = fs.readFileSync("dummy.txt");
// console.log("Output Content : \n" + content);
// console.log("\n *EXIT* \n");
//////////read+write////////////

// var fs = require("fs");
// console.log("\n *STARTING* \n");
// // Get content from file
// var contents = fs.readFileSync("dummy.json");
// // Define to JSON type
// var jsonContent = JSON.parse(contents);
// // Get Value from JSON
// jsonContent.key2 = '...abc...';
// //define another key value
// jsonContent[key3] = '...xyz...';
// console.log("User Name:", jsonContent.username);
// console.log("Email:", jsonContent.email);
// console.log("Password:", jsonContent.password);
// console.log("\n *EXIT* \n");
//  fs.writeFile('myjsonfile.json', json);


//////write/////

// var fs = require("fs");
// fs.readFile('dummy.json', 'utf8', function readFileCallback(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         obj = JSON.parse(data); //now it an object
//         obj.table.push({ id: 7, square: 7 }); //add some data
//         json = JSON.stringify(obj); //convert it back to json
//         fs.writeFile('dummy.json', json, 'utf8', function(err) {
//             if (err) throw err;
//             console.log('complete');
//         }); // write it back 
//     }
// });




// var fs = require("fs");
// console.log("\n *STARTING* \n");
// // // Get content from file
// var contents = fs.readFileSync("dummy.json");
// var jsonContent = JSON.parse(contents);
// delete jsonContent.table['7'];



/////////read +update+ write+delete ///////
var fs = require("fs");
var fileName = './news.json';
var file = require(fileName);
contents = fs.readFileSync("news.json");
var jsonContent = JSON.parse(contents);
console.log(jsonContent.news[0].description);
//jsonContent.table[0].username = "xyz";
//delete jsonContent.table[0].username;

fs.writeFile(fileName, JSON.stringify(jsonContent), function(err, res) {
    // if (err) return console.log(err);
    // console.log(err);

    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
});


////