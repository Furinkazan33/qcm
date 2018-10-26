var express = require('express');
var router = express.Router();

var categories = require('../json/categories.json');
var exercice = require('../json/questions.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Exercice', questions: exercice.questions });
});

module.exports = router;
