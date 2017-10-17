const express = require('express');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

router.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: 'There was an error logging in' }));
  });
});

router.get('/logout', (req, res) => {
  console.log(req.user);
  req.logout();
  console.log(req.user);
  return res.send(JSON.stringify(req.user));
});

module.exports = router;
