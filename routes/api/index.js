const router = require('express').Router();
const tripodRoutes = require('./tripodRoutes');
const users = require('./users');

router.use('/activity', tripodRoutes);
router.use('/users', users);

module.exports = router;
