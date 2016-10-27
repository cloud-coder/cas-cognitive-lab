'use strict';

  //
  // Module dependencies
  //
  var express = require('express'),
  router = express.Router(),
  bodyParser = require("body-parser"),
  watson = require('../helpers/watson');

  //
  // Private Variables & Functions
  //
  console.log("setting up insights module");

  router.route('/')
  .post(
      // handle JSON body
      bodyParser.json(),
      // handler
      function (req, res) {
      console.log(">> personality insight api invoked");

      // get a reference to the json in request body
      var reqBodyJSON = req.body;
      console.log("text:", reqBodyJSON.text);

      // perform payload validation
      if (!reqBodyJSON.text || typeof reqBodyJSON.text == "undefined") {
          res.status(500).send('Invalid JSON request.  Missing required fields');
          return;
      }

      watson.getPersonalityInsights(reqBodyJSON.text).then(
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