var express = require("express"),
  app = express(),
  url = require('url');

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

app.use(function(req,res,next) {
  var parts = url.parse(req.url);

  if(parts.path.indexOf('/blog/') == 0) {
    res.redirect(301, 'http://blog.ionic.io/' + req.url.replace(/^\/blog\//, ''));
  } else if(parts.path.indexOf('/creator/') == 0) {
  	res.redirect(301, 'https://creator.ionic.io/' + req.url.replace(/^\/creator\//, ''))
  } else {
    next();
  }

});

function wwwRedirect(req, res, next) {
    if (req.headers.host.slice(0, 4) === 'www.') {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
};
app.set('trust proxy', true);
app.use(wwwRedirect);

app.use(express.static(process.env.PWD + '/_site'));


// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
