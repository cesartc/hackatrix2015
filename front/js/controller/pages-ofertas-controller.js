
(function(){
	angular.module('app')
		.controller('PageOfertasController', 
			['$scope','$route','$http','$timeout',
			function($scope,$route,$http,$timeout){
				


				$scope.items =[];


				// $http({method:'POST', url:'data/ofertas.php', params:{slug:'all'}})				
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:'all'}})
				.success(function(data){
					// console.log($scope.items);

					$scope.items = data;

					$timeout(function(){	

						$scope.setLoadingStatus(false);
					});
				});

				$scope.loadMore= function(){

				$scope.setLoadingStatus(true);
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:'all'}})
					.success(function(data){

						$scope.items = $scope.items.concat(data);
						
						$scope.setLoadingStatus(false);

						$timeout(function(){

						});



					});
				}




		}])


})();
