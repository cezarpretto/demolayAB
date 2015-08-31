'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.UsuarioService
 * @description
 * # UsuarioService
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('UsuarioService', ['$http', 'AuthService', function ($http, auth) {
    this.getNiveis = function(){
      return $http.get(auth.ip + 'usuarios/niveis');
    };

    this.insertUsuario = function(usuario){
      return $http.post(auth.ip + 'usuarios', usuario);
    };

    this.updateUsuario = function(usuario){
      return $http.put(auth.ip + 'usuarios', usuario);
    };

    this.getUsuarios = function(){
      return $http.get(auth.ip + 'usuarios');
    };
  }]);
