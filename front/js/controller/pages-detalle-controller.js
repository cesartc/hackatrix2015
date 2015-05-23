
(function(){
	angular.module('app')
		.controller('PageDetalleController', 
			['$scope','$route','$http','$timeout',
			function($scope,$route,$http,$timeout){
				
				console.log("lista de ofertas por categoria");
				$scope.setLoadingStatus(false);
				$('.modal-backdrop').remove();

				$scope.items2 =[];

				var grid;

				$http({method:'GET', url:'http://172.28.13.120/cazaofertas/public/index.php/offer', params:{slug:'all'}})
				.success(function(data){
					console.log($scope.items2);

					$scope.items2 = data;

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
