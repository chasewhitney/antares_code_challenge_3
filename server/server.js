// requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var treats = require('./routes/treats');
var port = 5000;

// middleware
app.use( bodyParser.urlencoded( { extended: true } ) );

// Treats routes
app.use("/treats", treats);

// static files
app.get('/*', function (req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

// spin up server
app.listen(port, function (req, res) {
  console.log('Now listening on:', port);
});
