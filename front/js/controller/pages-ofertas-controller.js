
(function(){
	angular.module('app')
		.controller('PageOfertasController', 
			['$scope','$route','$http','$timeout',
			function($scope,$route,$http,$timeout){
				
				console.log("lista de ofertas por categoria");

				$scope.items =[];

				var grid;

				// $http({method:'POST', url:'data/ofertas.php', params:{slug:'all'}})				
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:'all'}})
				.success(function(data){
					// console.log($scope.items);

					$scope.items = data;

					$timeout(function(){	

						// grid = $('.grid').isotope({
						//   itemSelector: '.grid-item',
						//   layoutMode: 'fitRows',
						//   gutter: 10
						// });	
						// console.log(grid);

					});
				});

				$scope.loadMore= function(){
				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{cat:'all'}})
					.success(function(data){

						// console.log("cargar mas", data);
						$scope.items = $scope.items.concat(data);

						$timeout(function(){

							// grid = $('.grid').isotope({
							//   itemSelector: '.grid-item',
							//   layoutMode: 'fitRows',
							//   gutter: 10
							// });	
							// console.log(grid);


						});



					});
				}



		}])


})();
