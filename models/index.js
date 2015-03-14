var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db, function(err) {
  if(err) {
  	console.error("Having trouble connecting to %s, the problem seems to be ", config.db, err.message);
  }
});

//models
require('./user');
require('./note');
require('./topic');
require('./append');
require('./reply');
require('./messsage');
require('./topic_collect');

exports.User          = mongoose.model('User');
exports.Note          = mongoose.model('Note');
exports.Topic         = mongoose.model('Topic');
exports.append        = mongoose.model('Append');
exports.Reply         = mongoose.model('Reply');
exports.Message       = mongoose.model('Message');
exports.topic_collect = mongoose.model('TopicCollect');