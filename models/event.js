var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema(
  {
    name: { type: String }
  }
);

// Virtual for event URL
EventSchema
.virtual('url')
.get(function () {
  return 'scouting/events/' + this._id;
  }
);

// Export Module
module.exports = mongoose.model('Event', EventSchema);
