'use strict';

/**
 * @ngdoc function
 * @name demolayAbApp.controller:MainadminCtrl
 * @description
 * # MainadminCtrl
 * Controller of the demolayAbApp
 */
angular.module('demolayAbApp')
  .controller('MainadminCtrl', ['$scope', 'AuthService', function ($scope, auth) {
    auth.isLoggedIn();
  }]);
