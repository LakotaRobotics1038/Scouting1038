// models/match.model.js

    // import modules =====================
    var mongoose = require('mongoose') // mongoose import
    var Schema   = mongoose.Schema   // schema import from mongoose for models

    // define schema ======================
    var MatchSchema = new Schema(
      {
        number: { type: Number, required: true },
        team1: { type: Schema.Types.ObjectID, ref: 'Team'},
        team2: { type: Schema.Types.ObjectID, ref: 'Team'},
        team3: { type: Schema.Types.ObjectID, ref: 'Team'},
        team4: { type: Schema.Types.ObjectID, ref: 'Team'},
        team5: { type: Schema.Types.ObjectID, ref: 'Team'},
        team6: { type: Schema.Types.ObjectID, ref: 'Team'}
      }
    )

    // export as model =====================
    module.exports = mongoose.model('Match', MatchSchema)
