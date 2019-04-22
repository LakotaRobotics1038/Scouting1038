var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoutMatchSchema = new Schema(
  {
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    match: { type: Schema.Types.ObjectId, ref: 'Match', required: true},
    alliance: { type: String, enum: ['Red', 'Blue'], required: true },
    score: {
      starting_position: { type: String, enum: ['Hab1', 'Hab2'], required: true},
      sandstorm: {
        passed_hab_line: Boolean,
        sandstorm_cargo: Number,
        sandstorm_hatch: Number
      },
      teleop: {
        teleop_cargo: Number,
        teleop_hatch: Number
      },
      engame: {
        endgame_level: { type: String, enum: ['None', 'Hab1', 'Hab2', 'Hab3'], required: true }
      }
    }
  }
);

// Export Module
module.exports = mongoose.model('ScoutMatch', ScoutMatchSchema);
