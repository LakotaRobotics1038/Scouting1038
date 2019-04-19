var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema(
  {
    number: { type: Number },
    type: { type: String, enum: ['Practice', 'Qualification', 'Elimination']}
  }
);

// Virtual for match URL
MatchSchema
.virtual('url')
.get(function () {
  return '/scouting/matches/' + this._id;
  }
);

// Export Module
module.exports = mongoose.model('Match', MatchSchema);
