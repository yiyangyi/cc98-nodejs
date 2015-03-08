var express = require('express');

var staticController = require('./controllers/static');

var router = express.Router();

// static
router.get('/faq', staticController.faq);
router.get('/robots.txt', staticController.robot);
router.get('/api', staticController.api);
router.get('/about', staticController.about);

module.exports = router;