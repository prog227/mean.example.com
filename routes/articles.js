var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/', function(req, res, next) {
  res.render('articles/index', { title: 'Articles home' });
});

router.get('/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'Articles' });
});

router.get('/cms', function(req, res, next) {
  res.render('articles/cms', { title: 'CMS' });
});

module.exports = router;