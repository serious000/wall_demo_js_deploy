myApp.controller('newController', function($scope, $location, userFactory){
	$scope.addUser = function(){
		console.log("Adding a user newController", $scope.user);
		userFactory.create($scope.user, function(data){
			console.log("this is going to run after data gets from server userFactory");
			console.log(data);
			if(data.data.error){
				$scope.error = data.data.error;	
			} else {
				$location.path("/posts");
			}
		});
	}
})