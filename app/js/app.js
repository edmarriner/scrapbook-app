'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.when('/all', {templateUrl: 'partials/all.html', controller: AllBooksController});
    $routeProvider.when('/new', {templateUrl: 'partials/new.html', controller: NewBookController});
    $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: MyProfileController});
    $routeProvider.when('/friends', {templateUrl: 'partials/friends.html', controller: FriendsController});
    $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: SettingsController});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: AboutController});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
