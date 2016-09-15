angular.module("OwnDirective",[])

	.directive("backImg",function(){

	})

	.controller("AppCtrl", function($scope,$http){
		$scope.repos=[];
		

		$http.get("https://api.github.com/users/CodigoFacilito/repos")
		.success(function(data){
		
			$scope.repos=data;
		})
		.error(function(err){

		});

		
	}

	);