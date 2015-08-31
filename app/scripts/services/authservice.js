'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.AuthService
 * @description
 * # AuthService
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('AuthService',['$http', '$location', function ($http, $location) {
    var self = this;
    this.ip = 'http://192.168.0.14:5000/';
    this.usuarioLogado = null;

    this.isLoggedIn = function(){
      self.usuarioLogado = JSON.parse(window.localStorage.getItem('usuario'));
      if(self.usuarioLogado === null){
        $location.path('/login');
      }
    };

    this.logar = function(usuario){
      return $http.post(self.ip + 'login', usuario);
    };

    this.setUsuario = function(usuario){
      window.localStorage.setItem('usuario', JSON.stringify(usuario));
      self.usuarioLogado = usuario;
      $location.path('/mainAdmin');
    };

    this.logout = function(){
      self.usuarioLogado = null;
      window.localStorage.setItem('usuario', JSON.stringify(null));
      $location.path('/');
    };
  }]);
