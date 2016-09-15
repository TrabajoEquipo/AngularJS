angular.module("ToDoList",[LocalStorageModule])
	.controller("ToDoController", function($scope,localStorageService){
		
		$scope.activity=[];

		/*
			{
			descripcion: "terminar curso",
			fecha: "hora"
			}
		*/

		$scope.addAct=function(){

		$scope.activity.push($scope.newActivity);
		$scope.newActivity={};
		

		}
		
		
	}

	);