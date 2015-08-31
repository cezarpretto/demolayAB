'use strict';

/**
 * @ngdoc directive
 * @name demolayAbApp.directive:formatDate
 * @description
 * # formatDate
 */
angular.module('demolayAbApp')
  .directive('formatDate',formatDate);

  function formatDate(){
    return {
      require: 'ngModel',
      link: function(scope, elem, attr, modelCtrl) {
        modelCtrl.$formatters.push(function(modelValue){
          return new Date(modelValue);
        })
      }
    }
  }
