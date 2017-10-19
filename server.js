const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./connection/connection.js');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');
// const config = require('./config/config.json');

const PORT = process.env.PORT || 3001;

const app = express();

// Set static
app.use(express.static(path.join(__dirname, 'client/build')));
// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(session({
  secret: process.env.CCRET || config.secret,
  cookie: {
    maxAge: 1800000,
  },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db }),
}));

// app.use((req, res, next) => {
//   console.log(req.session);
//   const id = req.session.user;
//   console.log(id);
//   // req.session.user = id;
//   req.session.save();
// });

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate({ passReqToCallback: false })));
//   {usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true,
// }, ((username, password, done) => {
//     User.findOne({ 'email': email }, (err, user) => {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   })));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// session tests
let sess;

app.get('/start', (req, res) => {
  sess = req.session;
  console.log(req.user);
  // Session set when user Request our app via URL
  if (req.user) {
    /*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect('/admin');
  } else {
    console.log('no session');
  }
});

app.post('/check', (req, res) => {
  sess = req.session;

  // In this we are assigning email to sess.email variable.
  // email comes from HTML page.
  sess.email = req.body.email;
  res.end('done');
});

app.get('/admin', (req, res) => {
  sess = req.session;
  if (sess.email) {
    res.write(`<h1>Hello ${sess.email}</h1>`);
    res.end('<a href="+">Logout</a>');
  } else {
    res.write('<h1>Please logins first.</h1>');
    res.end('<a href="+">Login</a>');
  }
});

app.get('/logouttahere', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.user._id);
      res.redirect('/');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
