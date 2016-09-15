angular.module("Nghs",[])
	.controller("FirstController", function($scope,$http){
		$scope.posts=[];
		$scope.NewPost={};

		
		$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts=data;
		})
		.error(function(err){

		});

		

		
	}

	)