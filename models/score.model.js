// models/score.model.js

    // import modules =====================
    var mongoose = require('mongoose') // mongoose import
    var Schema   = mongoose.Schema   // schema import from mongoose for models

    // define schema ======================
    var ScoreSchema = new Schema(
      {
        match: { type: Schema.Types.ObjectID, ref: 'Match'},
        team: { type: Schema.Types.ObjectID, ref: 'Team'},
        sandstorm: {
          hatch: { type: Number },
          cargo: { type: Number }
        }
      }
    )

    // export as model =====================
    module.exports = mongoose.model('Score', ScoreSchema)
