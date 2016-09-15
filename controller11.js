angular.module("Apply",[])
	
	.controller("ApplyController", function($scope){

		$scope.nombre="Gerel";
		/*setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre="Gerel Negreira";
			});
			
		}, 2000);*/

		document.querySelector("#Miboton").addEventListener("click",function(){
			$scope.$apply(function(){
				$scope.nombre="Gerel Negreira";
			});
		});
		

	});

	