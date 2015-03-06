/**
 * Module Dependencies
 */

var config = require('./config');

if (!config.debug) {
	require('newrelic');
}

var express = require('express');
var path = require('path');
var Loader = require('loader');

// Static Files Directory (css, js, img etc...)
var staticDir = path.join(__dirname, 'public');

var app = express();

// configuration in all environment
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals.layoutFiles = 'layout.html';

module.exports = app;

