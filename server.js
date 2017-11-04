const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./connection/connection.js');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');
const config = require('./config/config.json');

const PORT = process.env.PORT || 3001;

const app = express();

// Set static
app.use(express.static(path.join(__dirname, 'client/public')));
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

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate({ '_body': false })));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
