
(function(){
	angular.module('app')
		.controller('PageIndexController', 
			['$scope','$route',
			function($scope,$route){

			console.log("index, controllador general");

			$scope.loading = true;

			$scope.setLoadingStatus = function(status){
				$scope.loading = status;
				console.log($scope.loading);
			}

			$scope.$on('$routeChangeStart', function(next, current) { 
			   $scope.loading = true;
			});

				

		}])


})();
