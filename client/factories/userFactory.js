myApp.factory('userFactory', function($http){
	var _user;
	var factory = {};
	factory.create = function(user, callback){
		console.log("create method userFactory");
		console.log(user, "this is the user object");
		$http.post("/users", user).then(function(data){
			_user = data.data;
			callback(data);
		})
	}

	factory.getUser = function(callback){
		callback(_user);
	}

	return factory;
})
