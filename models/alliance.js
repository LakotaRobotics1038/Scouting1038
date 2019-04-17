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

module.exports = mongoose.model('Alliance', AllianceSchema);
