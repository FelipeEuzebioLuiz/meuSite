angular.module('site').controller('siteController', ['$scope', 'siteService', function($scope, siteService){
    
    $scope.produtos = [];
    $scope.valorVenda = '';

    atualizarTela();
      
    function atualizarTela(){
        siteService.buscarProdutos().then(function(response){
            $scope.produtos = response.data;
            for(n in $scope.produtos){
                if(!$scope.produtos[n].quantidade){
                    $scope.produtos[n].quantidade = 0;
                }
            }
            /*
            $scope.produtosTemp = $scope.produtos;
            $scope.produtos.items.forEach(function())
            */
        });
    }
    
}]);