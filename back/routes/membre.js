var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Equipe = require('../models/Equipe.js');

/* Get de tous les équipes */
router.get('/', function(req, res, next) {
  Equipe.find(function (err, contacts) {
    if (err) return next(err);
    res.json(contacts);
  });
});


/* Sauvegarde d'une nouvelle équipe */
router.post('/', function(req, res, next) {
  Equipe.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Mise à jour d'une équipe */
router.put('/:id', function(req, res, next) {
  Equipe.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Suppression d'une équipe */
router.delete('/:id', function(req, res, next) {
  Equipe.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
