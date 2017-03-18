'use strict';

/**
 * @ngdoc overview
 * @name ang1App
 * @description
 * # ang1App
 *
 * Main module of the application.
 */
angular
  .module('ang1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider, $locationProvider, $qProvider) {
    $locationProvider.html5Mode(false).hashPrefix("");
    $qProvider.errorOnUnhandledRejections(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/mapPage', {
        templateUrl: 'views/mappage.html',
        controller: 'MappageCtrl',
        controllerAs: 'mapPage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
