'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.ModalService
 * @description
 * # ModalService
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('ModalService', function () {
    this.show = function(modalId){
      $('#' + modalId).modal('show');
    };

    this.hide = function(modalId){
      $('#' + modalId).modal('hide');
    };
  });
