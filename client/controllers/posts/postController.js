myApp.controller('postController', function($scope, userFactory, postFactory){
	userFactory.getUser(function(data){
		$scope.user = data;
	})

	postFactory.getPosts(function(data){
		console.log("getting posts", data);
		$scope.posts = data.data;
	})

	$scope.createPost = function(){
		console.log("creating a post");
		$scope.post.user = $scope.user
		postFactory.createPost($scope.post, function(data){
			console.log("this is going to happen after we get back from server");
		})
	}

})