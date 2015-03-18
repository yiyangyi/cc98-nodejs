var Note = require('../models').Note;

exports.getNotes = function (userId, callback) {
	Note.find({ user_id: userId }, callback);
}

exports.getNoteById = function (id, callback) {
	Note.findOne({ _id: id , function (err, note) {
		if (err) {
			return callback(err);
		}
	});
}

exports.getNotesCount = function (userId, callback) {
	Note.count({ user_id: userId }, callback);
}
