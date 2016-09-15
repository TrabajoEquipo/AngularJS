angular.module("MyFirstApp",[])
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

		

		$scope.addPost=function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.NewPost.title,
			body: $scope.NewPost.body,
			userid: 1
		})
		.success(function(data,status,headers,config){
			$scope.posts.push($scope.NewPost);
			$scope.addPost={};
			
		})
		.error(function(error,status,headers,config){
			console.log(error);
		});

		}
	}

	)