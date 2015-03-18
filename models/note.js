var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema..Types.ObjectId;

var NoteScheam = new Schema(
	user_id: { type: ObjectId },
	title: { type: String },
	body: { type: String },
	word_count: { type: Number, default: 0 },
	changes_count: { type: Number, default: 0 },
	publish: { type: Boolean, default: false },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
);

NoteSchema.index({ user_id: 1, created_at: -1 });

mongoose.model('Note', NoteSchema);