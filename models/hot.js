var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.objectId;

var HotSchema = new Schema({
	user_id: { type: objectId },
	node_id: { type: objectId },
	create_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Hot', HotSchema);