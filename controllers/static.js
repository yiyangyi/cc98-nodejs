var multiline = require('multiline');
//Static pages

//faq
exports.faq = function(req, res, next) {
  res.render('static/faq', { 
  	pageTitle: 'FAQ'
  });
};

//robots.txt
exports.robots = function(req, res, next) {
  res.type('text/plain');
  res.send(multiline(function () {;
/*
# See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#
# To ban all spiders from the entire site uncomment the next two lines:
# User-Agent: *
# Disallow: /
*/
  }));
};

//api
exports.api = function(req, res, next) {
  res.render('static/api', {
  	pageTitle: 'API'
  });
}

//about
exports.about = function(req, res, next) {
  res.render('static/about', {
  	pageTitle: 'About Us'
  });
}