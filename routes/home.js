var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('main/home');
});
router.get('/panduan', function(req, res, next) {
    res.render('main/panduan');
});
router.get('/contact', function(req, res, next) {
    res.render('main/contact');
});

module.exports = router;