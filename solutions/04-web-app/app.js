(function (angular) {

  // -------------------------------------------------------------------------
  // Reference to logger & other global variables
  // -------------------------------------------------------------------------
  var thisModuleName = "cas-cognitive-app1";

  // -------------------------------------------------------------------------
  // Main application dependencies
  // -------------------------------------------------------------------------
  var app = angular.module(thisModuleName, [
    "ui.router",
    "cas-cognitive-app1.filters.trusted",
    "cas-cognitive-app1.filters.percentage",
    "cas-cognitive-app1.services.cognitive",
    "cas-cognitive-app1.services.twitter",
    "cas-cognitive-app1.controllers.speech",
    "cas-cognitive-app1.controllers.insights"
  ])

  // -------------------------------------------------------------------------
  // Run blocks are reserved to inject instances (not Providers) into the app.
  // There can be as many run blocks as needed.
  // -------------------------------------------------------------------------
  app.run(function ($rootScope, $state, $log) {
    $log.debug("app.run");
  })

  // -------------------------------------------------------------------------
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // -------------------------------------------------------------------------
  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('speech', {
        url: '/speech',
        templateUrl: 'app/views/speech/speech.html',
        controller: 'SpeechCtrl'
      })
      .state('insights', {
        url: '/insights',
        templateUrl: 'app/views/insights/insights.html',
        controller: 'InsightsCtrl'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.when('', '/speech');
    $urlRouterProvider.otherwise('/speech');
  })

  // -------------------------------------------------------------------------
  // Add some editable values in the angular app modules.
  // -------------------------------------------------------------------------
  // envName - Enumerations are "DEV", "PROD"
  //app.value('envName', 'DEV');

  // -------------------------------------------------------------------------
  // Add some non-editable values in the angular app modules.
  // -------------------------------------------------------------------------
  // apiBaseUrl - URL that hosts the cognitive API.  The Bluemix API app
  //              cas-cognitive-api1 (url: https://cas-cognitive-api1.mybluemix.net)
  //              exists in Bluemix and can be used for demonstration purposes
  //app.constant("apiBaseUrl", "https://cas-cognitive-api1.mybluemix.net")

  // Use your Bluemix API app below that you created in earlier section.
  // Remember to change  <email-id> with your email id (or proper Bluemix app name)
  app.constant("apiBaseUrl", "https://<email-id>-cognitive-api1.mybluemix.net")

})(angular);
