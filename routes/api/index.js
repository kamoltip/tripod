const router = require('express').Router();
const path = require('path');
const tripodRoutes = require('./tripodRoutes');
const users = require('./users');
const authentication = require('./authentication');

function requireLogin(req, res, next) {
  console.log(req.config);
  if (req.user) {
    next(); // allow the next route to run
  } else {
    // require the user to log in
    res.redirect('/'); // or render a form, etc.
  }
}

router.use('/activity', tripodRoutes);
router.use('/users', users);
router.use('/authentication', authentication);

router.use((req, res) => {
  res.redirect('/');
  // res.sendFile(path.join(__dirname, './client/public/index.html'));
});

module.exports = router;
