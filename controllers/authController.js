const User = require('../models/user');
const passport = require('passport');
const auth = require('../scripts/auth.js');

module.exports = {
  register(req, res) {
    const validationResult = auth.validateSignupForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors,
      });
    }
    const newUser = new User({
      email: req.body.email,
      agree: req.body.agree,
    });

    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        return res.json({ error: err });
      }
      return done('Success in Signing Up with Tripod');
    });
  },

  login(req, res) {
    console.log(req.session)
    const validationResult = auth.validateLoginForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }
    passport.authenticate('local', { failureRedirect: '/login' })(req, res, () => {
      console.log(req);
      if (req.user) {
        return res.json(user.id);
      }
      return res.json({ error: 'There was an error logging in' });
    });
  },

  logout(req, res) {
    console.log(req.user);
    req.logout();
    console.log(req.user);
    return res.json(req.user);
  },

};
