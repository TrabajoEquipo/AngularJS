angular.module("Filtros",[])
	.filter("removeTag", function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,``);
		}

	})
	.controller("FilterController", function($scope){

		$scope.mitag= "<p>Hola Mundo<p>";
	});

	