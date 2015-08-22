'use strict'; // so we can catch dodgy code

angular.module('codedInBraam').config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'IndexCtrl',
      templateUrl: "/assets/ng/templates/index.html"
    })
    .when('/new', {
      controller: 'WikiNewCtrl',
      templateUrl: "/assets/ng/templates/wiki-new.html"
    })
    .when('/wiki/:wikiId', {
      controller: 'WikiShowCtrl',
      templateUrl: '/assets/ng/templates/wiki-show.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});