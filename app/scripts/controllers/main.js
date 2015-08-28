'use strict';

/**
 * @ngdoc function
 * @name demolayAbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demolayAbApp
 */
angular.module('demolayAbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.atDiretoria = diretoriaAtual();
    $scope.slides = [
      {
        image: 'http://placekitten.com/603/300',
        text: 'Teste'
      },
      {
        image: 'http://placekitten.com/603/301',
        text: 'Teste1'
      },
      {
        image: 'http://placekitten.com/603/302',
        text: 'Teste2'
      }
      ,
      {
        image: 'http://placekitten.com/603/303',
        text: 'Teste2'
      }
    ];

    $scope.noticias = [
      {
        titulo: 'Notícia teste',
        noticia: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis...'
      },
      {
        titulo: 'Notícia 2',
        noticia: 'Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui...'
      }
    ];

    function diretoriaAtual(){
      var dtAtual = new Date();
      var ano = dtAtual.getFullYear();
      var mes = dtAtual.getMonth() + 1;
      var nrDiretoria = function(){
        if(mes <= 6){
          return 1;
        }else{
          return 2;
        }
      }
      var retorno = ano + '/' + nrDiretoria();
      return retorno;
    };
  });
