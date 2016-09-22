var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});
mongoose.model("User", UserSchema);
