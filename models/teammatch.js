var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamMatchSchema = new Schema(
  {
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    match: { type: Schema.Types.ObjectId, ref: 'Match', required: true},
    alliance: { type: Schema.Types.ObjectId, ref: 'Alliance', required: true}
  }
);

// Export Module
module.exports = mongoose.model('TeamMatch', TeamMatchSchema);
