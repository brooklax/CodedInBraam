'use strict'; // so we can catch dodgy code

angular.module('codedInBraam').service('WikiService', function($resource) {
  var data = {
    "wikis": [
      {
        "title": "Angular vs Ember",
        "author": "Gideon",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "title": "iOS Development",
        "author": "Vusi",
        "body": "coming soon"
      },
      {
        "title": "Polymer 101",
        "author": "Jane",
        "body": "coming soon"
      },
      {
        "title": "Testing in Android",
        "author": "Tsatsi",
        "body": "coming soon"
      }
    ]
  };

  this.getAllWikis = function(){
    return data.wikis;
  };

  this.getWiki = function(wikiId){
    for(var i = 0; i < data.wikis.length; i++){
      if(i === wikiId){
         return data.wikis[i]
      }
    }
  };
});