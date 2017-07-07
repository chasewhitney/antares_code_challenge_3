var express = require("express");
var router = express.Router();
var pg = require("pg");

var config = {
  database: "antares", // name of your database
  host: "localhost", //where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 //30 seconds to connect
};

var pool = new pg.Pool(config);

// GET /treats
router.get('/', function (req, res) {
  pool.connect(function (err, db, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {
      /** ---- YOUR CODE BELOW ---- **/
      // Add code here to get treats from the treatDB

    } // end no error
  }); // end pool connect
}); // end get /treats

/** ---- YOUR CODE BELOW ---- **/

// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>

/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
