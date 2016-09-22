var mongoose = require('mongoose');
var User = mongoose.model("User");

function UserController(){
	this.createUser = function(req, res){
		console.log("creating a user UserController");
		console.log(req.body.name, "this is teh users name");
		var newUser = new User({user_name: req.body.name});
		newUser.save(function(err, result){
			if(err){
				console.log("there was an error saving user", err);
				res.json({error: "Invalid Credentials"});
			} else {
				res.json(result);
			}
		})
	}
}

module.exports = new UserController();