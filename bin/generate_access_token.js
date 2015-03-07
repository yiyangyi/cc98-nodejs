// Generate access tokens for all the old users

var uuid = require('node-uuid');
var async = require('async');
var mongoose = require('mongoose');
var config = require('../config');

require('../models/user');

mongoose.connect(config.db, function(err) {
  if(err) {
  	console.error("Having trouble connecting to %s, the problem seems to be ", config.db, err.message);
  }
});

var UserModel = mongoose.model('User');

var remain = True;

async.whilst(

	// test()
	// synchronous truth test to perform before each execution of fn
	function () {
		return hasRemain;
	},

	// fn(callback)
  // A function which is called each time test passes. The function is passed a callback(err), 
  // which must be called once it has completed with an optional err argument
	function (callback) {
		UserModel.findOne({ access_token: { $exists: false } }, function (err, user) {
			if(!user) {
				remain = false;
				callback();
				return;
			}
			user.access_token = uuid.v4();
			user.save(function () {
				console.log(user.loginname + " done!");
				callback();
			});
		});
	},

	// callback(err)
	// A callback which is called after the test fails and repeated execution of fn has stopped
	function (err) {
		mongoose.disconnect();
	}
);
