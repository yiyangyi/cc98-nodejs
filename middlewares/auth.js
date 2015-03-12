var mongoose = require('mongoose');
var UserModel = mongoose.model('User');
var config = require('../config');
var eventproxy = require('eventproxy');

exports.adminRequired = function(req, res, next) {
  if (!req.session.user) {
  	res.render('notify/notify', { err: '你还没有登录呢，赶紧登陆吧！' });
  }
  if (!req.session.user.is_admin) {
  	res.render('notify/notify', { err: '需要管理员权限哦' });
  }
}

exports.userRequired = function (req, res, next) {
	if (!req.session || !req.session.user) {
		return res.status.send('Fordidden!');
	}
	next();
};

exports.gen_session = function (user, res) {
	var auth_token = user._id + '$$$$';
	res.cookie(config.auth_cookie_name, auth_token, {
		path: '/',
		maxAge: 1000 * 60 * 60 * 24 * 30,
		signed: true,
		httpOnly: true
	});
};






