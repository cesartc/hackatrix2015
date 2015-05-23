
(function(){
	angular.module('app')
		.controller('PageDetalleController', 
			['$scope','$route','$http','$timeout','$routeParams',
			function($scope,$route,$http,$timeout,$routeParams){
				
				console.log("lista de ofertas por categoria");
				$scope.setLoadingStatus(false);
				$('.modal-backdrop').remove();

				$scope.itemDetalle= {};

				var grid;

				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{id:$routeParams.id}}) 
				.success(function(data){
					$scope.itemDetalle = data;
					console.log($scope.itemDetalle,data);

					$timeout(function(){	

						// grid = $('.grid').isotope({
						//   itemSelector: '.grid-item',
						//   layoutMode: 'fitRows',
						//   gutter: 10
						// });	
						// console.log(grid);

					});
				});

				

				



		}])


})();
