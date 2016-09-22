var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var User = mongoose.model("User");
function PostController(){
	this.getPosts = function(req, res){
		console.log('invoked method from post controller');
		Post.find({})
			.populate("_user")
			.exec(function(err, posts){
				if(err){
					console.log('err', err);
				} else {
					res.json(posts);
				}
			})
	}

	this.createPost = function(req, res){
		console.log("invoked method from post controller create post");
		User.findOne({_id: req.body.user._id}, function(err, user){
			if(err){
				console.log("error finding user", err);
			} else {
				console.log(user,"do you exist");
				var post = new Post({post: req.body.post})
				post._user = user._id;
				post.save(function(err, newPost){
					if(err){
						console.log("error creating post", err);
					}else {
						user.posts.push(newPost._id);
					}
				})
			}
		})
	}
}
module.exports = new PostController();
