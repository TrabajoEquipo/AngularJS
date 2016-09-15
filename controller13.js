angular.module("MyFirstApp",[])
	.run(function($rootScope){
		$rootScope.nombre="Gerel";

	})
	.controller("FirstController", function($scope){
		
		$scope.nombre="Enrique";
		
		
	})
	.controller("ChildController",function($scope){

	});