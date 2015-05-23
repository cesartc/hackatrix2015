
(function(){
	angular.module('app')
		.controller('PageInicioController', 
			['$scope','$route',
			function($scope,$route){

				console.log("index, controllador general");
				$scope.setLoadingStatus(false);
				

		}])


})();
