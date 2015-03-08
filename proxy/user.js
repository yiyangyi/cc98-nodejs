var models = require("../models");
var User = models.User;
var uuid = require("node-uuid");


// All callbacks in Mongoose use the pattern: callback(err, result)

exports.getUsersByNames = function (names, callback) {
	if (names.length === 0) {
		return callback(null, []);
	}
	User.find({ loginname: { $in: names } }, callback);
};

exports.getUsersByIds = function (ids, callback) {
	User.find({ '_id': { '$in': ids } }, callback);
};

exports.getUserByLoginName = function (loginName, callback) {
	User.findOne({ 'loginname': loginName }, callback);
};

exports.getUserById = function (id, callback) {
	User.findOne({ _id: id }, callback);
}

exports.getUserByMail = function (email, callback) {
	User.findOne({ email: email }, callback);
};

exports.getUserByNameAndKey = function (loginname, key, callback) {
	User.findOne({ loginname: loginName, retrieve_key: key }, callback);
};

// Model.find(conditions, [fields], [options], [callback]);
exports.getUsersByQuery = function (query, opt, callback) {
	User.find(query, '', opt, callback);
};

exports.newAndSave = function (name, loginname, pass, email, active, callback) {
	var user = new User();
	user.name = loginname;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.active = active || false;
    user.accessToken = uuid.v4();
    user.save(callback);
};