angular.module('site').controller('siteController', ['$scope', 'siteService', function($scope, siteService){
    $scope.produtos = ['A', 'B', 'C', 'D'];
}]);