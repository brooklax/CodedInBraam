'use strict'; // so we can catch dodgy code

angular.module('codedInBraam', ['ngResource', 'ngRoute', 'ngAria', 'ngMaterial', 'ngMdIcons', 'firebase'])
.constant('fb', {
  url: 'https://codedinbraam.firebaseio.com/'
});