var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/charlie');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

var Walk;

var Schema = mongoose.Schema;

var walkSchema = new Schema({
	time: {
		type: String,
		default: Date()
	}
});

Walk = mongoose.model('Walk',walkSchema);

module.exports = Walk;