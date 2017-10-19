const LocalStrategy = require('passport-local').Strategy;

// load up the user model
const User = require('../models/user');

// expose this function to our app using module.exports

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },
    ((req, email, password, done) => {
      console.log(req);
      console.log(email);
      console.log(password)
      process.nextTick(() => {
        User.findOne({ 'local.email': email }, (err, user) => {
          if (err) { return done(err); }

          if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          }
          const newUser = new User();

          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.local.agree = agree;

          newUser.save((err) => {
            if (err) { throw err; }
            console.log(newUser);
            return done(null, newUser);
          });
        });
      });
    }),
  ));
};
