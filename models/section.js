var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var SectionSchema = new Schema({
	name: { type: String }
});

SectionSchema.index({});

mongoose.model("Section", SectionSchema);