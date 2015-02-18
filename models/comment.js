var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//*****Create and export the Comment Schema
var commentSchema = new Schema({    // notice json-like format
    comment: { type: String },   // comment, will be a string
    name: { type: String },   // name, will be a string
    timestamp: { type: Date, 'default': Date.now }  // speical `Date` data type.
});
// Export our Schema
module.exports = mongoose.model('Comment', commentSchema);
// create a prototype,