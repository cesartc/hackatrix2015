
(function(){
	angular.module('app')
		.factory('ParseHtml', ['$sce', function ParseHtmlFactory($sce){

			// Its parse the html tags to render in view
			return{
				parse: function(html){
					return $sce.trustAsHtml(html);
				}
			}


		}]);

})();

