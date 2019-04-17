var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchTypeSchema = new Schema(
  {
    name: {
      type: String,
      enum: ['Practice', 'Qualification', 'Elimination']
    }
  }
);

module.exports = mongoose.model('MatchType', MatchTypeSchema);
