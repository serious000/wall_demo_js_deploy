var userController = require("./../controllers/users.js");
var postController = require("./../controllers/posts.js");
module.exports = function(app){
	app.post('/users', function(req, res){
		console.log("post request users");
		userController.createUser(req, res);
	})
	app.get("/posts", function(req, res){
		postController.getPosts(req, res);
	})

	app.post("/posts", function(req, res){
		console.log(req.body);
		console.log("/posts");
		postController.createPost(req, res);
	})
}