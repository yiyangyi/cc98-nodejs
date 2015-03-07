var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	// basic
	name: { type: String },
	loginname: { type: String },
	std_id: { type: ObjectId },
	psw: { type: String },
	url: { type: String },
	profile_image_url: { type: String },
	location: { type: String },
	signature: { type: String },
	is_block: { type: String },

	// social intercourse account
	weibo: { type: String }, 
	renren: { type: String },
	wechat: { type: String },
	qq: { type: Number },
	email: { type: String },
	github: {type: String },

	// account info
	score: { type: Number, default: 98 },
	level: { type: String },
	title: { type: String },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },

	access_token: { type: String }
});

UserSchema.virtual().get(function() {

});

UserSchema.index();

mongoose.model('User', UserSchema);