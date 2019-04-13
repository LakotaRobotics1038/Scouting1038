var mongoose = require('mongoose')

var Schema = mongoose.Schema

var MatchSchema = new Schema(
  {
    match_results: {
      type: String,
      enum: 'red', 'blue', 'tie',
    },
    match_teams: [{ type: Schema.Type.ObjectID, ref: 'Team'}]
  }

  // Virtual for match URL
  MatchSchema
  .virtual('url')
  .get(function() {
    return '/matches/' + this._id
  })
)

// Export module
module.export = mongoose.model('Match', MatchSchema)
