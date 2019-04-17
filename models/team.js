var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema(
  {
    number: { type: Number, required: true },
    name: { type: String },
    description: { type: String }
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
