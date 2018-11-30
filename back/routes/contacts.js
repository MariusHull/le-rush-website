var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/Contact.js');

/* Get de tous les contacts */
router.get('/', function(req, res, next) {
  Contact.find(function (err, contacts) {
    if (err) return next(err);
    res.json(contacts);
  });
});

/* Get d'un contact selon son nom */
router.get('/:nom', function(req, res, next) {
  Contact.findById(req.params.nom, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Sauvegarde d'un nouveau contact */
router.post('/', function(req, res, next) {
  Contact.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Mise à jour d'un contact */
router.put('/:id', function(req, res, next) {
  Contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Suppression d'un contact */
router.delete('/:id', function(req, res, next) {
  Contact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;