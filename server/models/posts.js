var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
    post: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});
mongoose.model("Post", PostSchema);