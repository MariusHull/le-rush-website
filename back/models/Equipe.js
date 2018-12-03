var mongoose = require('mongoose');

var EquipeSchema = new mongoose.Schema({
  nomAsso: String,
  nomEcole: String,
  veutPreRush : Boolean,
  dateArrivee : String,
  veutHebergement : Boolean,
  liste : [String], 
  remarques : String,
});

module.exports = mongoose.model('Equipe', EquipeSchema);