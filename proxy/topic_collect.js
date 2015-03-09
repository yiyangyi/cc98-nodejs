var TopicCollect = require('../models').TopicCollect;

exports.getTopicCollect = function (userId, topicId, callback) {
	TopicCollect.findOne({ user_id: userId, topic_id: topicId }, callback);
};

exports.getTopicCollectByUserId = function (userId, callback) {
	TopicCollect.find({ user_id: userId }, callback);
};

exports.newAndSave = function (userId, topicId, callback) {
	var TopicCollect = new TopicCollect()
	TopicCollect.user_id = userId;
	TopicCollect.topic_id = topicId;
	TopicCollect.save(callback);
}

exports.remove = function (userId, topicId, callback) {
	TopicCollect.remove({ user_id: userId, topic_id: topicId }, callback);
}