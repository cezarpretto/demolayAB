'use strict';

/**
 * @ngdoc function
 * @name demolayAbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the demolayAbApp
 */
angular.module('demolayAbApp')
  .controller('LoginCtrl', ['$scope', 'AuthService', 'ModelSevice', 'growl', function ($scope, auth, model, growl) {
    $scope.usuario = new model.Usuario();

    $scope.logar = function(){
      auth.logar($scope.usuario).success(function(retorno){
        console.log(retorno);
        auth.setUsuario(retorno);
      }).error(function(err){
        console.error(err);
        growl.error(err.error_message, {ttl: 4000});
      });
    };
  }]);
