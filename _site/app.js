var express = require("express");
var app = express();

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

app.use(express.static(process.env.PWD + '/_site'));

// Set up a URL route
/*
app.get("/", function(req, res) {
 res.send("Heroku Demo!");
});
*/

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
