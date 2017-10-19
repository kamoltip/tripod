const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./connection/connection.js');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const routes = require('./routes');
const config = require('./config/config.json');
require('./connection/passport')(passport);

const PORT = process.env.PORT || 3001;

const app = express();

// Set static
app.use(express.static(path.join(__dirname, 'client/public')));
// Configure middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(helmet());

app.use(session({
  secret: process.env.CCRET || config.secret,
  cookie: {
    maxAge: 1800000,
  },
  resave: true,
  saveUninitialized: true,
  name: 'sessionID',
  store: new MongoStore({ mongooseConnection: db }),
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(routes);

require('./routes/authRoutes.js')(app, passport);
// const User = require('./models/user');
//
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// session tests
// let sess;
//
// app.get('/start', (req, res) => {
//   sess = req.session;
//   console.log(req.user);
//   // Session set when user Request our app via URL
//   if (req.user) {
//     /*
// * This line check Session existence.
// * If it existed will do some action.
// */
//     res.redirect('/admin');
//   } else {
//     console.log('no session');
//   }
// });
//
// app.get('/admin', (req, res) => {
//   sess = req.session;
//   if (sess.email) {
//     res.write(`<h1>Hello ${sess.email}</h1>`);
//     res.end('<a href="+">Logout</a>');
//   } else {
//     res.write('<h1>Please logins first.</h1>');
//     res.end('<a href="+">Login</a>');
//   }
// });
//
// app.get('/logouttahere', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(req.user._id);
//       res.redirect('/');
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
