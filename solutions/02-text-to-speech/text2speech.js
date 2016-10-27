'use strict';

//
// Module dependencies
//
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  watson = require('../helpers/watson');

//
// Private Variables & Functions
//
console.log("setting up text2speech module");

router.route('/')
  .post(
    // handle JSON body
    bodyParser.json(),
    // handler
    function (req, res) {
      console.log(">> text to speech api invoked");

      // get a reference to the json in request body
      var reqBodyJSON = req.body;
      console.log("text:", reqBodyJSON.text);
      console.log("voice:", reqBodyJSON.voice);

      // perform payload validation
      if (
        !reqBodyJSON.text || typeof reqBodyJSON.text == "undefined" ||
        !reqBodyJSON.voice || typeof reqBodyJSON.voice == "undefined"
        ) {
        res.status(500).send('Invalid JSON request.  Missing required fields');
        return;
      }

      watson.getSynthesizeSpeech(reqBodyJSON.text, reqBodyJSON.voice).then(
        // success handler
        function(result) {
          res.json(result);
        },
        // error handler
        function(er) {
          res.status(404).send(er);
        }
      );

    }
  );

//
// Module Exports
//
module.exports = router;