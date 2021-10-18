const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();

// Get Posts
router.get('/', indexController.getHomepageData);

// Get Posts By User
router.get('/:uid', indexController.getPostsByUser);

module.exports = router;
