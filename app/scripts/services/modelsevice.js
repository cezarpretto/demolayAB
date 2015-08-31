'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.ModelSevice
 * @description
 * # ModelSevice
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('ModelSevice', function () {
    var self = this;

    this.Usuario = function(){
      this.id = undefined;
      this.nome = undefined;
      this.username = undefined;
      this.senha = undefined;
      this.foto = undefined;
      this.dtNascimento = undefined;
      this.dtIniciacao = undefined;
      this.nivel = undefined;
    };
  });
