/* var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
  {
    team_number: { type: Number, required: true }
  }
);

  // Virtual for team URL
  TeamSchema
  .virtual('url')
  .get(function () {
    return '/teams/' + this._id;
    }
  );

// Export Module
module.exports = mongoose.model('Team', TeamSchema);
*/
