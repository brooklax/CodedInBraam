'use strict'; // so we can catch dodgy code

angular.module('codedInBraam').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'IndexCtrl',
      templateUrl: "/assets/ng/templates/index.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});