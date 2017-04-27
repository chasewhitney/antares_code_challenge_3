// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var pg = require( 'pg' );
var port = 5000;

var config = {
  database: "treatsDB", // name of your database
  host: "localhost", //where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 //30 seconds to connect
};

var pool = new pg.Pool(config);

// uses
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen(port, function (req, res) {
  console.log('Now listening on:', port);
  console.log('Go to localhost:5000 to see site.');
  console.log('Ctrl+C shuts down server.');
});

// base url
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', '/views', 'index.html'));
});

// GET /treats
app.get('/treats', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    } // end error
    else{
      /** ---- YOUR CODE BELOW ---- **/
      // Add code here to get treats from the treatDB
    } // end no error
  }); // end pool connect
}); // end get /treats

/** ---- YOUR CODE BELOW ---- **/

// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>
