const router = require('express').Router();
const path = require('path');
const tripodRoutes = require('./tripodRoutes');
const users = require('./users');
const authentication = require('./authentication');

router.use('/activity', tripodRoutes);
router.use('/users', users);
router.use('/authentication', authentication);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
