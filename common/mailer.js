var nodemailer = require('nodemailer');
var config = require('../config');
var util = require('util');

var transporter = nodemailer.createTransport({

});


/**
 * Sending mails
 * @param  {Object} data 邮件对象
 */
exports.sendMail = function(data) {
	if(config.debug){
		return;
	}
	transporter.sendMail(data, function(err) {
		if(err) {
			console.log(err);
		}
 	});
}

/**
 * [sendActiveMail description]
 * @param  {[type]} who   [description]
 * @param  {[type]} token [description]
 * @param  {[type]} name  [description]
 */
exports.sendActiveMail = function(who, token, name) {

};

/**
 * [sendResetPassMail description]
 * @param  {[type]} who   [description]
 * @param  {[type]} token [description]
 * @param  {[type]} name  [description]
 * @return {[type]}       [description]
 */
exports.sendResetPassMail = function(who, token, name) {

};




