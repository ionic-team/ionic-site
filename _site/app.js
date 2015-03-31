var express = require("express"),
  app = express(),
  url = require('url');

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

/*
app.use(function(req,res,next) {
  var parts = url.parse(req.url);

  if(parts.path.indexOf('/blog/') == 0) {
    res.redirect(301, 'http://blog.ionic.io/' + req.url.replace(/^\/blog\//, ''));
  } else {
    next();
  }
});
*/

app.use(express.static(process.env.PWD + '/_site'));


// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
