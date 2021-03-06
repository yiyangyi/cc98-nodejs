var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var config = require('../config');
var _ = require('lodash');

var TopicSchema = new Schema({
	node: { type: String },
	title: { type: String },
	content: { type: String },
	author_id: { type: ObjectId },
	top: { type: Boolean, default: false }, // 置顶
	good: { type: Boolean, default: false }, // 精华
	reply_count: { type: Number, default: 0 },
	visit_count: { type: Number, default: 0 },
	collect_count: { type: Number, default: 0 }, //?????
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }, 
	last_reply: { type: ObjectId },
	last_replyed_at: { type: Date, default: Date.now }
});

TopicSchema.index({ created_at: -1 });
TopicSchema.index({ top: -1, last_replyed_at: -1 });
TopicSchema.index({ last_replyed_at: -1 });
TopicSchema.index({ author_id: 1, created_at: -1 });

TopicSchema.virtual('nodeName').get(function () {
	
});

mongoose.model('Topic', TopicSchema);