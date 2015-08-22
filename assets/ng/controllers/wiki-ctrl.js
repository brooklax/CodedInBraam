'use strict'; // so we can catch dodgy code

angular.module('codedInBraam')
.controller('WikiNewCtrl', function($scope) {
  
})
.controller('WikiShowCtrl', function($scope, $routeParams, WikiService) {
  var id = parseInt($routeParams.wikiId);
  $scope.wiki = WikiService.getWiki(id);
});