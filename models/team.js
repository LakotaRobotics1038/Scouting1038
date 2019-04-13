var mongoose = reuqire('mongoose')

var Schema = mongoose.Schema

var TeamSchema = new Schema(
  {
    team_number: { type: Number, required: true },
    team_rank: { type: Number },
    driver_skill: {
      type: Number,
      min: '1',
      max: '5',
      required: true
    },
    team_robot: { type: Schema.Types.ObjectID, ref: 'Robot' }
  }

  // Virtual for team URL
  TeamSchema
  .virtual('url')
  .get(function () {
    return '/teams/' + this._id
  })
)

// Export Module
module.exports = mongoose.model('Team', TeamSchema)
