var _ = require('lodash');
var EventProxy = require('EventProxy');

var User = require('../proxy').User;
var Note = require('../proxy').Note;

var config = require('../config');


exports.index  = function (req, res, next) {
	var notes = Note.getNotes();
	var notecounts = Note.getNoteCounts();
	res.render('notes', {
		notes: notes,
		notecounts: notecounts
	});
};

exports.show   = function (req, res, next) {
	var note = Note.getNoteById(req.params.id);
	res.render('notes/show', {
		note: note
	});
};

exports.new    = function (req, res, next) {
	res.render('notes/new');
};

exports.store  = function (req, res, next) {
	// TODO some validation on the request objects
};

exports.edit   = function (req, res, next) {
	var id = req.params.id;
	res.render('notes/edit', {
		id: id
	});
};

exports.update = function (req, res, next) {
	// TODO some validation on the request objects and than saves them.
};

exports.destroy = function (req, res, next) {
	var id = req.params.id;

	Note.getNoteById(id, function (err, note) {
		// TODO delete the note from the collections
	});
}