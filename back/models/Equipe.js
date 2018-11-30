var mongoose = require('mongoose');

var EquipeSchema = new mongoose.Schema({
  nomAsso: String,
  nombreParticipants: Number,
  participePreRush : Boolean,
  dateHeureArrivee : String,
  hebergementVendredi : Boolean,
  membre : {nom : String, prenom : String, tel: String},
  membres : String, 
  updated_at: { type: Date, default: Date.now },
  restrictionsAlim : String,
});

module.exports = mongoose.model('Equipe', EquipeSchema);