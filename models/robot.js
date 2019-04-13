var mongoose = require('mongoose')

var Schema = mongoose.Schema

var RobotSchema = new Schema(
  {
    drivetrain: { type: String },
    reliability: {
      type: Number,
      min: 1,
      max: 5
    }
  }

  // Virtual for robot URL
  RobotSchema
  .virtual('url')
  .get(function() {
    return '/robots/' + this._id
  })
)

// Export Module
module.exports = mongoose.model('Robot', RobotSchema)
