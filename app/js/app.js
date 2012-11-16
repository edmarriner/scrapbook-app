'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: homeCtrl});
    $routeProvider.when('/all', {templateUrl: 'partials/all.html', controller: allCtrl});
    $routeProvider.when('/new', {templateUrl: 'partials/new.html', controller: newCtrl});
    $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: profileCtrl});
    $routeProvider.when('/friends', {templateUrl: 'partials/friends.html', controller: friendsCtrl});
    $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: settingsCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: aboutCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
