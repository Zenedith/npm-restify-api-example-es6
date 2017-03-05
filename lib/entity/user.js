var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = new Schema({
  id: ObjectId,
  name: String
});


