var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var NodeSchema = new Schema({
	
});

NodeSchema.index({});

mongoose.model("Node", NodeSchema);