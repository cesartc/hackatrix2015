
(function(){
	angular.module('app')
		.controller('PageOfertasController', 
			['$scope','$route','$http','$timeout','$routeParams',
			function($scope,$route,$http,$timeout, $routeParams){
				


				$scope.items =[];

				$scope.page = 1;

				// $http({method:'POST', url:'data/ofertas.php', params:{slug:'all'}})				
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:$routeParams.categoria, page:$scope.page}})
				.success(function(data){
					// console.log($scope.items);

					$scope.items = data;

					$timeout(function(){	

						$scope.setLoadingStatus(false);
					});
				});

				$scope.loadMore= function(){
				$scope.page++;
				console.log($scope.page);
				$scope.setLoadingStatus(true);
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:$routeParams.categoria, page:$scope.page}})
					.success(function(data){

						$scope.items = $scope.items.concat(data);

						$scope.setLoadingStatus(false);

						$timeout(function(){

						});



					});
				}




		}])


})();
