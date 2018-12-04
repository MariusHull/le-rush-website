var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  nom: String,
  telephone: String,
  mail: String,
  fonction : String,
  path: String,
  profilePath : String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);