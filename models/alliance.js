var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AllianceSchema = new Schema(
  {
    name: {
      type: String,
      enum: ['Red', 'Blue']
    }
  }
);

// Virtual for alliance URL
Alliance
.virtual('url')
.get(function () {
  return 'scouting/alliances/' + this._id;
  }
);

// Export Module
module.exports = mongoose.model('Alliance', AllianceSchema);
