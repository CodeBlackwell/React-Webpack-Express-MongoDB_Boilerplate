var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Example schema with possible input types.
var DataSchema = new Schema({
  value: Date,
  value2: Number,
  value3: String,
  value4: Boolean,
  value5: Array,
  });

// MongoDB adds an 's' to Model name to create the database name.
// "CollectionNames" is the name of the entire Collection
// "CollectionName" is the name of the Model
module.exports = mongoose.model('CollectionName', DataSchema, 'CollectionNames');
