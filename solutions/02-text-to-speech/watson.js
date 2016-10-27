'use strict';

  ////
  // Text to Speech Watson API: https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/?node#synthesize audio
  // Personality Insights Watson API: https://www.ibm.com/watson/developercloud/personality-insights/api/v2/

  //
  // Module dependencies
  //
  var watson = require('watson-developer-cloud'),
    q = require("q"),
    cfenv = require('cfenv');

  //
  // Private Variables & Functions
  //
  console.log("setting up watson helper module");

  var appEnv = cfenv.getAppEnv();

  // Text to speech setup
  var t2sService = appEnv.getService("YOUR_TEXT_TO_SPEECH_SVC_NAME");
  var t2sClient = watson.text_to_speech({
    username: t2sService.credentials.username,
    password: t2sService.credentials.password,
    version: 'v1'
  });

  //
  // Module Exports
  //
  module.exports = {

    getSynthesizeSpeech: function (text, voice) {
      var deferred = q.defer();

        // Sample voices:
        // en-US_AllisonVoice
        // en-US_MichaelVoice
        // en-US_LisaVoice
        // en-GB_KateVoice
        // es-ES_EnriqueVoice
        // fr-FR_ReneeVoice
        var params = {
          "text": text,
          "voice": voice,
          "accept": "audio/ogg;codecs=opus"
        };

        var transcript = t2sClient.synthesize(params);

        // stream returned 'response'
        transcript.on('response', function (response) {
          console.log("text to speech response status:", response.statusCode);
        });
        // stream returned 'error'
        transcript.on('error', function (error) {
          console.log("text to speech error:", JSON.stringify(error));
          deferred.reject(error);
        });

        // stream returned 'data'

        // convert binary voice data into base64
        var buffers = [];
        transcript.on('data', function(buffer) {
          buffers.push(buffer);
        });

        // stream returned ended
        transcript.on('end', function() {
          var buffer = Buffer.concat(buffers);
          var base64Audio = buffer.toString('base64');
          console.log("stream completed.  returning base64Audio.  length:", base64Audio.length);

          var result = {
            "base64_audio": base64Audio
          };
          deferred.resolve(result);
        });

      return deferred.promise;
    }

  };