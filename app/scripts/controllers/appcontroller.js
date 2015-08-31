'use strict';

/**
 * @ngdoc function
 * @name demolayAbApp.controller:AppcontrollerCtrl
 * @description
 * # AppcontrollerCtrl
 * Controller of the demolayAbApp
 */
angular.module('demolayAbApp')
  .controller('AppcontrollerCtrl', ['$scope', 'AuthService', function ($scope, auth) {
    $scope.auth = auth;
    $scope.showMenu = false;
    $scope.usuarioLogado = {};
    $scope.$watch('auth.usuarioLogado', function(newValue){
      if(newValue !== null){
        $scope.showMenu = true;
        $scope.usuarioLogado = newValue;
      }else{
        $scope.showMenu = false;
        $scope.usuarioLogado = {};
      }
    });

    $scope.logout = function(){
      auth.logout();
    };
  }]);
