const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();

// Get Posts
router.get('/', indexController.getHomepageData);

// Get Posts By User
router.get('/users/:uid/posts/', indexController.getPostsByUser);

module.exports = router;
