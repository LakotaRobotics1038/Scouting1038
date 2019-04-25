// team.js

    // import modules =====================
    var mongoose = require('mongoose') // mongoose import
    var Schema   = mongoose.Schema   // schema import from mongoose for models

    // define schema ======================
    var TeamSchema = new Schema(
      {
        number: { type: Number, required: true },
      }
    )

    // export as model =====================
    module.exports = mongoose.model('Team', TeamSchema)
