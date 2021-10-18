const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();

// Get Posts
router.get('/', indexController.getHomepageData);

module.exports = router;
