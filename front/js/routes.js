
(function(){
	angular.module('app')
		.config(function($routeProvider){
			$routeProvider
				.when('/publicacion',{
					templateUrl:'templates/pages/publicacion/index.html',
					controller:'PagePublicacionController',
					controllerAs:'currentController'
				})
				.when('/login',{
					templateUrl:'templates/pages/login/index.html',
					controller:'PageLoginController',
					controllerAs:'currentController'
				})
				.when('/detalle/:id',{
					templateUrl:'templates/pages/detalle/index.html',
					controller:'PageDetalleController',
					controllerAs:'currentController'
				})
				.when('/ofertas/:categoria',{
					templateUrl:'templates/pages/ofertas/index.html',
					controller:'PageOfertasController',
					controllerAs:'currentController'
				})
				.when('/inicio',{
					templateUrl:'templates/pages/inicio/index.html',
					controller:'PageInicioController',
					controllerAs:'currentController'
				})
				.when('/',{
					templateUrl:'templates/pages/inicio/index.html',
					controller:'PageInicioController',
					controllerAs:'currentController'
				})
				.otherwise({
					redirectTo:'/'
				});

		});

})();





