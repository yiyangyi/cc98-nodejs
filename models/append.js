var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AppendSchema = new Schema({
	topic_id: { type: ObjectId },
	content: { type: String },
	content_html: { type: String },
	append_at: { type: Date, default: Date.now }
});

AppendSchema.index({ topic_id: -1 });

mongoose.model('Append', AppendSchema);