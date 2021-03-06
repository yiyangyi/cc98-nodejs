var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TopicCollectSchema = new Schema({
  user_id: { type: ObjectId },
  topic_id: { type: ObjectId },
  created_at: { type: Date, default: Date.now }
});

mongoose.model('TopicCollect', TopicCollectSchema);
