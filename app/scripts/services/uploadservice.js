'use strict';

/**
 * @ngdoc service
 * @name demolayAbApp.UploadService
 * @description
 * # UploadService
 * Service in the demolayAbApp.
 */
angular.module('demolayAbApp')
  .service('UploadService', ['Upload', 'AuthService', 'growl', '$http', function (upload, auth, growl, $http) {
    var ip = auth.ip;

    this.uploadCadastro = function(f){
      return upload.upload({
            url: ip + 'usuarios/arquivo',
            fields: {nome: 'Cezar'},
            file: {file: f},
            sendFieldsAs: 'form',
            headers: {'Content-Type': 'multipart/form-data'}
      });
    };

    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(retorno){
          console.log(retorno);
        })
        .error(function(err){
          console.error(err);
        });
    }
  }]);

  /* Callback upload options */

  // .progress(function (evt) {
  //     // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
  //     // console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
  // }).success(function (data, status, headers, config) {
  //   growl.success('Atualização de cadastro efetuada', {ttl: 4000});
  // }).error(function (data, status, headers, config) {
  //   console.log('error status: ' + status);
  //   growl.error('Não foi possivel fazer a importação! Causa: <br />' + data.error_message);
  // });
