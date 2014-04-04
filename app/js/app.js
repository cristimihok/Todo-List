'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
