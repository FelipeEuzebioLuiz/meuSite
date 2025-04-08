angular.module('site').service('siteService', function($http){
    this.buscarProdutos = function(){
        return $http.get('https://clientspring-production.up.railway.app/produto/buscarTodos');
    }
});