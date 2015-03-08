var EventProxy = require('eventproxy');
var _ = require('lodash');

var models = require('../models');
var Topic = models.topic;
var User = require('./user');
var Reply = require('./reply');

exports.updateLastReply = function (topicId, replyId, callback) {
	Topic.findOne({ _id: topicId }, function (err, topic) {
		if (err || !topic) {
			callback(err);
		}
		topic.last_reply = replyId;
		topic.last_replyed_at = new Date();
		topic.reply_count += 1;
		topic.save(callback);
	});
};

exports.getTopic = function (id, callback) {
	Topic.findOne({ _id: id }, callback)
};

exports.reduceCount = function (id, callback) {
	Topic.find({ _id: id }, function (err, topic) {
		if (err) {
			return callback(err);
		}
		if (!topic) {
			return callback(new Error('This topic does not exists!'));
		}
		topic.reply_count -= 1;
		topic.save(callback);
	});
};

exports.newAndSave = function (title, content, node, authorId, callback) {
	var topic = new Topic();
	topic.title = title;
	topic.content = content;
	topic.node = node;
	topic.author_id = authorId;
	topic.save(callback);
};