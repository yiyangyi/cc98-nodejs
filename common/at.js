var User = require('../proxy').User;
var Message = require('./message');
var EventProxy = require('eventproxy');
var _ = require('lodash');

exports.fetchUsers = function (text) {
	var ignoreRegExps = [];

	ignoreRegExps.forEach(function (ignore_regexp) {
		text = text.replace(ignore_regexp, '');
	});

	var results = text.match(/@[A-Za-z\-_]+/igm);
	var names = [];

	for (var i = 0; i < results.length; i++) {
		var s = results[i]
		s = s.slice(1);
		names.push(s);
	};

	names = _.uniq(names);

	return names
};

exports.sendMessageToMentionUsers = function (text, topic_id, author_id, reply_id, callback) {

};

exports.linkUsers = function (text, callback) {

};