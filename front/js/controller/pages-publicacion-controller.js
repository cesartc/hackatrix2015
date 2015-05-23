
(function(){
	angular.module('app')
		.controller('PagePublicacionController', 
			['$scope','$route',
			function($scope,$route){

				console.log("formalario de registro de publicacion");
				$scope.setLoadingStatus(false);
				

				$scope.postNewItem= function(data){
					console.log("enviando")
					console.log(data);
					$('.form_pub').submit();
					
				}

		}])


})();
