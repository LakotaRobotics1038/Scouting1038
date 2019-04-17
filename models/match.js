var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema(
  {
    number: { type: Number }
  }
);

module.exports = mongoose.model('Match', MatchSchema);
