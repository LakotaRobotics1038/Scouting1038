var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema(
  {
    number: { type: Number },
    type: { type: Schema.Types.ObjectID, ref: MatchType}
  }
);

module.exports = mongoose.model('Match', MatchSchema);
