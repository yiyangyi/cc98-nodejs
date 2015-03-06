var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db, function(err) {
  if(err) {
  	console.error("Having trouble connecting to %s, the problem seems to be ", config.db, err.message);
  }
});

//models
require('./user');
require('./hot');
require('./messsage');

exports.User = mongoose.model('User');
exports.Hot = mongoose.model('Hot');
exports.Message = mongoose.model('Message');