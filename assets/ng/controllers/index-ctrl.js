'use strict'; // so we can catch dodgy code

angular.module('codedInBraam').controller('IndexCtrl', function(WikiService, $scope) {
  $scope.title = 'Welcome to Coded In Braam';
  $scope.description = 'Let\'s do something awesome with Angular and Firebase!';
  $scope.wikis = WikiService.getAllWikis();
});