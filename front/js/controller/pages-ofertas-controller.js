
(function(){
	angular.module('app')
		.controller('PageOfertasController', 
			['$scope','$route','$http','$timeout',
			function($scope,$route,$http,$timeout){
				
				console.log("lista de ofertas por categoria");

				$scope.items =[];

				var grid;

				$http({method:'POST', url:'data/ofertas.php', params:{slug:'all'}})
				.success(function(data){
					console.log($scope.items);

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
					$http({method:'POST', url:'data/ofertas.php', params:{slug:'all'}})
					.success(function(data){

						console.log("cargar mas", data);
						$scope.items = $scope.items.concat(data);
						console.log(grid);

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
