const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();

// Get Posts
router.get('/', indexController.getHomepageData);

// Get Posts By User
router.get('/users/:uid/posts/', indexController.getPostsByUser);

// Redirect from bad routes
router.get('/users/', function(req, res) {
    res.redirect('/');
});

router.get('/users/:uid/', function(req, res) {
    res.redirect('/');
});

module.exports = router;
