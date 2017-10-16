const router = require('express').Router();
const passport = require('passport');
// const Account = require('../models/account');
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;
