'use strict'; // so we can catch dodgy code

angular.module('codedInBraam').service('WikiService', function($location, $firebaseArray, $firebaseObject, fb) {
  this.getAllWikis = function(){
    var ref = new Firebase(fb.url + '/wikis');
    return $firebaseArray(ref);
  };

  this.getWiki = function(wikiId){
    var ref = new Firebase(fb.url + '/wikis/' + wikiId);
    return $firebaseObject(ref);
  };

  this.createWiki = function(wiki) {
    var ref = new Firebase(fb.url + '/wikis');
    var wikis = $firebaseArray(ref);
    wikis.$add(wiki)
    .then(function(response) {
      var id = response.key();
      $location.path('/wiki/' + id);
    })
    .catch(function(error) {
      console.log("An error occured" + error)
    })
    .finally(function() {
      // unlock any DOM elements if necessary
    });
  }
});