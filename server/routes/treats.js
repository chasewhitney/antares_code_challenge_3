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

      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'SELECT * FROM "treats"';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText, function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          // console.log(result);
          // Send back the results
          res.send(result.rows);
        }
      }); // end query

    } // end no error
  }); // end pool connect
}); // end get /treats

/** ---- YOUR CODE BELOW ---- **/

// POST /treats

router.post('/', function (req, res) {
  var treat = req.body;
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

      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'INSERT INTO "treats"(name, description, pic) VALUES ($1, $2, $3);';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText,[treat.name, treat.description, treat.pic], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          // console.log(result);
          // Send back the results
          res.sendStatus(201);
        }
      }); // end query

    } // end no error
  }); // end pool connect
}); // end post /treats

// PUT /treats/<id>

router.put('/:id', function (req, res) {
  var treat = req.body;
  var treatId = req.params.id;
  console.log(treat);
  console.log(treatId);
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

      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'UPDATE treats SET name = $1, description = $2, pic = $3 WHERE id = $4;';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText,[treat.name, treat.description, treat.pic, treatId], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          //console.log(result);
          // Send back the results
          res.sendStatus(201);
        }
      }); // end query

    } // end no error
  }); // end pool connect
}); // end put /treats




// DELETE /treats/<id>

router.delete('/:id', function (req, res) {
  var treat = req.params.id;
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

      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'DELETE from treats WHERE id = $1;';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText,[treat], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          //console.log(result);
          // Send back the results
          res.sendStatus(201);
        }
      }); // end query

    } // end no error
  }); // end pool connect
}); // end delete /treats

/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
