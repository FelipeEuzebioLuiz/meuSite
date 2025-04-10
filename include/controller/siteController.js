angular.module('site').controller('siteController', ['$scope', '$rootScope', 'siteService', function($scope, $rootScope, siteService){
    
    $scope.produtos = [];
    $scope.valorVenda = '';
    $scope.carregando = true;
   // $rootScope.objetoSelecionado = {};
    

    atualizarTela();
      
    function atualizarTela(){
        siteService.buscarProdutos().then(function(response){
            $scope.produtos = response.data;
            
            for(n in $scope.produtos){
                
                if(!$scope.produtos[n].quantidade){
                    $scope.produtos[n].quantidade = 0;
                }
                
            }
            $scope.carregando = false;
            /*
            $scope.produtosTemp = $scope.produtos;
            $scope.produtos.items.forEach(function())
            */
        });
    }
    window.sessionStorage.setItem('objSelecionado', $rootScope.objetoSelecionado);

    $scope.selecionarObjeto = function(obj){
       
		$rootScope.objetoSelecionado = obj;
        console.log($rootScope.objetoSelecionado)
	}
}]);
