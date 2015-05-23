
(function(){
	angular.module('app')
		.directive('ejemplo',['$http','ParseHtml',function($http,$ParseHtml){

			return{
				restrict:'A',
				templateUrl:'templates/directives/itemGrilla.html',
				scope:'=',
				controller:function($scope){
					console.log("ejemplo ready");
					
				},
				link:function($scope, element, attr){

				}
			}


		}]);

})();