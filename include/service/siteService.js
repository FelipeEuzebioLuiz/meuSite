angular.module('site').service('siteService', function($http){
    this.vendas = function(){
        return $http.get('https://clientspring-production.up.railway.app/produto/buscarTodos');
    }
});