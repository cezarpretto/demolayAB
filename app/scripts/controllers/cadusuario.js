'use strict';

/**
 * @ngdoc function
 * @name demolayAbApp.controller:CadusuarioCtrl
 * @description
 * # CadusuarioCtrl
 * Controller of the demolayAbApp
 */
angular.module('demolayAbApp')
  .controller('CadusuarioCtrl', ['$scope', 'AuthService', 'ImageService', 'ModelSevice', 'ModalService', 'UsuarioService', 'growl', 'UploadService', function ($scope, auth, image, model, modal, usuarioservice, growl, upload) {
    auth.isLoggedIn();
    $scope.fotoCarregar = {};
    $scope.usuario = new model.Usuario();
    $scope.edicao = false;
    $scope.listaNivel = [];
    $scope.listaUsuarios = [];
    $scope.listaUsuariosAux = [];
    $scope.fileCadastro = undefined;

    var getUsuarios = function(){
      usuarioservice.getUsuarios().success(function(retorno){
        console.log(retorno);
        $scope.listaUsuarios = retorno;
        $scope.listaUsuariosAux = $scope.listaUsuarios;
      }).error(function(err){
        console.error(err);
        growl.error(err.message);
      });
    };
    getUsuarios();

    var getNiveis = function(){
      usuarioservice.getNiveis().success(function(retorno){
        $scope.listaNivel = retorno;
        modal.show('dlgNovoUsuario');
      }).error(function(err){
        console.error(err);
        growl.error(err);
      });
    };

    $scope.novo = function(){
      $scope.edicao = false;
      $scope.usuario = new model.Usuario();
      getNiveis();
    };

    $scope.salvar = function(){
      if($scope.edicao){
        usuarioservice.updateUsuario($scope.usuario).success(function(){
          growl.success('Usuário Modificado!', {ttl: 3000});
          getUsuarios();
          modal.hide('dlgNovoUsuario');
        }).error(function(err){
          console.error(err);
          growl.error(err.message);
        });
      }else{
        usuarioservice.insertUsuario($scope.usuario).success(function(){
          growl.success('Usuário Inserido!', {ttl: 3000});
          getUsuarios();
          modal.hide('dlgNovoUsuario');
        }).error(function(err){
          console.error(err);
          growl.error(err.message);
        });
      }
    };

    $scope.selecionaUsusario = function(usuario){
      $scope.edicao = true;
      $scope.usuario = usuario;
      getNiveis();
    };

    $scope.processaImagem = function(){
      $scope.usuario.foto = image.resizeImage($scope.fotoCarregar);
    };

    $scope.uploadCadastro = function(){
      upload.uploadFileToUrl($scope.fileCadastro).success(function (data, status, headers, config) {
        growl.success('Atualização de cadastro efetuada', {ttl: 4000});
        console.log(data);
      }).error(function (data, status, headers, config) {
        console.error(data);
        console.log('error status: ' + status);
        growl.error('Não foi possivel fazer a importação! Causa: <br />' + data.error_message);
      });
    };

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl="http://192.168.0.14:5000/usuarios/arquivo";
        upload.uploadFileToUrl(file, uploadUrl);
    };
  }]);
