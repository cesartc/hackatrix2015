
(function(){
	angular.module('app')
		.controller('PageDetalleController', 
			['$scope','$route',
			function($scope,$route){

				 var imagePath = 'http://placehold.it/150x150';
				    $scope.messages = [{
				      face : imagePath,
				      what: 'Brunch this weekend?',
				      who: 'Min Li Chan',
				      when: '3:08PM',
				      notes: " I'll be in your neighborhood doing errands"
				    }, {
				      face : imagePath,
				      what: 'Brunch this weekend?',
				      who: 'Min Li Chan',
				      when: '3:08PM',
				      notes: " I'll be in your neighborhood doing errands"
				    }, {
				      face : imagePath,
				      what: 'Brunch this weekend?',
				      who: 'Min Li Chan',
				      when: '3:08PM',
				      notes: " I'll be in your neighborhood doing errands"
				    }, {
				      face : imagePath,
				      what: 'Brunch this weekend?',
				      who: 'Min Li Chan',
				      when: '3:08PM',
				      notes: " I'll be in your neighborhood doing errands"
				    }, {
				      face : imagePath,
				      what: 'Brunch this weekend?',
				      who: 'Min Li Chan',
				      when: '3:08PM',
				      notes: " I'll be in your neighborhood doing errands"
				    }];
				
				console.log("detalle");

		}])


})();
