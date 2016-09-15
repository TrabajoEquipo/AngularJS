angular.module("ToDoList",["LocalStorageModule"])
	.factory("MyService",function(localStorageService){
		var NewService={};
		NewService.key="angular-todolist";

		if(localStorageService.get(NewService.key)){
			NewService.activity= localStorageService.get(NewService.key);

		}
		else
		{
			NewService.activity=[];
		}

		NewService.add=function(newact){
			NewService.activity.push(newact);
		}

		NewService.update=function(){
			localStorageService.set(NewService.key,NewService.activity);

		}

		NewService.clean=function(){
			NewService.activity=[];
			NewService.update();	
		}

		NewService.getall=function(){
			NewService.activity;
		}

		NewService.remove=function(item){
			NewService.activity=NewService.activity.filter(function(activity){
					return activity !== item;
			});


		}
		return NewService();
	})
	.controller("ToDoController", function($scope,MyService){


	})