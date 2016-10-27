/*eslint-env node*/

// =============================================================================
// BASE SETUP
// =============================================================================

// import modules
var express = require("express");
var app = express();

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// =============================================================================
// ROUTES FOR OUR API
// =============================================================================

// get an instance of the express Router
var router = express.Router();

// REGISTER OUR ROUTES - all of our routes will be prefixed with /api
app.use("/api/t2s", require("./routes/text2speech"));
app.use("/api/pi", require("./routes/insights.js"));

// REGISTER OUR ROUTES - all of our routes will be prefixed with /api
app.use("/api", router);

// =============================================================================
// START THE SERVER
// =============================================================================

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
var server = app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// =============================================================================
// EXPORT THE SERVER
// =============================================================================

// export 'server' so that we can test it and invoke 'server.close()'
// 'app' object does not expose .close() method.  Only app.listen() returns
// a handle for .close().  It is crutial to invoke server.close() after
// gulp test execution is done to properly terminate gulp run.
exports = module.exports = server;