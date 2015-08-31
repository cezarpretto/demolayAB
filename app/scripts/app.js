'use strict';

/**
 * @ngdoc overview
 * @name demolayAbApp
 * @description
 * # demolayAbApp
 *
 * Main module of the application.
 */
angular
  .module('demolayAbApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'slick',
    'angular-growl',
    'angular-loading-bar',
    'naif.base64',
    'rt.select2'
  ])
  .config(function ($routeProvider) {
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/mainAdmin', {
        templateUrl: 'views/mainadmin.html',
        controller: 'MainadminCtrl',
        controllerAs: 'mainAdmin'
      })
      .when('/cadUsuario', {
        templateUrl: 'views/cadusuario.html',
        controller: 'CadusuarioCtrl',
        controllerAs: 'cadUsuario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
