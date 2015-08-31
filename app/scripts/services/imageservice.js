'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.ImageService
 * @description
 * # ImageService
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('ImageService', function () {
    this.resizeImage = function(imgObj){
      if(imgObj !== null && imgObj !== undefined){
        var stringImage = 'data:' + imgObj.filetype + ';base64,' + imgObj.base64;
        var canvas = document.createElement('canvas');
        canvas.width = 250;
        canvas.height = 250;
        var ctx = canvas.getContext('2d');
        var image = document.createElement('img');
        image.src = stringImage;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var retorno = canvas.toDataURL();
        return retorno;
      }
    };
  });
