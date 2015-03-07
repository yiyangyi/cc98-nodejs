var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ReplySchema = new Schema({
	content: { type: String }, 
	topic_id: { type: ObjectId },
	author_id: { type: ObjectId },
	reply_id: { type: ObjectId },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	ups: [ Schema.Types.ObjectId ],
	downs: [ Schema.Types.ObjectId ]
}); 

ReplySchema.index({});

mongoose.model('Reply', ReplySchema);