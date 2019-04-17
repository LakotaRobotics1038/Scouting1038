var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamMatchSchema = new Schema(
  {
    team: { type: Schema.Types.ObjectID, ref: 'Team', required: true },
    match: { type: Schema.Types.ObjectID, ref: 'Match', required: true},
    alliance: { type: Schema.Types.ObjectID, ref: 'Alliance', required: true}
  }
);

module.exports = mongoose.model('TeamMatch', TeamMatchSchema);
