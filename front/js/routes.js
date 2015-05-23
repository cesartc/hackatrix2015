
(function(){
	angular.module('app')
		.config(function($routeProvider){
			$routeProvider
				.when('/detalle',{
					templateUrl:'templates/pages/detalle/index.html',
					controller:'PageDetalleController',
					controllerAs:'currentController'
				})
				.when('/inicio',{
					templateUrl:'templates/pages/home/index.html',
					controller:'PageIndexController',
					controllerAs:'currentController'
				})
				.when('/',{
					templateUrl:'templates/pages/home/index.html',
					controller:'PageIndexController',
					controllerAs:'currentController'
				})
				.otherwise({
					redirectTo:'/'
				});

		});

})();





