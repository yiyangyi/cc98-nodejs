var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

/**
 * Message type:
 * type1: xx 回复了你的话题
 * type2: xx 在话题中回复了你
 * type3: xx 给你发了一条站内短信
 * follow: xx 关注了你
 * at: xx @了你
 * @type {Schema}
 */
var MessageSchema = new Schema({
	type: { type: String },
	master_id: { type: ObjectId },
	author_id: { type: ObjectId },
	node_id: { type: ObjectId },
	topic_id: { type: ObjectId },
	reply_id: { type: ObjectId },
	has_read: { type: Boolean, default: false },
	created_at: { type: Date, default: Date.now }
});

MessageSchema.index({ master_id: 1, has_read: -1, create_at: -1 });

mongoose.model("Message", MessageSchema);