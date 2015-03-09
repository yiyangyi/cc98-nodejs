var EventProxy = require('eventproxy');

var Message = require('../models').Message;

var User = require('./user');
var topic = require('./topic');
var reply = require('./reply');

exports.getMessagesCount = function (id, callback) {
	Message.count({ master_id: id, has_read: false }, callback);
};

exports.getMessageById = function (id, callback) {
	Message.findOne({ _id: id }, function (err, message) {
		if (err) {
			return callback(err);
		}
		// TODO: get the message based on different message types
	});
};

exports.getReadMessageByUserId = function (userId, callback) {
	Message.find({ master_id: userId, has_read: true }, null, 
	{ sort: '-created_at', limit: 20 }, callback);
};

exports.getUnreadMessageByUserId = function (userId, callback) {
	Message.find({ master_id: userId, has_read: false }, null, 
	{ sort: '-created_at' }, callback);
};