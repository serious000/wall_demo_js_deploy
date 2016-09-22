myApp.factory('postFactory', function($http){
	var factory = {};
	factory.getPosts = function(callback){
		console.log('getting posts factory');
		$http.get("/posts").then(function(data){
			console.log(data, "this is me getting all of the posts");
			callback(data);
		})
	}
	factory.createPost = function(newPost, callback){
		console.log('creating posts factory');
		$http.post("/posts", newPost).then(function(data){
			console.log(data);
			callback(data);
		})
	}


	return factory;
})